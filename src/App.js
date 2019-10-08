import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Restaurants from "./pages/Restaurants/Restaurants";
import Details from "./pages/Details/Details";

import "./scss/App.scss";

const history = createBrowserHistory()

const App = () => (
  <Router history={history}>
    <Switch>
      <Route  path="/" exact component={Restaurants}/>
      <Route  path="/:id" component={Details}/>
    </Switch>
  </Router>
)

export default App;