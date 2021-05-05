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


export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

export type GraphCacheKeysConfig = {
  Author?: (data: RequireFields<Author, '__typename'>) => null | string
  Book?: (data: RequireFields<Book, '__typename'>) => null | string
  Movie?: (data: RequireFields<Movie, '__typename'>) => null | string
  Textbook?: (data: RequireFields<Textbook, '__typename'>) => null | string
  Todo?: (data: RequireFields<Todo, '__typename'>) => null | string
}
  
export type GraphCacheResolvers = {
  Author?: {
    id?: GraphCacheResolver<RequireFields<Author, '__typename'>, null, Scalars['ID']>
    name?: GraphCacheResolver<RequireFields<Author, '__typename'>, null, Scalars['String']>
    friends?: GraphCacheResolver<RequireFields<Author, '__typename'>, null, Array<RequireFields<Author, '__typename'> | string>>
    friendsPaginated?: GraphCacheResolver<RequireFields<Author, '__typename'>, AuthorFriendsPaginatedArgs, Array<RequireFields<Author, '__typename'> | string>>
  }
  Book?: {
    id?: GraphCacheResolver<RequireFields<Book, '__typename'>, null, Scalars['ID']>
    title?: GraphCacheResolver<RequireFields<Book, '__typename'>, null, Scalars['String']>
    pages?: GraphCacheResolver<RequireFields<Book, '__typename'>, null, Scalars['Int']>
  }
  Movie?: {
    id?: GraphCacheResolver<RequireFields<Movie, '__typename'>, null, Scalars['ID']>
    title?: GraphCacheResolver<RequireFields<Movie, '__typename'>, null, Scalars['String']>
    duration?: GraphCacheResolver<RequireFields<Movie, '__typename'>, null, Scalars['Int']>
  }
  Query?: {
    todos?: GraphCacheResolver<RequireFields<Query, '__typename'>, null, Array<RequireFields<Todo, '__typename'> | string>>
    messages?: GraphCacheResolver<RequireFields<Query, '__typename'>, null, Array<Scalars['String']>>
    messagesPaginated?: GraphCacheResolver<RequireFields<Query, '__typename'>, QueryMessagesPaginatedArgs, Array<Scalars['String']>>
    media?: GraphCacheResolver<RequireFields<Query, '__typename'>, null, RequireFields<Media, '__typename'> | string>
    schoolBooks?: GraphCacheResolver<RequireFields<Query, '__typename'>, null, Array<RequireFields<CoolBook, '__typename'> | string>>
  }
  Textbook?: {
    id?: GraphCacheResolver<RequireFields<Textbook, '__typename'>, null, Scalars['ID']>
    title?: GraphCacheResolver<RequireFields<Textbook, '__typename'>, null, Scalars['String']>
    author?: GraphCacheResolver<RequireFields<Textbook, '__typename'>, null, RequireFields<Author, '__typename'> | string>
    todo?: GraphCacheResolver<RequireFields<Textbook, '__typename'>, null, RequireFields<Todo, '__typename'> | string>
  }
  Todo?: {
    id?: GraphCacheResolver<RequireFields<Todo, '__typename'>, null, Scalars['ID']>
    text?: GraphCacheResolver<RequireFields<Todo, '__typename'>, null, Scalars['String']>
    complete?: GraphCacheResolver<RequireFields<Todo, '__typename'>, null, Scalars['Boolean']>
    author?: GraphCacheResolver<RequireFields<Todo, '__typename'>, null, RequireFields<Author, '__typename'> | string>
  }
}
export type GraphCacheOptimisticUpdaters = {
  toggleTodo?: GraphCacheOptimisticMutationResolver<MutationToggleTodoArgs, RequireFields<Todo, '__typename'>>
  toggleTodos?: GraphCacheOptimisticMutationResolver<MutationToggleTodosArgs, Array<RequireFields<Todo, '__typename'>>>
  toggleTodosOptionalArray?: GraphCacheOptimisticMutationResolver<MutationToggleTodosOptionalArrayArgs, Maybe<Array<RequireFields<Todo, '__typename'>>>>
  toggleTodosOptionalEntity?: GraphCacheOptimisticMutationResolver<MutationToggleTodosOptionalEntityArgs, Array<RequireFields<Todo, '__typename'>>>
  toggleTodosOptional?: GraphCacheOptimisticMutationResolver<MutationToggleTodosOptionalArgs, Maybe<Array<RequireFields<Todo, '__typename'>>>>
  updateMedia?: GraphCacheOptimisticMutationResolver<MutationUpdateMediaArgs, Maybe<RequireFields<Media, '__typename'>>>
}
export type GraphCacheUpdaters = {
  Mutation?: {
    toggleTodo?: GraphCacheUpdateResolver<{ toggleTodo: RequireFields<Todo, '__typename'> }, MutationToggleTodoArgs>
    toggleTodos?: GraphCacheUpdateResolver<{ toggleTodos: Array<RequireFields<Todo, '__typename'>> }, MutationToggleTodosArgs>
    toggleTodosOptionalArray?: GraphCacheUpdateResolver<{ toggleTodosOptionalArray: Maybe<Array<RequireFields<Todo, '__typename'>>> }, MutationToggleTodosOptionalArrayArgs>
    toggleTodosOptionalEntity?: GraphCacheUpdateResolver<{ toggleTodosOptionalEntity: Array<RequireFields<Todo, '__typename'>> }, MutationToggleTodosOptionalEntityArgs>
    toggleTodosOptional?: GraphCacheUpdateResolver<{ toggleTodosOptional: Maybe<Array<RequireFields<Todo, '__typename'>>> }, MutationToggleTodosOptionalArgs>
    updateMedia?: GraphCacheUpdateResolver<{ updateMedia: Maybe<RequireFields<Media, '__typename'>> }, MutationUpdateMediaArgs>
  }
  Subscription?: {}
}
export type GraphCacheConfig = {
  updates: GraphCacheUpdaters;
  keys: GraphCacheKeysConfig;
  optimistic: GraphCacheOptimisticUpdaters;
  resolvers: GraphCacheResolvers;
}