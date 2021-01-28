import { useMemo } from "react";
import {
  ApolloClient,
  NormalizedCacheObject,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const ssrUri = process.env.YELP_GRAPHQL_URI;
const clientUri = "/api/graphql";
const isSsr = typeof window === "undefined";

let apolloClient: ApolloClient<NormalizedCacheObject>;

// TODO we should avoid creating one new client per page
// in the client because it wipes the cache from full page
// navigation to the other
export function getClient(): ApolloClient<NormalizedCacheObject> {
  if (!apolloClient) {
    apolloClient = new ApolloClient({
      ssrMode: isSsr,
      link: new HttpLink({
        uri: isSsr ? ssrUri : clientUri,
      }),
      cache: new InMemoryCache(),
    });
  }

  return apolloClient;
}
