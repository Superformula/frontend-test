import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Restaurant, NotFound } from 'containers';

export const ROUTES = {
  HOME: '/',
  RESTAURANT: '/restaurant',
};

export default function Routes() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route path={`${ROUTES.RESTAURANT}/:id`} component={Restaurant} />
      <Route component={NotFound} />
    </Switch>
  );
}
