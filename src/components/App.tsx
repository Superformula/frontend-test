import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Detail from "./Detail/Detail";

import styles from "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div {...styles}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
