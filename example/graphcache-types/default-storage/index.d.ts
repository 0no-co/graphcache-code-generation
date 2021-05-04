import { StorageAdapter } from '../types';
export interface StorageOptions {
    idbName?: string;
    maxAge?: number;
}
export interface DefaultStorage extends StorageAdapter {
    clear(): Promise<any>;
}
export declare const makeDefaultStorage: (opts?: StorageOptions | undefined) => DefaultStorage;
