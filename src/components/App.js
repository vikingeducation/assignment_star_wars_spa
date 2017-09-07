import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListResourceContainer from "../containers/ListResourceContainer";
import Nav from "./Nav";
import ShowResourceContainer from "../containers/ShowResourceContainer";

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Nav} />
      <Route exact path="/people" component={ListResourceContainer} />
      <Route exact path="/people/:id" component={ShowResourceContainer} />
      <Route exact path="/planets" component={ListResourceContainer} />
      <Route exact path="/planets/:id" component={ShowPlanetContainer} />
      <Route exact path="/films" component={ListResourceContainer} />
      <Route exact path="/films/:id" component={ShowFilmContainer} />
      <Route exact path="/starships" component={ListResourceContainer} />
      <Route exact path="/starships/:id" component={ShowStarshipContainer} />
      <Route exact path="/vehicles" component={ListResourceContainer} />
      <Route exact path="/vehicles/:id" component={ShowVehicleContainer} />
    </div>
  </Router>
);

export default App;
