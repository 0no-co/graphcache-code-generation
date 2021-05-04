import { DocumentNode } from 'graphql';
import { CombinedError } from '@urql/core';
import { Variables, Data, OperationRequest, Dependencies } from '../types';
import { Store } from '../store';
export interface WriteResult {
    data: null | Data;
    dependencies: Dependencies;
}
/** Writes a request given its response to the store */
export declare const write: (store: Store, request: OperationRequest, data: Data, error?: CombinedError | undefined, key?: number | undefined) => WriteResult;
export declare const writeOptimistic: (store: Store, request: OperationRequest, key: number) => WriteResult;
export declare const startWrite: (store: Store, request: OperationRequest, data: Data, error?: CombinedError | undefined, isOptimistic?: boolean | undefined) => WriteResult;
export declare const writeFragment: (store: Store, query: DocumentNode, data: Partial<Data>, variables?: Variables | undefined) => void;
