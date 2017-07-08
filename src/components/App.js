import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import {Grid} from 'react-bootstrap';
import ScrollToTop from './ScrollToTop'
import FilmsContainer from '../containers/FilmsContainer';
import People from './People';
import Planets from './Planets';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
        <Navbar title={"Star Wars Encyclopedia"}/>
        <Grid>
          <Switch>
            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route path="/films" component={FilmsContainer} />
            <Route path="/people" component={People} />
            <Route path="/planets" component={Planets} />
            <Route path="/species" component={Species} />
            <Route path="/starships" component={Starships} />
            <Route path="/vehicles" component={Vehicles} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </Grid>

        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
