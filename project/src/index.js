import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { AppContextProvider } from "AppContext";
import RestaurantsList from "views/RestaurantsList";
require("./main.scss");

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),

  // for dev only - disable cache
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache"
    }
  }
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppContextProvider>
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return <Redirect to="/restaurants" />;
              }}
            />
            <Route path="/restaurants" component={RestaurantsList} />
          </Switch>
        </AppContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
