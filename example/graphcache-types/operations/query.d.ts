import { DocumentNode } from 'graphql';
import { CombinedError } from '@urql/core';
import { Variables, Data, OperationRequest, Dependencies } from '../types';
import { Store } from '../store';
export interface QueryResult {
    dependencies: Dependencies;
    partial: boolean;
    data: null | Data;
}
export declare const query: (store: Store, request: OperationRequest, data?: Data | undefined, error?: CombinedError | undefined, key?: number | undefined) => QueryResult;
export declare const read: (store: Store, request: OperationRequest, input?: Data | undefined, error?: CombinedError | undefined) => QueryResult;
export declare const readFragment: (store: Store, query: DocumentNode, entity: Partial<Data> | string, variables?: Variables | undefined) => Data | null;
