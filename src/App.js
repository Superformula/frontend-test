import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "views/Home";
import Detail from "views/Detail";
import "index.scss";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route path="/" component={Home} exact />
        <Route path="/detail/:id" component={Detail} />
      </React.Fragment>
    </Router>
  );
};

export default App;
