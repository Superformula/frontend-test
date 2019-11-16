import React from 'react';
import './styles/core.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { Restaurants } from 'screens/Restaurants/Restaurants';
import { RestaurantDetails } from 'screens/RestaurantDetails/RestaurantDetails';
import { client } from './api/client';

export const App: React.FC = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Restaurants />
        </Route>
        <Route path="/restaurants/:restaurantId">
          <RestaurantDetails />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);
