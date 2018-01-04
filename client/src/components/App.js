import React from "react";
import "./../App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import PopulateContainer from "../containers/PopulateContainer";

const NavLinks = () => (
  <div className="NavLinks">
    <NavLink activeClassName="active" exact to="/films">
      Films
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/people">
      People
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/planets">
      Planets
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/species">
      Species
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/starships">
      Starships
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/vehicles">
      Vehicles
    </NavLink>{" "}
  </div>
);

const App = () => (
  <Router>
    <div>
      <header className="App-header">
        <h1 className="App-title">Welcome to Star Wars Information</h1>
      </header>
      <NavLinks />

      <Switch>
        <Route exact path="/" component={PopulateContainer} />
        <Route path="/films" component={PopulateContainer} />
        <Route path="/people" component={PopulateContainer} />
        <Route path="/planets" component={PopulateContainer} />
        <Route path="/species" component={PopulateContainer} />
        <Route path="/starships" component={PopulateContainer} />
        <Route path="/vehicles" component={PopulateContainer} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>
);

export { App };
