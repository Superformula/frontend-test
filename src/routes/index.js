import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.RESTAURANTS} component={() => 'restaurants'} />
      <Route exact path={ROUTES.RESTAURANT} component={() => 'restaurant'} />
      <Redirect from="*" to={ROUTES.RESTAURANTS} />
    </Switch>
  </BrowserRouter>
);
