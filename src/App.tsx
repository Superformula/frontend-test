import React from 'react';
import './styles/core.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { RestaurantDetails } from 'screens/RestaurantDetails/RestaurantDetails';
import { RestaurantsContainer } from 'screens/Restaurants/RestaurantsContainer';
import { client } from './api/client';

export const App: React.FC = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <RestaurantsContainer />
        </Route>
        <Route path="/restaurants/:restaurantId">
          <RestaurantDetails />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);
