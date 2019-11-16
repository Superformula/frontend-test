import React from 'react';
import './styles/core.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Restaurants } from 'screens/Restaurants/Restaurants';
import { RestaurantDetails } from 'screens/RestaurantDetails/RestaurantDetails';

export const App: React.FC = () => (
  <div>
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
  </div>
);
