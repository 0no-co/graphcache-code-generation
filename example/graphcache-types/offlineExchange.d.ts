import { Exchange } from '@urql/core';
import { OptimisticMutationConfig } from './types';
export declare const offlineExchange: <C extends Partial<Partial<{
    updates: Partial<import("./types").UpdatesConfig>;
    resolvers: import("./types").ResolverConfig;
    optimistic: OptimisticMutationConfig;
    keys: import("./types").KeyingConfig;
    schema: import("./ast").IntrospectionData;
    storage: import("./types").StorageAdapter;
}>>>(opts: C) => Exchange;
