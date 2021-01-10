import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';
import fetch from 'cross-fetch';

// This merge function is taken from:
// https://github.com/apollographql/apollo-client/blob/0975cc8bdab266d5acffd253942ceb2c67b943c4/src/utilities/policies/pagination.ts#L28
function merge<T>(existing: Array<T>, incoming: Array<T>, args: any) {
  const merged = existing ? existing.slice(0) : [];
  if (args) {
    const { offset = 0 } = args;
    for (let i = 0; i < incoming.length; ++i) {
      merged[offset + i] = incoming[i];
    }
  } else {
    merged.push.apply(merged, incoming); // eslint-disable-line
  }
  return merged;
}

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          search: {
            keyArgs: ['open_now', 'price', 'categories'],
            // Since the result of the search is not an array but an object
            // we cannot use the helpers provided by the apollo client and we are forced
            // to create our own merge function.
            merge(existing, incoming, { args }) {
              const previousValues = existing || {};

              return {
                ...previousValues,
                ...incoming,
                business: merge(
                  previousValues.business,
                  incoming.business,
                  args
                ),
              };
            },
          },
          reviews: offsetLimitPagination(false),
        },
      },
    },
  }),
  link: new HttpLink({ uri: '/api/graphql', fetch }),
});

export default client;
