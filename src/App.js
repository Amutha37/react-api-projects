import React, { Fragment } from "react";

import Catimgdata from "./components/Catapi/Catimgdata";
import { Dogimgdata } from "./components/Dogapi/Dogimgdata";

import Dataselectapp from "./components/Datatable/Dataselectapp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Menu from "./components/navigation/Menu";
import "./globalstyles.css";

function App() {
  return (
    <Fragment>
      <Router>
        <div className="navrender pages">
          <Menu />
          <Switch>
            <Route exact path="/" component={Dataselectapp} />
            <Route exact path="/catapi" component={Catimgdata} />
            {/* component={null} /> */}
            <Route exact path="/dogapi" component={Dogimgdata} />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
