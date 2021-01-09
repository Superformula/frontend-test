import { ApolloProvider } from '@apollo/client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';

import client from './apollo-client';
import { List, Detail } from './pages';

function App() {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Reset />
        <Router>
          <Switch>
            <Route path="/restaurant">
              <Detail />
            </Route>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
