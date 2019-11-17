import React from 'react';
import './styles/core.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './api/client';
import { Layout } from 'shared/components/Layout/Layout';
import { RestaurantDetailsContainer } from 'screens/RestaurantDetails/RestaurantDetailsContainer';
import { RestaurantsContainer } from 'screens/Restaurants/RestaurantsContainer';

export const App: React.FC = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <RestaurantsContainer />
          </Route>
          <Route path="/restaurants/:restaurantId">
            <RestaurantDetailsContainer />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  </ApolloProvider>
);
