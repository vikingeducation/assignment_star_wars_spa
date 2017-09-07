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
import queryString from "query-string";

import Findable from "./elements/Findable";
import NotFound from "./elements/NotFound";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import ResourceContainer from "../containers/ResourceContainer";
import ResourceListContainer from "../containers/ResourceListContainer";
import { resourceNames } from "../resources";

const capitalize = word => word[0].toUpperCase() + word.slice(1);

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
      {resourceNames.map(resource => <ResNavLink resource={resource} />)}
    </Nav>
  </Navbar>
);

const Resources = ({ location, match }) => {
  const page = queryString.parse(location.search).page || 1;
  const resource = match.params.resource;

  return (
    <Findable condition={resourceNames.includes(resource)}>
      <h1>{capitalize(resource)}</h1>
      <ResourceListContainer resource={resource} page={page} />
    </Findable>
  );
};

const Resource = ({ match }) => {
  const resource = match.params.resource;
  return (
    <Findable condition={resourceNames.includes(resource)}>
      <h1>{capitalize(resource)}</h1>
      <ResourceContainer resource={resource} id={match.params.id} />
    </Findable>
  );
};

const App = () => (
  <Router>
    <ScrollToTop>
      <NavLinks />
      <section className="container" id="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:resource" component={withRouter(Resources)} />
          <Route exact path="/:resource/:id" component={withRouter(Resource)} />
          <Route component={NotFound} />
        </Switch>
      </section>
    </ScrollToTop>
  </Router>
);

export default App;
