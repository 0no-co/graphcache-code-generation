import { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import {
  GraphQLSchema,
  isWrappingType,
  Kind,
  GraphQLWrappingType,
  TypeNode,
} from "graphql";
import { TypeMap } from "graphql/type/schema";
import { UrqlGraphCacheConfig } from "./config";
import { baseTypes, imports } from './constants';

type GraphQLFlatType = Exclude<TypeNode, GraphQLWrappingType>;

const unwrapType = (
  type: null | undefined | TypeNode
): GraphQLFlatType | null => {
  if (isWrappingType(type)) {
    return unwrapType(type.ofType);
  }

  return type || null;
};

function constructType(typeNode: TypeNode, nullable: boolean = true): string {
  switch(typeNode.kind) {
    case 'ListType': {
      return nullable ? `Maybe<Array<${constructType(typeNode.type)}>>` : `Array<${constructType(typeNode.type)}>`
    }
    case 'NamedType': {
      const type = baseTypes.includes(typeNode.name.value) ? `Scalars['${typeNode.name.value}']` : `RequireFields<${typeNode.name.value}, '__typename'>`;
      return nullable ? `Maybe<${type}>` : type;
    }
    case 'NonNullType': {
      return constructType(typeNode.type, false)
    }
  }
}

const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1)

function getKeysConfig(schema: GraphQLSchema) {
  const keys = [];

  const roots = [
    schema.getQueryType()?.name,
    schema.getMutationType()?.name,
    schema.getSubscriptionType()?.name,
  ].filter(Boolean);

  const typeMap = schema.getTypeMap();
  const isValidType = (type: string) => !roots.includes(type) && !type.startsWith('__') && !baseTypes.includes(type);

  Object.keys(typeMap).forEach(function (key) {
    if (!isValidType(key)) return;

    const type = typeMap[key];
    if (type.astNode?.kind !== Kind.OBJECT_TYPE_DEFINITION) return;

    keys.push(`${type.name}?: (data: ${type.name}) => null | string`)
  });

  return `
export type GraphCacheKeysConfig = {
  ${keys.join('\n  ')}
}
  `;
}

function getResolversConfig(schema: GraphQLSchema) {
  const resolvers = [];

  const roots = [
    schema.getMutationType()?.name,
    schema.getSubscriptionType()?.name,
  ].filter(Boolean);

  const typeMap = schema.getTypeMap();
  const isValidType = (type: string) => !roots.includes(type) && !type.startsWith('__') && !baseTypes.includes(type);

  Object.keys(typeMap).forEach(function (key) {
    if (!isValidType(key)) return;

    const parentType = typeMap[key];
    if (parentType.astNode?.kind !== Kind.OBJECT_TYPE_DEFINITION) return;
    const fields = [];
    parentType.astNode.fields.forEach(function (field) {
      const argsName = field.arguments && field.arguments.length ? `${parentType.name}${capitalize(field.name.value)}Args` : 'null';
      const type = unwrapType(field.type); 
      fields.push(`${field.name.value}?: GraphCacheResolver<${parentType.name}, ${argsName}, ${constructType(type)}>`);
    });

    resolvers.push(`${parentType.name}?: {
    ${fields.join('\n    ')}
  }`)
  });

  return resolvers;
}

function getSubscriptionUpdatersConfig(typemap: TypeMap, subscriptionName: string) {
  const updaters = [];
  const subscriptionType = typemap[subscriptionName];

  if (subscriptionType.astNode.kind === Kind.OBJECT_TYPE_DEFINITION) {
    const { fields } = subscriptionType.astNode;
    fields.forEach(fieldNode => {
      const argsName = `Mutation${capitalize(fieldNode.name.value)}Args`;
      const type = unwrapType(fieldNode.type);

      updaters.push(`${fieldNode.name.value}?: GraphCacheUpdateResolver<${constructType(type)}, ${argsName}>`);
    });
  }

  return updaters;
}

function getMutationUpdaterConfig(typemap: TypeMap, mutationName: string) {
  const updaters = [];
  const mutationType = typemap[mutationName];

  if (mutationType.astNode.kind === Kind.OBJECT_TYPE_DEFINITION) {
    const { fields } = mutationType.astNode;
    fields.forEach(fieldNode => {
      const argsName = `Mutation${capitalize(fieldNode.name.value)}Args`;
      const type = unwrapType(fieldNode.type); 
      updaters.push(`${fieldNode.name.value}?: GraphCacheUpdateResolver<${constructType(type)}, ${argsName}>`);
    });
  }

  return updaters;
}

function getOptimisticUpdatersConfig(typemap: TypeMap, mutationName: string) {
  const optimistic = [];
  const mutationType = typemap[mutationName];

  if (mutationType.astNode.kind === Kind.OBJECT_TYPE_DEFINITION) {
    const { fields } = mutationType.astNode;
    fields.forEach(fieldNode => {
      const argsName = `Mutation${capitalize(fieldNode.name.value)}Args`;
      const type = unwrapType(fieldNode.type); 
      optimistic.push(`${fieldNode.name.value}?: GraphCacheOptimisticMutationResolver<${argsName}, ${constructType(type)}>`);
    });
  }

  return optimistic;
}

export const plugin: PluginFunction<
  UrqlGraphCacheConfig,
  Types.ComplexPluginOutput
> = (schema: GraphQLSchema) => {
  const mutationName = schema.getMutationType()?.name;
  const subscriptionsName = schema.getSubscriptionType()?.name;

  const typeMap = schema.getTypeMap();
  const keys = getKeysConfig(schema);
  const resolvers = getResolversConfig(schema);
  let mutationUpdaters, subscriptionUpaters, optimisticUpdaters;
  if (mutationName) {
    mutationUpdaters = getMutationUpdaterConfig(typeMap, mutationName);
    optimisticUpdaters = getOptimisticUpdatersConfig(typeMap, mutationName);
  }

  if (subscriptionsName) {
    subscriptionUpaters = getSubscriptionUpdatersConfig(typeMap, subscriptionsName);
  }

  return {
    prepend: [imports],
    content: [
      `export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };`,
      keys,
      `export type GraphCacheResolvers = {
  ${resolvers.join('\n  ')}
}`,
      mutationName && `export type GraphCacheOptimisticUpdaters = {
  ${optimisticUpdaters.join('\n  ')}
}`,
      mutationName || subscriptionsName ? `export type GraphCacheUpdaters = {
  Mutation: ${mutationName ? `{
    ${mutationUpdaters.join('\n    ')}
  }` : 'object'}
  Subscription: ${subscriptionsName ? `{
    ${subscriptionUpaters.join('\n    ')}
  }` : 'object'}
}` : null,
    ].filter(Boolean).join('\n'),
  };
};