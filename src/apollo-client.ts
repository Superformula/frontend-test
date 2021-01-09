import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: '/api/graphql', fetch }),
});

export default client;
