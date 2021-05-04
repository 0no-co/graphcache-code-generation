import { Resolver } from '../types';
export declare type MergeMode = 'before' | 'after';
export interface PaginationParams {
    offsetArgument?: string;
    limitArgument?: string;
    mergeMode?: MergeMode;
}
export declare const simplePagination: ({ offsetArgument, limitArgument, mergeMode, }?: PaginationParams) => Resolver;
