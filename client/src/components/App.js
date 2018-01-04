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

const App = ({ entities }) => (
  <Router>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Star Wars Information</h1>
      </header>
      <NavLinks />
      <Route
        path="/"
        render={() => {
          return entities.map((entity, index) => {
            return <p key={index}>{entity.title} </p>;
          });
        }}
      />
      <Route path="/" render={() => <h1>Home</h1>} />
    </div>
  </Router>
);

export default App;

{
  /* <Switch>
  <Route exact path="/" render={() => <h1>Home</h1>} />
  <Route path="/photos/:id" component={PhotoContainer} />
  <Route path="/photos" component={PhotosContainer} />
  <Route path="/about" component={About} />
  <Route render={() => <h1>Page not found</h1>} />
</Switch>; */
}
