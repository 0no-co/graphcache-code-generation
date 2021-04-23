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
import { baseTypes, legacyImports, legacyWrapper } from './constants';

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
      return nullable ? `Maybe<${typeNode.name.value}>` : typeNode.name.value;
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

    keys.push(`${type.name}: (data: ${type.name}) => null | string`)
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

    const type = typeMap[key];
    if (type.astNode?.kind !== Kind.OBJECT_TYPE_DEFINITION) return;

    // TODO: use type and traverse its types
  });
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
      optimistic.push(`${fieldNode.name.value}?: GraphCacheOptimisticMutationResolver<${argsName}>`);
    });
  }

  return optimistic;
}

export const plugin: PluginFunction<
  UrqlGraphCacheConfig,
  Types.ComplexPluginOutput
> = (schema: GraphQLSchema) => {
  const queryName = schema.getQueryType()?.name;
  const mutationName = schema.getMutationType()?.name;
  const subscriptionsName = schema.getSubscriptionType()?.name;

  const typeMap = schema.getTypeMap();
  const keys = getKeysConfig(schema);
  // const resolvers = getResolversConfig(typeMap, queryName);
  let mutationUpdaters, subscriptionUpaters, optimisticUpdaters;
  if (mutationName) {
    mutationUpdaters = getMutationUpdaterConfig(typeMap, mutationName);
    optimisticUpdaters = getOptimisticUpdatersConfig(typeMap, mutationName);
  }

  if (subscriptionsName) {
    subscriptionUpaters = getSubscriptionUpdatersConfig(typeMap, subscriptionsName);
  }

  return {
    prepend: [legacyImports],
    content: [
      legacyWrapper,
      keys,
      mutationName && `export type GraphCacheOptimisticUpdaters = {
  ${optimisticUpdaters.join('\n  ')}
}`,
      mutationName || subscriptionsName ? `export type GraphCacheUpdaters = {
  ${mutationName ? `Mutation: {
    ${mutationUpdaters.join('\n    ')}
  }` : ''}${subscriptionsName ? `Subscription: {
    ${subscriptionUpaters.join('\n    ')}
  }` : ''}
}` : null,
    ].filter(Boolean).join('\n'),
  };
};