import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListPeopleContainer from "../containers/ListPeopleContainer";
import ListPlanetsContainer from "../containers/ListPlanetsContainer";
import Nav from "./Nav";
import ShowPersonContainer from "../containers/ShowPersonContainer";
import ShowPlanetContainer from "../containers/ShowPlanetContainer";

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Nav} />
      <Route exact path="/people" component={ListPeopleContainer} />
      <Route exact path="/people/:id" component={ShowPersonContainer} />
      <Route exact path="/planets" component={ListPlanetsContainer} />
      <Route exact path="/planets/:id" component={ShowPlanetContainer} />
    </div>
  </Router>
);

export default App;
