import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import FilmsContainer from "../containers/FilmsContainer";
import FilmContainer from "../containers/FilmContainer";
import PeopleContainer from "../containers/PeopleContainer";
import PersonContainer from "../containers/PersonContainer";
import PlanetsContainer from "../containers/PlanetsContainer";
import PlanetContainer from "../containers/PlanetContainer";
import SpeciesContainer from "../containers/SpeciesContainer";
import SpecificSpeciesContainer from "../containers/SpecificSpeciesContainer";
import StarshipsContainer from "../containers/StarshipsContainer";
import StarshipContainer from "../containers/StarshipContainer";
import VehiclesContainer from "../containers/VehiclesContainer";
import VehicleContainer from "../containers/VehicleContainer";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Navigation title={"Star Wars Encyclopedia"} />

          <Switch>
            <Route
              exact
              path="/"
              render={() => <h1>Welcome to the Star Wars Encyclopedia!</h1>}
            />
            <Route path="/films/:id" component={FilmContainer} />
            <Route path="/films" component={FilmsContainer} />
            <Route path="/people/:id" component={PersonContainer} />
            <Route path="/people" component={PeopleContainer} />
            <Route path="/planets/:id" component={PlanetContainer} />
            <Route path="/planets" component={PlanetsContainer} />
            <Route path="/species/:id" component={SpecificSpeciesContainer} />
            <Route path="/species" component={SpeciesContainer} />
            <Route path="/starships/:id" component={StarshipContainer} />
            <Route path="/starships" component={StarshipsContainer} />
            <Route path="/vehicles/:id" component={VehicleContainer} />
            <Route path="/vehicles" component={VehiclesContainer} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>

        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
