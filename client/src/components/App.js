import React from "react";
import "./../App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

const NavLinks = () => (
  <div className="NavLinks">
    <NavLink activeClassName="active" exact to="/films">
      Films
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/people">
      People
    </NavLink>{" "}
  </div>
);

const Populate = ({ entities }) => {
  const gallery = entities.map((entity, index) => {
    return <p key={index}>{entity.title} </p>;
  });
  return <div>{gallery}</div>;
};

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Star Wars Information</h1>
      </header>
      <NavLinks />
      <Switch>
        <Route path="/" component={Populate} />
        <Route path="/people" render={() => <h1>Home</h1>} />
      </Switch>
    </div>
  </Router>
);

export { App, Populate };
