import React from "react";
import { render } from "react-dom";
import App from "./components/App/App";

import "./scss/main.scss";

import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:8080/https://api.yelp.com/v3/graphql',
  headers: {
    authorization: `Bearer ${process.env.YELP_KEY}`,
    "Accept-Language": 'en-US'
  }
});


const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(<Root />, document.getElementById('root'));
