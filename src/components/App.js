import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import PlanetsHome from "../containers/PlanetsHome";

const NavLinks = () => {
  return (
    <ScrollToTop>
      <NavLink activeClassName="active" exact to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" exact to="/planets">
        Planets
      </NavLink>
      <NavLink activeClassName="active" exact to="/people">
        People
      </NavLink>
    </ScrollToTop>
  );
};

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Router>
        <ScrollToTop>
          <NavLinks />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <h1>Star Wars Planets Page</h1>}
            />
            <Route exact path="/planets" component={PlanetsHome} />
            <Route
              exact
              path="/people"
              render={() => <h1>Star Wars People Page</h1>}
            />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
