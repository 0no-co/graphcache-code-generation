import { ApolloServer, gql } from 'apollo-server-micro'

const store = {
  messages: ['hi', 'how are you?'],
  todos: [
    {
      id: 0,
      text: "Go to the shop",
      complete: false
    },
    {
      id: 1,
      text: "Go to school",
      complete: true
    },
    {
      id: 2,
      text: "Use urql",
      complete: false
    }
  ]
};

const typeDefs = gql`
  type Query {
    todos: [Todo]
    messages: [String]
  }

  type Mutation {
    toggleTodo(id: ID!): Todo!
    toggleTodos(id: [ID!]!): [Todo!]!
    toggleTodosOptionalArray(id: [ID!]!): [Todo!]
    toggleTodosOptionalEntity(id: [ID!]!): [Todo]!
    toggleTodosOptional(id: [ID!]!): [Todo]
  }

  type Author {
    id: ID
    name: String
    friends: [Author]
  }

  type Todo {
    id: ID
    text: String
    complete: Boolean
    author: Author
  }
`;

const resolvers = {
  Query: {
    todos: () => store.todos,
    messages: () => store.messages,
  },
  Mutation: {
    toggleTodo: (_root, { id }) => {
      store.todos[id].complete = !store.todos[id].complete;
      return store.todos[id];
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
}

export default server.createHandler({ path: '/api/graphql' })
