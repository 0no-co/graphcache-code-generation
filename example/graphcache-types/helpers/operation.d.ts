import { Operation, RequestPolicy, CacheOutcome } from '@urql/core';
export declare const addCacheOutcome: (operation: Operation, outcome: CacheOutcome) => Operation;
export declare const toRequestPolicy: (operation: Operation, requestPolicy: RequestPolicy) => Operation;
