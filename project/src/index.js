import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { AppContextProvider } from "AppContext";
import RestaurantsList from "views/Restaurants/List";
import RestaurantDetail from "views/Restaurants/Detail";
require("./main.scss");

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),

  // for dev only - disable cache
  // defaultOptions: {
  //   query: {
  //     fetchPolicy: "no-cache"
  //   }
  // }
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppContextProvider>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/restaurants" />;
              }}
            />
            <Route exact path="/restaurants" component={RestaurantsList} />
            <Route path="/restaurants/:alias" component={RestaurantDetail} />            
          </Switch>
        </AppContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
