import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Detail from "./Detail/Detail";

import styles from "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./shared/ErrorFallBack/ErrorFallBack";

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <div {...styles}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={Detail} />
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
