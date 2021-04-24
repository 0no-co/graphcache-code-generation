import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Cache, ResolveInfo, Data, Variables, NullArray, DataField, DataFields } from '@urql/exchange-graphcache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Author = {
  __typename?: 'Author';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  friends?: Maybe<Array<Maybe<Author>>>;
  friendsPaginated?: Maybe<Array<Maybe<Author>>>;
};


export type AuthorFriendsPaginatedArgs = {
  from: Scalars['Int'];
  limit: Scalars['Int'];
};

export type Book = {
  __typename?: 'Book';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['Int']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CoolBook = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
};

export type Media = Book | Movie;

export type Movie = {
  __typename?: 'Movie';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  toggleTodo: Todo;
  toggleTodos: Array<Todo>;
  toggleTodosOptionalArray?: Maybe<Array<Todo>>;
  toggleTodosOptionalEntity: Array<Maybe<Todo>>;
  toggleTodosOptional?: Maybe<Array<Maybe<Todo>>>;
  updateMedia?: Maybe<Media>;
};


export type MutationToggleTodoArgs = {
  id: Scalars['ID'];
};


export type MutationToggleTodosArgs = {
  id: Array<Scalars['ID']>;
};


export type MutationToggleTodosOptionalArrayArgs = {
  id: Array<Scalars['ID']>;
};


export type MutationToggleTodosOptionalEntityArgs = {
  id: Array<Scalars['ID']>;
};


export type MutationToggleTodosOptionalArgs = {
  id: Array<Scalars['ID']>;
};


export type MutationUpdateMediaArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  todos?: Maybe<Array<Maybe<Todo>>>;
  messages?: Maybe<Array<Maybe<Scalars['String']>>>;
  messagesPaginated?: Maybe<Array<Maybe<Scalars['String']>>>;
  media?: Maybe<Media>;
  schoolBooks?: Maybe<Array<Maybe<CoolBook>>>;
};


export type QueryMessagesPaginatedArgs = {
  from: Scalars['Int'];
  limit: Scalars['Int'];
};

export type Textbook = CoolBook & {
  __typename?: 'Textbook';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
  todo?: Maybe<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  complete?: Maybe<Scalars['Boolean']>;
  author?: Maybe<Author>;
};




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Author: ResolverTypeWrapper<Author>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Book: ResolverTypeWrapper<Book>;
  CacheControlScope: CacheControlScope;
  CoolBook: ResolversTypes['Textbook'];
  Media: ResolversTypes['Book'] | ResolversTypes['Movie'];
  Movie: ResolverTypeWrapper<Movie>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Textbook: ResolverTypeWrapper<Textbook>;
  Todo: ResolverTypeWrapper<Todo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Author: Author;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  Book: Book;
  CoolBook: ResolversParentTypes['Textbook'];
  Media: ResolversParentTypes['Book'] | ResolversParentTypes['Movie'];
  Movie: Movie;
  Mutation: {};
  Query: {};
  Textbook: Textbook;
  Todo: Todo;
  Boolean: Scalars['Boolean'];
  Upload: Scalars['Upload'];
};

export type CacheControlDirectiveArgs = {   maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>; };

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  friends?: Resolver<Maybe<Array<Maybe<ResolversTypes['Author']>>>, ParentType, ContextType>;
  friendsPaginated?: Resolver<Maybe<Array<Maybe<ResolversTypes['Author']>>>, ParentType, ContextType, RequireFields<AuthorFriendsPaginatedArgs, 'from' | 'limit'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoolBookResolvers<ContextType = any, ParentType extends ResolversParentTypes['CoolBook'] = ResolversParentTypes['CoolBook']> = {
  __resolveType: TypeResolveFn<'Textbook', ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
};

export type MediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']> = {
  __resolveType: TypeResolveFn<'Book' | 'Movie', ParentType, ContextType>;
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  toggleTodo?: Resolver<ResolversTypes['Todo'], ParentType, ContextType, RequireFields<MutationToggleTodoArgs, 'id'>>;
  toggleTodos?: Resolver<Array<ResolversTypes['Todo']>, ParentType, ContextType, RequireFields<MutationToggleTodosArgs, 'id'>>;
  toggleTodosOptionalArray?: Resolver<Maybe<Array<ResolversTypes['Todo']>>, ParentType, ContextType, RequireFields<MutationToggleTodosOptionalArrayArgs, 'id'>>;
  toggleTodosOptionalEntity?: Resolver<Array<Maybe<ResolversTypes['Todo']>>, ParentType, ContextType, RequireFields<MutationToggleTodosOptionalEntityArgs, 'id'>>;
  toggleTodosOptional?: Resolver<Maybe<Array<Maybe<ResolversTypes['Todo']>>>, ParentType, ContextType, RequireFields<MutationToggleTodosOptionalArgs, 'id'>>;
  updateMedia?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType, RequireFields<MutationUpdateMediaArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  todos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Todo']>>>, ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  messagesPaginated?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType, RequireFields<QueryMessagesPaginatedArgs, 'from' | 'limit'>>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  schoolBooks?: Resolver<Maybe<Array<Maybe<ResolversTypes['CoolBook']>>>, ParentType, ContextType>;
};

export type TextbookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Textbook'] = ResolversParentTypes['Textbook']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  todo?: Resolver<Maybe<ResolversTypes['Todo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  complete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['Author']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  Author?: AuthorResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  CoolBook?: CoolBookResolvers<ContextType>;
  Media?: MediaResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Textbook?: TextbookResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;

type ResolverResult =
  | DataField
  | (DataFields & { __typename?: string })
  | null
  | undefined;

export type GraphCacheResolver<ParentData = Data, FieldData = ResolverResult, ResolverVariables = Variables> = (
  parent: ParentData,
  args: ResolverVariables,
  cache: Cache,
  info: ResolveInfo
) => FieldData;

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


export type GraphCacheKeysConfig = {
  Author?: (data: Author) => null | string
  Book?: (data: Book) => null | string
  Movie?: (data: Movie) => null | string
  Textbook?: (data: Textbook) => null | string
  Todo?: (data: Todo) => null | string
}
  
export type GraphCacheResolvers = {
  Author?: {
    id?: Resolver<Author, Maybe<Scalars['ID']>, null>
    name?: Resolver<Author, Maybe<Scalars['String']>, null>
    friends?: Resolver<Author, Maybe<Array<Maybe<Author>>>, null>
    friendsPaginated?: Resolver<Author, Maybe<Array<Maybe<Author>>>, AuthorFriendsPaginatedArgs>
  }
  Book?: {
    id?: Resolver<Book, Maybe<Scalars['ID']>, null>
    title?: Resolver<Book, Maybe<Scalars['String']>, null>
    pages?: Resolver<Book, Maybe<Scalars['Int']>, null>
  }
  Movie?: {
    id?: Resolver<Movie, Maybe<Scalars['ID']>, null>
    title?: Resolver<Movie, Maybe<Scalars['String']>, null>
    duration?: Resolver<Movie, Maybe<Scalars['Int']>, null>
  }
  Query?: {
    todos?: Resolver<Query, Maybe<Array<Maybe<Todo>>>, null>
    messages?: Resolver<Query, Maybe<Array<Maybe<Scalars['String']>>>, null>
    messagesPaginated?: Resolver<Query, Maybe<Array<Maybe<Scalars['String']>>>, QueryMessagesPaginatedArgs>
    media?: Resolver<Query, Maybe<Media>, null>
    schoolBooks?: Resolver<Query, Maybe<Array<Maybe<CoolBook>>>, null>
  }
  Textbook?: {
    id?: Resolver<Textbook, Maybe<Scalars['ID']>, null>
    title?: Resolver<Textbook, Maybe<Scalars['String']>, null>
    author?: Resolver<Textbook, Maybe<Author>, null>
    todo?: Resolver<Textbook, Maybe<Todo>, null>
  }
  Todo?: {
    id?: Resolver<Todo, Maybe<Scalars['ID']>, null>
    text?: Resolver<Todo, Maybe<Scalars['String']>, null>
    complete?: Resolver<Todo, Maybe<Scalars['Boolean']>, null>
    author?: Resolver<Todo, Maybe<Author>, null>
  }
}
export type GraphCacheOptimisticUpdaters = {
  toggleTodo?: GraphCacheOptimisticMutationResolver<MutationToggleTodoArgs>
  toggleTodos?: GraphCacheOptimisticMutationResolver<MutationToggleTodosArgs>
  toggleTodosOptionalArray?: GraphCacheOptimisticMutationResolver<MutationToggleTodosOptionalArrayArgs>
  toggleTodosOptionalEntity?: GraphCacheOptimisticMutationResolver<MutationToggleTodosOptionalEntityArgs>
  toggleTodosOptional?: GraphCacheOptimisticMutationResolver<MutationToggleTodosOptionalArgs>
  updateMedia?: GraphCacheOptimisticMutationResolver<MutationUpdateMediaArgs>
}
export type GraphCacheUpdaters = {
  Mutation: {
    toggleTodo?: GraphCacheUpdateResolver<Todo, MutationToggleTodoArgs>
    toggleTodos?: GraphCacheUpdateResolver<Array<Todo>, MutationToggleTodosArgs>
    toggleTodosOptionalArray?: GraphCacheUpdateResolver<Maybe<Array<Todo>>, MutationToggleTodosOptionalArrayArgs>
    toggleTodosOptionalEntity?: GraphCacheUpdateResolver<Array<Maybe<Todo>>, MutationToggleTodosOptionalEntityArgs>
    toggleTodosOptional?: GraphCacheUpdateResolver<Maybe<Array<Maybe<Todo>>>, MutationToggleTodosOptionalArgs>
    updateMedia?: GraphCacheUpdateResolver<Maybe<Media>, MutationUpdateMediaArgs>
  }
  Subscription: object
}