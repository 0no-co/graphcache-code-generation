import { ExecutableDefinitionNode, InlineFragmentNode } from 'graphql';
export declare type ErrorCode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26;
declare type DebugNode = ExecutableDefinitionNode | InlineFragmentNode;
export declare const currentDebugStack: string[];
export declare const popDebugNode: () => string | undefined;
export declare const pushDebugNode: (typename: void | string, node: DebugNode) => void;
export declare function invariant(condition: any, message: string, code: ErrorCode): asserts condition;
export declare function warn(message: string, code: ErrorCode): void;
export {};
