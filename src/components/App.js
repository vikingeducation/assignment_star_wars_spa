import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import FilmsContainer from '../containers/FilmsContainer';
import FilmContainer from '../containers/FilmContainer';
import PeopleContainer from '../containers/PeopleContainer';
import PersonContainer from '../containers/PersonContainer';
import PlanetsContainer from '../containers/PlanetsContainer';
import PlanetContainer from '../containers/PlanetContainer';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
        <Navigation title={"Star Wars Encyclopedia"}/>

        <Switch>
          <Route exact path="/" render={() => <h1>Welcome to the Star Wars Encyclopedia!</h1>} />
          <Route path="/films/:id" component={FilmContainer} />
          <Route path="/films" component={FilmsContainer} />
          <Route path="/people/:id" component={PersonContainer} />
          <Route path="/people" component={PeopleContainer} />
          <Route path="/planets/:id" component={PlanetContainer} />
          <Route path="/planets" component={PlanetsContainer} />
          <Route path="/species" component={Species} />
          <Route path="/starships" component={Starships} />
          <Route path="/vehicles" component={Vehicles} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>

        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
