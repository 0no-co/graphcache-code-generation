import { DocumentNode } from 'graphql';
import { TypedDocumentNode } from '@urql/core';
import { Cache, FieldInfo, ResolverConfig, DataField, Variables, FieldArgs, Link, Data, QueryInput, UpdateResolver, OptimisticMutationConfig, KeyingConfig, Entity, CacheExchangeOpts } from '../types';
import * as InMemoryData from './data';
import { SchemaIntrospector } from '../ast';
declare type RootField = 'query' | 'mutation' | 'subscription';
export declare class Store<C extends Partial<CacheExchangeOpts> = Partial<CacheExchangeOpts>> implements Cache {
    data: InMemoryData.InMemoryData;
    resolvers: ResolverConfig;
    updates: Record<string, Record<string, UpdateResolver>>;
    optimisticMutations: OptimisticMutationConfig;
    keys: KeyingConfig;
    schema?: SchemaIntrospector;
    rootFields: {
        query: string;
        mutation: string;
        subscription: string;
    };
    rootNames: {
        [name: string]: RootField;
    };
    constructor(opts?: C);
    keyOfField: (fieldName: string, args?: FieldArgs) => string;
    keyOfEntity(data: Entity): string | null;
    resolve(entity: Entity, field: string, args?: FieldArgs): DataField;
    resolveFieldByKey: (entity: Entity, field: string, args?: FieldArgs) => DataField;
    invalidate(entity: Entity, field?: string, args?: FieldArgs): void;
    inspectFields(entity: Entity): FieldInfo[];
    updateQuery<T = Data, V = Variables>(input: QueryInput<T, V>, updater: (data: T | null) => T | null): void;
    readQuery<T = Data, V = Variables>(input: QueryInput<T, V>): T | null;
    readFragment<T = Data, V = Variables>(fragment: DocumentNode | TypedDocumentNode<T, V>, entity: string | Data | T, variables?: V): T | null;
    writeFragment<T = Data, V = Variables>(fragment: DocumentNode | TypedDocumentNode<T, V>, data: T, variables?: V): void;
    link(entity: Entity, field: string, args: FieldArgs, link: Link<Entity>): void;
    link(entity: Entity, field: string, link: Link<Entity>): void;
}
export {};
