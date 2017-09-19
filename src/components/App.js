import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
// import Resources from "../containers/";
import PlanetView from "../components/PlanetView";
import PeopleHome from "../components/PeopleHome";
import PersonView from "../components/PersonView";
import PlanetsHome from "../components/PlanetsHome";

const NavLinks = props => {
  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/planets">
              Planets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/people">
              People
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="card-body text-left">
        {props.children}
      </div>
    </div>
  );
};

const HomePageStatic = () => {
  return (
    <div className="text-center" style={{ width: "100%", height: "100%" }}>
      <img src="/images/funny.jpg" />;
    </div>
  );
};

class App extends Component {
  componentDidMount() {
    console.log("actions: ", this.props);
    this.props.getResources("planets");
  }
  render() {
    console.log(this.props);
    return (
      <Router>
        <ScrollToTop>
          <main className="container">
            <NavLinks>
              <Switch>
                <Route exact path="/" component={HomePageStatic} />
                <Route exact path="/planets" component={PlanetsHome} />
                <Route exact path="/planets/:id" component={PlanetView} />
                <Route exact path="/people" component={PeopleHome} />
                <Route exact path="/people/:id" component={PersonView} />
              </Switch>
            </NavLinks>
          </main>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
