import { NamedTypeNode, NameNode, SelectionNode, SelectionSetNode, InlineFragmentNode, FieldNode, FragmentDefinitionNode } from 'graphql';
export declare type SelectionSet = ReadonlyArray<SelectionNode>;
/** Returns the name of a given node */
export declare const getName: (node: {
    name: NameNode;
}) => string;
export declare const getFragmentTypeName: (node: FragmentDefinitionNode) => string;
/** Returns either the field's name or the field's alias */
export declare const getFieldAlias: (node: FieldNode) => string;
/** Returns the SelectionSet for a given inline or defined fragment node */
export declare const getSelectionSet: (node: {
    selectionSet?: SelectionSetNode;
}) => SelectionSet;
export declare const getTypeCondition: (node: {
    typeCondition?: NamedTypeNode;
}) => string | null;
export declare const isFieldNode: (node: SelectionNode) => node is FieldNode;
export declare const isInlineFragment: (node: SelectionNode) => node is InlineFragmentNode;
