import { SelectionNode, DocumentNode, OperationDefinitionNode } from 'graphql';
import { Fragments, Variables } from '../types';
/** Returns the main operation's definition */
export declare const getMainOperation: (doc: DocumentNode) => OperationDefinitionNode;
/** Returns a mapping from fragment names to their selections */
export declare const getFragments: (doc: DocumentNode) => Fragments;
export declare const shouldInclude: (node: SelectionNode, vars: Variables) => boolean;
