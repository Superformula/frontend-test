import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Routes } from './routes';
import { GlobalStyles } from './config/GlobalStyles';
import { Lazy } from './components/Lazy';
import { client } from './graphql';
import { StoreProvider } from './store';

export const App = () => (
  <StoreProvider>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Lazy component={Routes} />
    </ApolloProvider>
  </StoreProvider>
);
