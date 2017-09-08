import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  withRouter
} from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import capitalize from "../lib/capitalize";
import Findable from "./elements/Findable";
import NotFound from "./elements/NotFound";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import ResourceContainer from "../containers/ResourceContainer";
import ResourceListContainer from "../containers/ResourceListContainer";
import { resourceNames } from "../resources";

const ResNavLink = ({ resource }) => (
  <LinkContainer activeClassName="active" exact to={`/${resource}`}>
    <NavItem>{capitalize(resource)}</NavItem>
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
      {resourceNames.map(resource => (
        <ResNavLink key={resource} resource={resource} />
      ))}
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
          <Route exact path="/:resource" component={ResourceListContainer} />
          <Route exact path="/:resource/:id" component={ResourceContainer} />
          <Route component={NotFound} />
        </Switch>
      </section>
    </ScrollToTop>
  </Router>
);

export default App;
