import { Cache, ResolveInfo, Data, Variables, NullArray, DataField, DataFields } from '@urql/exchange-graphcache';
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
    id?: GraphCacheResolver<Author, Maybe<Scalars['ID']>, null>
    name?: GraphCacheResolver<Author, Maybe<Scalars['String']>, null>
    friends?: GraphCacheResolver<Author, Maybe<Array<Maybe<Author>>>, null>
    friendsPaginated?: GraphCacheResolver<Author, Maybe<Array<Maybe<Author>>>, AuthorFriendsPaginatedArgs>
  }
  Book?: {
    id?: GraphCacheResolver<Book, Maybe<Scalars['ID']>, null>
    title?: GraphCacheResolver<Book, Maybe<Scalars['String']>, null>
    pages?: GraphCacheResolver<Book, Maybe<Scalars['Int']>, null>
  }
  Movie?: {
    id?: GraphCacheResolver<Movie, Maybe<Scalars['ID']>, null>
    title?: GraphCacheResolver<Movie, Maybe<Scalars['String']>, null>
    duration?: GraphCacheResolver<Movie, Maybe<Scalars['Int']>, null>
  }
  Query?: {
    todos?: GraphCacheResolver<Query, Maybe<Array<Maybe<Todo>>>, null>
    messages?: GraphCacheResolver<Query, Maybe<Array<Maybe<Scalars['String']>>>, null>
    messagesPaginated?: GraphCacheResolver<Query, Maybe<Array<Maybe<Scalars['String']>>>, QueryMessagesPaginatedArgs>
    media?: GraphCacheResolver<Query, Maybe<Media>, null>
    schoolBooks?: GraphCacheResolver<Query, Maybe<Array<Maybe<CoolBook>>>, null>
  }
  Textbook?: {
    id?: GraphCacheResolver<Textbook, Maybe<Scalars['ID']>, null>
    title?: GraphCacheResolver<Textbook, Maybe<Scalars['String']>, null>
    author?: GraphCacheResolver<Textbook, Maybe<Author>, null>
    todo?: GraphCacheResolver<Textbook, Maybe<Todo>, null>
  }
  Todo?: {
    id?: GraphCacheResolver<Todo, Maybe<Scalars['ID']>, null>
    text?: GraphCacheResolver<Todo, Maybe<Scalars['String']>, null>
    complete?: GraphCacheResolver<Todo, Maybe<Scalars['Boolean']>, null>
    author?: GraphCacheResolver<Todo, Maybe<Author>, null>
  }
}
export type GraphCacheOptimisticUpdaters = {
  toggleTodo?: GraphCacheOptimisticMutationResolver<Todo, MutationToggleTodoArgs>
  toggleTodos?: GraphCacheOptimisticMutationResolver<Array<Todo>, MutationToggleTodosArgs>
  toggleTodosOptionalArray?: GraphCacheOptimisticMutationResolver<Maybe<Array<Todo>>, MutationToggleTodosOptionalArrayArgs>
  toggleTodosOptionalEntity?: GraphCacheOptimisticMutationResolver<Array<Maybe<Todo>>, MutationToggleTodosOptionalEntityArgs>
  toggleTodosOptional?: GraphCacheOptimisticMutationResolver<Maybe<Array<Maybe<Todo>>>, MutationToggleTodosOptionalArgs>
  updateMedia?: GraphCacheOptimisticMutationResolver<Maybe<Media>, MutationUpdateMediaArgs>
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