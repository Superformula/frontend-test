import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ConnectedSearchPage } from "./pages/search";
import { ConnectedDetailsPage } from "./pages/details";

import "./styles/base.scss";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/details/:id">
          <ConnectedDetailsPage />
        </Route>
        <Route path="/">
          <ConnectedSearchPage />
        </Route>
      </Switch>
    </Router>
  );
};
