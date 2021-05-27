// import axios from "axios";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

// import requests from "./request";
// import Hoverdogdataapp from "/Users/amuthamuhunthan/APIPROJECTS/react-api-projects/src/components/Dogapi/hover/Hoverdogdataapp.js";

import Hoverdogdataapp from "./components/Dogapi/hover/Hoverdogdataapp";
import Alldogimgapp from "./components/Dogapi/alldogimg/Alldogimgapp";
// import Dataselectapp from "./components/Datatable/Dataselectapp";
import Dataselectapp from "./components/Datatable/Dataselectapp";

import Hoverdataapp from "./components/HoverImage/Hoverdogdataapp";
import Imgdataapp from "./components/Imagetable/Imgdataapp";
const App = () => {
  return (
    <Fragment>
      <Router>
        <div className="navrender pages">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dataselectapp} />

            <Route path="/imgdata" component={Imgdataapp} />

            <Route path="/hoverimg" component={Hoverdataapp} />
            <Route path="/dognamehover" component={Hoverdogdataapp} />
            <Route path="/alldogimg" component={Alldogimgapp} />
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
