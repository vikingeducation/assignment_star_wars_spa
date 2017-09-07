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
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import ResourceListContainer from "../containers/ResourceListContainer";
const qs = require("query-string");

const RESOURCES = ["films", "people", "planets"];
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
    <Nav>{RESOURCES.map(resource => <ResNavLink resource={resource} />)}</Nav>
  </Navbar>
);

const NotFound = () => <h1>Page not found</h1>;

const Resources = ({ location, match }) => {
  const page = qs.parse(location.search).page || 1;
  const resource = match.params.resource;

  if (!RESOURCES.includes(resource)) return <NotFound />;
  else
    return (
      <div>
        <h1>{capitalize(resource)}</h1>
        <ResourceListContainer resource={resource} page={page} />
      </div>
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
          <Route component={NotFound} />
        </Switch>
      </section>
    </ScrollToTop>
  </Router>
);

export default App;
