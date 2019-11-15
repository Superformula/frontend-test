import React from 'react';
import './styles/core.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { RestaurantDetails } from 'screens/RestaurantDetails/RestaurantDetails';
import { RestaurantsContainer } from 'screens/Restaurants/RestaurantsContainer';
import { client } from './api/client';
import { Layout } from 'shared/components/Layout/Layout';

export const App: React.FC = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <RestaurantsContainer />
          </Route>
          <Route path="/restaurants/:restaurantId">
            <RestaurantDetails />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  </ApolloProvider>
);
