import { Link, EntityField, FieldInfo, StorageAdapter, SerializedEntries, Dependencies, OperationType } from '../types';
declare type Dict<T> = Record<string, T>;
declare type KeyMap<T> = Map<string, T>;
declare type OptimisticMap<T> = Record<number, T>;
interface NodeMap<T> {
    optimistic: OptimisticMap<KeyMap<Dict<T | undefined>>>;
    base: KeyMap<Dict<T>>;
}
export interface InMemoryData {
    /** Flag for whether deferred tasks have been scheduled yet */
    defer: boolean;
    /** A list of entities that have been flagged for gargabe collection since no references to them are left */
    gc: Set<string>;
    /** A list of entity+field keys that will be persisted */
    persist: Set<string>;
    /** The API's "Query" typename which is needed to filter dependencies */
    queryRootKey: string;
    /** Number of references to each entity (except "Query") */
    refCount: Dict<number>;
    /** Number of references to each entity on optimistic layers */
    refLock: OptimisticMap<Dict<number>>;
    /** A map of entity fields (key-value entries per entity) */
    records: NodeMap<EntityField>;
    /** A map of entity links which are connections from one entity to another (key-value entries per entity) */
    links: NodeMap<Link>;
    /** A set of Query operation keys that are in-flight and awaiting a result */
    commutativeKeys: Set<number>;
    /** The order of optimistic layers */
    optimisticOrder: number[];
    /** This may be a persistence adapter that will receive changes in a batch */
    storage: StorageAdapter | null;
}
/** Before reading or writing the global state needs to be initialised */
export declare const initDataState: (operationType: OperationType, data: InMemoryData, layerKey: number | null, isOptimistic?: boolean | undefined) => void;
/** Reset the data state after read/write is complete */
export declare const clearDataState: () => void;
/** Initialises then resets the data state, which may squash this layer if necessary */
export declare const noopDataState: (data: InMemoryData, layerKey: number | null, isOptimistic?: boolean | undefined) => void;
export declare const getCurrentOperation: () => OperationType;
/** As we're writing, we keep around all the records and links we've read or have written to */
export declare const getCurrentDependencies: () => Dependencies;
export declare const make: (queryRootKey: string) => InMemoryData;
/** Garbage collects all entities that have been marked as having no references */
export declare const gc: () => void;
/** Reads an entity's field (a "record") from data */
export declare const readRecord: (entityKey: string, fieldKey: string) => EntityField;
/** Reads an entity's link from data */
export declare const readLink: (entityKey: string, fieldKey: string) => Link | undefined;
/** Writes an entity's field (a "record") to data */
export declare const writeRecord: (entityKey: string, fieldKey: string, value?: EntityField) => void;
export declare const hasField: (entityKey: string, fieldKey: string) => boolean;
/** Writes an entity's link to data */
export declare const writeLink: (entityKey: string, fieldKey: string, link?: Link | undefined) => void;
/** Reserves an optimistic layer and preorders it */
export declare const reserveLayer: (data: InMemoryData, layerKey: number) => void;
/** Return an array of FieldInfo (info on all the fields and their arguments) for a given entity */
export declare const inspectFields: (entityKey: string) => FieldInfo[];
export declare const persistData: () => void;
export declare const hydrateData: (data: InMemoryData, storage: StorageAdapter, entries: SerializedEntries) => void;
export {};
