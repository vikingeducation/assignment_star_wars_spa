import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListResourceContainer from "../containers/ListResourceContainer";
import Nav from "./Nav";
import ShowPersonContainer from "../containers/ShowPersonContainer";
import ShowPlanetContainer from "../containers/ShowPlanetContainer";

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Nav} />
      <Route exact path="/people" component={ListResourceContainer} />
      <Route exact path="/planets" component={ListResourceContainer} />
      <Route exact path="/people/:id" component={ShowPersonContainer} />
      <Route exact path="/planets/:id" component={ShowPlanetContainer} />
    </div>
  </Router>
);

export default App;
