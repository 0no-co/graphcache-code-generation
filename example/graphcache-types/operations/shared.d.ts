import { CombinedError } from '@urql/core';
import { GraphQLError, FieldNode } from 'graphql';
import { SelectionSet } from '../ast';
import { Store } from '../store';
import { Fragments, Variables, DataField, NullArray, Link, Entity, Data } from '../types';
export interface Context {
    store: Store;
    variables: Variables;
    fragments: Fragments;
    parentTypeName: string;
    parentKey: string;
    parentFieldKey: string;
    parent: Data;
    fieldName: string;
    error: GraphQLError | undefined;
    partial: boolean;
    optimistic: boolean;
    __internal: {
        path: Array<string | number>;
        errorMap: {
            [path: string]: GraphQLError;
        } | undefined;
    };
}
export declare const contextRef: {
    current: Context | null;
};
export declare const getFieldError: (ctx: Context) => GraphQLError | undefined;
export declare const makeContext: (store: Store, variables: Variables, fragments: Fragments, typename: string, entityKey: string, optimistic?: boolean | undefined, error?: CombinedError | undefined) => Context;
export declare const updateContext: (ctx: Context, data: Data, typename: string, entityKey: string, fieldKey: string, fieldName: string) => void;
interface SelectionIterator {
    (): FieldNode | undefined;
}
export declare const makeSelectionIterator: (typename: void | string, entityKey: string, select: SelectionSet, ctx: Context) => SelectionIterator;
export declare const ensureData: (x: DataField) => Data | NullArray<Data> | null;
export declare const ensureLink: (store: Store, ref: Link<Entity>) => Link;
export {};
