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
  Author?: (data: Author) => null | string
  Book?: (data: Book) => null | string
  Movie?: (data: Movie) => null | string
  Textbook?: (data: Textbook) => null | string
  Todo?: (data: Todo) => null | string
}
  
export type GraphCacheResolvers = {
  Author?: {
    id?: GraphCacheResolver<Author, null, Maybe<Scalars['ID']>>
    name?: GraphCacheResolver<Author, null, Maybe<Scalars['String']>>
    friends?: GraphCacheResolver<Author, null, Maybe<Array<Maybe<Author>>>>
    friendsPaginated?: GraphCacheResolver<Author, AuthorFriendsPaginatedArgs, Maybe<Array<Maybe<Author>>>>
  }
  Book?: {
    id?: GraphCacheResolver<Book, null, Maybe<Scalars['ID']>>
    title?: GraphCacheResolver<Book, null, Maybe<Scalars['String']>>
    pages?: GraphCacheResolver<Book, null, Maybe<Scalars['Int']>>
  }
  Movie?: {
    id?: GraphCacheResolver<Movie, null, Maybe<Scalars['ID']>>
    title?: GraphCacheResolver<Movie, null, Maybe<Scalars['String']>>
    duration?: GraphCacheResolver<Movie, null, Maybe<Scalars['Int']>>
  }
  Query?: {
    todos?: GraphCacheResolver<Query, null, Maybe<Array<Maybe<Todo>>>>
    messages?: GraphCacheResolver<Query, null, Maybe<Array<Maybe<Scalars['String']>>>>
    messagesPaginated?: GraphCacheResolver<Query, QueryMessagesPaginatedArgs, Maybe<Array<Maybe<Scalars['String']>>>>
    media?: GraphCacheResolver<Query, null, Maybe<Media>>
    schoolBooks?: GraphCacheResolver<Query, null, Maybe<Array<Maybe<CoolBook>>>>
  }
  Textbook?: {
    id?: GraphCacheResolver<Textbook, null, Maybe<Scalars['ID']>>
    title?: GraphCacheResolver<Textbook, null, Maybe<Scalars['String']>>
    author?: GraphCacheResolver<Textbook, null, Maybe<Author>>
    todo?: GraphCacheResolver<Textbook, null, Maybe<Todo>>
  }
  Todo?: {
    id?: GraphCacheResolver<Todo, null, Maybe<Scalars['ID']>>
    text?: GraphCacheResolver<Todo, null, Maybe<Scalars['String']>>
    complete?: GraphCacheResolver<Todo, null, Maybe<Scalars['Boolean']>>
    author?: GraphCacheResolver<Todo, null, Maybe<Author>>
  }
}
export type GraphCacheOptimisticUpdaters = {
  toggleTodo?: GraphCacheOptimisticMutationResolver<MutationToggleTodoArgs, Todo>
  toggleTodos?: GraphCacheOptimisticMutationResolver<MutationToggleTodosArgs, Array<Todo>>
  toggleTodosOptionalArray?: GraphCacheOptimisticMutationResolver<MutationToggleTodosOptionalArrayArgs, Maybe<Array<Todo>>>
  toggleTodosOptionalEntity?: GraphCacheOptimisticMutationResolver<MutationToggleTodosOptionalEntityArgs, Array<Maybe<Todo>>>
  toggleTodosOptional?: GraphCacheOptimisticMutationResolver<MutationToggleTodosOptionalArgs, Maybe<Array<Maybe<Todo>>>>
  updateMedia?: GraphCacheOptimisticMutationResolver<MutationUpdateMediaArgs, Maybe<Media>>
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
export type GraphCacheConfig = {
  updates: GraphCacheUpdaters;
  keys: GraphCacheKeysConfig;
  optimistic: GraphCacheOptimisticUpdaters;
  resolvers: GraphCacheResolvers;
}