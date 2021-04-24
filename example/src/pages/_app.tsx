import { withUrqlClient } from "next-urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { GraphCacheKeysConfig, GraphCacheOptimisticUpdaters, GraphCacheUpdaters, GraphCacheResolvers } from '../../__generated__/graphql';

const cache = cacheExchange<
  GraphCacheUpdaters,
  GraphCacheResolvers,
  GraphCacheOptimisticUpdaters,
  GraphCacheKeysConfig
>({})

const App = ({ Component, pageProps }) => <Component {...pageProps} />

export default withUrqlClient(
  () => ({
    url: "http://localhost:3000/api/graphql"
  }),
  { ssr: false }
)(App);
