import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    'Accept-Language': 'en_US',
  },
});
