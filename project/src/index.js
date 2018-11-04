import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

import { AppContextProvider } from "AppContext";
import RestaurantsList from "views/RestaurantsList";
require("./main.css");

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Route path="/" exact component={RestaurantsList} />
      </BrowserRouter>
    </AppContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
