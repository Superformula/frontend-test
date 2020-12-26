import React, { lazy } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { ROUTES } from 'consts/routes';
const Restaurants = lazy(() => import('./pages/Restaurants'));
const Restaurant = lazy(() => import('./pages/Restaurant'));

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.RESTAURANTS} component={Restaurants} />
      <Route exact path={ROUTES.RESTAURANT} component={Restaurant} />
      <Redirect from="*" to={ROUTES.RESTAURANTS} />
    </Switch>
  </BrowserRouter>
);
