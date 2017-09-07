import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";

import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import Films from "./Films";
import People from "./People";

const NavLinks = () => (
  <Navbar fixedTop={true}>
    <Navbar.Header>
      <Navbar.Brand>
        <NavLink activeClassName="active" exact to="/">
          Star Wars Cycle Podium
        </NavLink>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer activeClassName="active" exact to="/films">
        <NavItem>Films</NavItem>
      </LinkContainer>
      <LinkContainer activeClassName="active" exact to="/people">
        <NavItem>People</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
);

const App = () => (
  <Router>
    <ScrollToTop>
      <NavLinks />
      <section className="container" id="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/people" component={People} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </section>
    </ScrollToTop>
  </Router>
);

export default App;
