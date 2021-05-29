import { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver } from '@urql/exchange-graphcache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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


export type WithTypename<T extends { __typename?: any }> = { [K in Exclude<keyof T, '__typename'>]?: T[K] } & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  Author?: (data: WithTypename<Author>) => null | string,
  Book?: (data: WithTypename<Book>) => null | string,
  Movie?: (data: WithTypename<Movie>) => null | string,
  Textbook?: (data: WithTypename<Textbook>) => null | string,
  Todo?: (data: WithTypename<Todo>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    todos?: GraphCacheResolver<WithTypename<Query>, null, Array<WithTypename<Todo> | string>>,
    messages?: GraphCacheResolver<WithTypename<Query>, null, Array<Scalars['String'] | string>>,
    messagesPaginated?: GraphCacheResolver<WithTypename<Query>, QueryMessagesPaginatedArgs, Array<Scalars['String'] | string>>,
    media?: GraphCacheResolver<WithTypename<Query>, null, WithTypename<Media> | string>,
    schoolBooks?: GraphCacheResolver<WithTypename<Query>, null, Array<WithTypename<Textbook> | string>>
  },
  Author?: {
    id?: GraphCacheResolver<WithTypename<Author>, null, Scalars['ID'] | string>,
    name?: GraphCacheResolver<WithTypename<Author>, null, Scalars['String'] | string>,
    friends?: GraphCacheResolver<WithTypename<Author>, null, Array<WithTypename<Author> | string>>,
    friendsPaginated?: GraphCacheResolver<WithTypename<Author>, AuthorFriendsPaginatedArgs, Array<WithTypename<Author> | string>>
  },
  Book?: {
    id?: GraphCacheResolver<WithTypename<Book>, null, Scalars['ID'] | string>,
    title?: GraphCacheResolver<WithTypename<Book>, null, Scalars['String'] | string>,
    pages?: GraphCacheResolver<WithTypename<Book>, null, Scalars['Int'] | string>
  },
  Movie?: {
    id?: GraphCacheResolver<WithTypename<Movie>, null, Scalars['ID'] | string>,
    title?: GraphCacheResolver<WithTypename<Movie>, null, Scalars['String'] | string>,
    duration?: GraphCacheResolver<WithTypename<Movie>, null, Scalars['Int'] | string>
  },
  Textbook?: {
    id?: GraphCacheResolver<WithTypename<Textbook>, null, Scalars['ID'] | string>,
    title?: GraphCacheResolver<WithTypename<Textbook>, null, Scalars['String'] | string>,
    author?: GraphCacheResolver<WithTypename<Textbook>, null, WithTypename<Author> | string>,
    todo?: GraphCacheResolver<WithTypename<Textbook>, null, WithTypename<Todo> | string>
  },
  Todo?: {
    id?: GraphCacheResolver<WithTypename<Todo>, null, Scalars['ID'] | string>,
    text?: GraphCacheResolver<WithTypename<Todo>, null, Scalars['String'] | string>,
    complete?: GraphCacheResolver<WithTypename<Todo>, null, Scalars['Boolean'] | string>,
    author?: GraphCacheResolver<WithTypename<Todo>, null, WithTypename<Author> | string>
  }
};

export type GraphCacheOptimisticUpdaters = {
  toggleTodo?: GraphCacheOptimisticMutationResolver<MutationToggleTodoArgs, WithTypename<Todo>>,
  toggleTodos?: GraphCacheOptimisticMutationResolver<MutationToggleTodosArgs, Array<WithTypename<Todo>>>,
  toggleTodosOptionalArray?: GraphCacheOptimisticMutationResolver<MutationToggleTodosOptionalArrayArgs, Maybe<Array<WithTypename<Todo>>>>,
  toggleTodosOptionalEntity?: GraphCacheOptimisticMutationResolver<MutationToggleTodosOptionalEntityArgs, Array<WithTypename<Todo>>>,
  toggleTodosOptional?: GraphCacheOptimisticMutationResolver<MutationToggleTodosOptionalArgs, Maybe<Array<WithTypename<Todo>>>>,
  updateMedia?: GraphCacheOptimisticMutationResolver<MutationUpdateMediaArgs, Maybe<WithTypename<Media>>>
};

export type GraphCacheUpdaters = {
  Mutation?: {
    toggleTodo?: GraphCacheUpdateResolver<{ toggleTodo: WithTypename<Todo> }, MutationToggleTodoArgs>,
    toggleTodos?: GraphCacheUpdateResolver<{ toggleTodos: Array<WithTypename<Todo>> }, MutationToggleTodosArgs>,
    toggleTodosOptionalArray?: GraphCacheUpdateResolver<{ toggleTodosOptionalArray: Maybe<Array<WithTypename<Todo>>> }, MutationToggleTodosOptionalArrayArgs>,
    toggleTodosOptionalEntity?: GraphCacheUpdateResolver<{ toggleTodosOptionalEntity: Array<WithTypename<Todo>> }, MutationToggleTodosOptionalEntityArgs>,
    toggleTodosOptional?: GraphCacheUpdateResolver<{ toggleTodosOptional: Maybe<Array<WithTypename<Todo>>> }, MutationToggleTodosOptionalArgs>,
    updateMedia?: GraphCacheUpdateResolver<{ updateMedia: Maybe<WithTypename<Media>> }, MutationUpdateMediaArgs>
  },
  Subscription?: {},
};

export type GraphCacheConfig = {
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers
};