import { Resolver } from '../types';
export declare type MergeMode = 'outwards' | 'inwards';
export interface PaginationParams {
    mergeMode?: MergeMode;
}
export declare const relayPagination: (params?: PaginationParams) => Resolver;
