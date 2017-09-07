import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListPeopleContainer from "../containers/ListPeopleContainer";
import ListPlanetsContainer from "../containers/ListPlanetsContainer";

const App = () => (
  <Router>
    <div>
      <Route exact path="/people" component={ListPeopleContainer} />
      <Route exact path="/planets" component={ListPlanetsContainer} />
    </div>
  </Router>
);

export default App;
