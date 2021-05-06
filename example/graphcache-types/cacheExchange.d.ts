import { Exchange } from '@urql/core';
import { IntrospectionData } from './ast';
import { StorageAdapter, UpdatesConfig, ResolverConfig, OptimisticMutationConfig, KeyingConfig } from './types';
export declare type CacheExchangeOpts = {
    updates: Partial<UpdatesConfig>;
    resolvers: ResolverConfig;
    optimistic: OptimisticMutationConfig;
    keys: KeyingConfig;
    schema: IntrospectionData;
    storage: StorageAdapter;
};
export declare const cacheExchange: <C extends CacheExchangeOpts>(opts?: C | undefined) => Exchange;
