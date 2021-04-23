export const baseTypes = [
  'Int',
  'String',
  'Boolean',
  'Float',
  'ID',
];

export const imports = `import { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver } from '@urql/exchange-graphcache';`

export const legacyImports = `import { Cache, ResolveInfo, Data, Variables, NullArray, DataField, DataFields } from '@urql/exchange-graphcache';`;
export const legacyWrapper = `
type ResolverResult =
  | DataField
  | (DataFields & { __typename?: string })
  | null
  | undefined;

export type GraphCacheResolver<ParentData = Data, ResolverVariables = Variables> = (
  parent: ParentData,
  args: ResolverVariables,
  cache: Cache,
  info: ResolveInfo
) => ResolverResult;

export type GraphCacheUpdateResolver<ResultData = Data, UpdateVariables = Variables> = (
  result: ResultData,
  args: UpdateVariables,
  cache: Cache,
  info: ResolveInfo
) => void;

export type GraphCacheOptimisticMutationResolver<ResultData = Data, UpdateVariables = Variables> = (
  vars: UpdateVariables,
  cache: Cache,
  info: ResolveInfo
) => null | ResultData | NullArray<ResultData>;
`;