import ApolloClient from 'apollo-boost';

const getHeaders = () => {
  const headers: { 'Accept-Language': string; Authorization?: string } = {
    'Accept-Language': 'en_US',
  };

  if (process.env.NODE_ENV === 'development') {
    headers.Authorization = `Bearer ${process.env.YELP_API_TOKEN}`;
  }

  return headers;
};

export const client = new ApolloClient({
  uri: '/api',
  request: operation => {
    operation.setContext({
      headers: getHeaders(),
    });
  },
});
