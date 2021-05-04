import { FieldNode, OperationDefinitionNode } from 'graphql';
import { Variables } from '../types';
/** Evaluates a fields arguments taking vars into account */
export declare const getFieldArguments: (node: FieldNode, vars: Variables) => null | Variables;
/** Returns a filtered form of variables with values missing that the query doesn't require */
export declare const filterVariables: (node: OperationDefinitionNode, input: void | object) => {} | undefined;
/** Returns a normalized form of variables with defaulted values */
export declare const normalizeVariables: (node: OperationDefinitionNode, input: void | object) => Variables;
