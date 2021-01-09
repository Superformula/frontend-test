import { ApolloProvider } from '@apollo/client';
import ThemeProvider from 'design-system/theme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import client from './apollo-client';
import { List, Detail } from './pages';

function App() {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <ThemeProvider>
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
        </ThemeProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
