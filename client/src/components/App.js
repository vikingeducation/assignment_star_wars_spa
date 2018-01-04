import React from "react";
import "./../App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import PopulateContainer from "../containers/PopulateContainer";

const NavLinks = ({ onClick }) => (
  <div className="NavLinks">
    <NavLink activeClassName="active" exact to="/films">
      <p onClick={onClick} name="films">
        Films
      </p>
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/people">
      <p onClick={onClick} name="people">
        People
      </p>
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/planets">
      <p onClick={onClick} name="planets">
        Planets
      </p>
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/species">
      <p onClick={onClick} name="species">
        Species
      </p>
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/starships">
      <p onClick={onClick} name="starships">
        Starships
      </p>
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/vehicles">
      <p onClick={onClick} name="vehicles">
        Vehicles
      </p>
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
      </Switch>
    </div>
  </Router>
);

export { App };
