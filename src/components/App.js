import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import FilmsContainer from "../containers/FilmsContainer";

const NavLinks = () => (
  <div className="NavLinks">
    <NavLink activeClassName="active" exact to="/">
      Home
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/films">
      Films
    </NavLink>{" "}
    <NavLink activeClassName="active" to="/people">
      People
    </NavLink>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavLinks />
          <Switch>
            <Route exact path="/" render={() => <h1>Home</h1>} />
            <Route path="/films" component={FilmsContainer} />
            <Route path="/people" render={() => <h1>People</h1>} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
          <NavLinks />
        </div>
      </Router>
    );
  }
}

export default App;
