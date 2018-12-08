import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import FilmsContainer from '../containers/FilmsContainer';
import PeopleContainer from '../containers/PeopleContainer';
import StarshipsContainer from '../containers/StarshipsContainer';
import VehiclesContainer from '../containers/VehiclesContainer';
import SpeciesContainer from '../containers/SpeciesContainer';
import PlanetsContainer from '../containers/PlanetsContainer';

const App = () => {
  return (
    <Router>
      <div className="row">
        <Nav />
        <div className="MainContent col-10">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/films/" component={FilmsContainer} />

            <Redirect exact from='/people/' to='/people/1'/>
            <Route path="/people/:page_number?" component={PeopleContainer} />

            <Redirect exact from='/starships/' to='/starships/1'/>
            <Route path="/starships/:page_number?" component={StarshipsContainer} />

            <Redirect exact from='/vehicles/' to='/vehicles/1'/>
            <Route path="/vehicles/:page_number?" component={VehiclesContainer} />

            <Redirect exact from='/species/' to='/species/1'/>
            <Route path="/species/:page_number?" component={SpeciesContainer} />

            <Redirect exact from='/planets/' to='/planets/1'/>
            <Route path="/planets/:page_number?" component={PlanetsContainer} />

            <Route render={() => <h1 className="text-center">404 - Page Not Found</h1>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
