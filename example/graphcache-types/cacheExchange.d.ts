import { Exchange } from '@urql/core';
export declare const cacheExchange: <C extends Partial<Partial<{
    updates: Partial<import("./types").UpdatesConfig>;
    resolvers: import("./types").ResolverConfig;
    optimistic: import("./types").OptimisticMutationConfig;
    keys: import("./types").KeyingConfig;
    schema: import("./ast").IntrospectionData;
    storage: import("./types").StorageAdapter;
}>>>(opts?: C | undefined) => Exchange;
