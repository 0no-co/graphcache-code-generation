import { FieldArgs, FieldInfo, KeyInfo } from '../types';
export declare const keyOfField: (fieldName: string, args?: FieldArgs) => string;
export declare const joinKeys: (parentKey: string, key: string) => string;
export declare const fieldInfoOfKey: (fieldKey: string) => FieldInfo;
export declare const serializeKeys: (entityKey: string, fieldKey: string) => string;
export declare const deserializeKeyInfo: (key: string) => KeyInfo;
