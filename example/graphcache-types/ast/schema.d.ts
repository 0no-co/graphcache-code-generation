import { IntrospectionQuery, IntrospectionSchema, IntrospectionInputValue, IntrospectionTypeRef } from 'graphql';
export interface SchemaField {
    name: string;
    type: IntrospectionTypeRef;
    args: Record<string, IntrospectionInputValue>;
}
export interface SchemaObject {
    name: string;
    kind: 'INTERFACE' | 'OBJECT';
    interfaces: Record<string, unknown>;
    fields: Record<string, SchemaField>;
}
export interface SchemaUnion {
    name: string;
    kind: 'UNION';
    types: Record<string, unknown>;
}
export interface SchemaIntrospector {
    query: string | null;
    mutation: string | null;
    subscription: string | null;
    types?: Record<string, SchemaObject | SchemaUnion>;
    isSubType(abstract: string, possible: string): boolean;
}
export interface PartialIntrospectionSchema {
    queryType: {
        name: string;
        kind?: any;
    };
    mutationType?: {
        name: string;
        kind?: any;
    } | null;
    subscriptionType?: {
        name: string;
        kind?: any;
    } | null;
    types?: IntrospectionSchema['types'];
}
export declare type IntrospectionData = IntrospectionQuery | {
    __schema: PartialIntrospectionSchema;
};
export declare const buildClientSchema: ({ __schema, }: IntrospectionData) => SchemaIntrospector;
