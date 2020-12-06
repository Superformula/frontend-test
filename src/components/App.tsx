import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Detail from "./Home/Detail/Detail";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Detail} />
      </Switch>
    </Router>
  );
};

export default App;
