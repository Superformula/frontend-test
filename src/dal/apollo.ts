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
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              search: {
                // Specify all the keys of "search" query that
                // make up a unique query, we are doing all this
                // to avoid generating a new cache object when offset and limit change
                keyArgs: ["location", "categories", "open_now", "price"],
                // Concatenate the incoming list items with
                // the existing list items.
                // TODO this is super naive, do better
                merge(existing = {}, incoming = {}) {
                  const oldBusiness = existing?.business || [];
                  const newBusiness = incoming?.business || [];
                  return {
                    ...incoming,
                    business: [...oldBusiness, ...newBusiness],
                  };
                },
              },
            },
          },
        },
      }),
    });
  }

  return apolloClient;
}
