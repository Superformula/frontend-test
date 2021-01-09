import { ApolloProvider } from '@apollo/client';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';

import Welcome from './Welcome';
import client from './apollo-client';

function App() {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Reset />
        <Welcome />
      </ApolloProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
