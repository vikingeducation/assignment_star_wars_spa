import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import capitalize from "../lib/capitalize";
import NotFound from "./elements/NotFound";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import ResourceContainer from "../containers/ResourceContainer";
import ResourceListContainer from "../containers/ResourceListContainer";
import { resourceNames } from "../resources";

const ResNavLink = ({ type }) => (
  <LinkContainer activeClassName="active" exact to={`/${type}`}>
    <NavItem>{capitalize(type)}</NavItem>
  </LinkContainer>
);

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
      {resourceNames.map(type => <ResNavLink key={type} type={type} />)}
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
          <Route exact path="/:type" component={ResourceListContainer} />
          <Route exact path="/:type/:id" component={ResourceContainer} />
          <Route component={NotFound} />
        </Switch>
      </section>
    </ScrollToTop>
  </Router>
);

export default App;
