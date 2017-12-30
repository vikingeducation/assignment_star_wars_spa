import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import FilmsContainer from '../containers/FilmsContainer';

const App = () => {
  return (
    <Router>
      <div className="row">
        <Nav />
        <div className="MainContent col-10">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/films/:page_number?" component={FilmsContainer} />
            <Route exact path="/people" render={() => <h1 className="text-center">PEOPLE</h1>} />
            <Route exact path="/starships" render={() => <h1 className="text-center">STARSHIPS</h1>} />
            <Route exact path="/vehicles" render={() => <h1 className="text-center">VEHICLES</h1>} />
            <Route exact path="/species" render={() => <h1 className="text-center">SPECIES</h1>} />
            <Route exact path="/planets" render={() => <h1 className="text-center">PLANETS</h1>} />
            <Route render={() => <h1 className="text-center">404 - Page Not Found</h1>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
