// import axios from "axios";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

// import requests from "./request";
import Dataselectapp from "./components/Datatable/Dataselectapp";

import Hoverdataapp from "./components/HoverImage/Hoverdataapp";
import Imgdataapp from "./components/Imagetable/Imgdataapp";
const App = () => {
  return (
    <Fragment>
      <Router>
        <div className="navrender pages">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dataselectapp} />

            <Route exact path="/imgdata" component={Imgdataapp} />

            <Route exact path="/hoverimg" component={Hoverdataapp} />
          </Switch>
        </div>
      </Router>
      {/* <Hoverdataapp />
      <Dataselectapp />
      <Imgdataapp /> */}
    </Fragment>
  );
};

export default App;
