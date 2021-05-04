import { withUrqlClient } from "next-urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { GraphCacheConfig } from '../../__generated__/graphql';

const cache = cacheExchange<GraphCacheConfig>({
  keys: {
    Author : (data) => data.name,
  },
  updates: {
    Mutation: {
      toggleTodo: (result, args, cache, info) => {
        console.log(result.author.name)
      }
    }
  },
  resolvers: {
    Query: {
      messages: (parent) => parent.messages.map(x => `Message:${x}`),
    },
    Movie: {
      duration: (parent) => parent.duration.toString(),
    }
  },
  optimistic: {
    toggleTodo: (args, cache, info) => {
      return {
        __typename: 'Todo',
        complete: !cache.resolve({ __typename: 'Todo', id: args.id }, 'complete'),
        id: args.id,
      }
    }
  }
})

const App = ({ Component, pageProps }) => <Component {...pageProps} />

export default withUrqlClient(
  () => ({
    url: "http://localhost:3000/api/graphql"
  }),
  { ssr: false }
)(App);
