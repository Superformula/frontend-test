import { ApolloProvider } from '@apollo/client';
import ErrorBoundary from 'design-system/ErrorBoundary';
import ThemeProvider from 'design-system/theme';
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import client from './apollo-client';
import { List, Detail } from './pages';

function App() {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <ErrorBoundary>
            <Router>
              <Switch>
                <Route path="/restaurant/:id">
                  <Detail />
                </Route>
                <Route path="/">
                  <List />
                </Route>
              </Switch>
            </Router>
          </ErrorBoundary>
        </ThemeProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
}

export default App;
