import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import RestaurantsList from "./views/RestaurantsList"
require("./main.css");

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={RestaurantsList} />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
