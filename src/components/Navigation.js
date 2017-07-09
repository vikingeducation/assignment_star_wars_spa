import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const NavLinks = () => {
  return (
    <Nav pullRight>
      <LinkContainer activeClassName="active" exact to="/">
        <NavItem eventKey={1}>Home</NavItem>
      </LinkContainer>{' '}
      <LinkContainer activeClassName="active" exact to="/films">
        <NavItem eventKey={2}>Films</NavItem>
      </LinkContainer>{' '}
      <LinkContainer activeClassName="active" to="/people">
        <NavItem eventKey={3}>People</NavItem>
      </LinkContainer>
      <LinkContainer activeClassName="active" to="/species">
        <NavItem eventKey={3}>Species</NavItem>
      </LinkContainer>
      <LinkContainer activeClassName="active" to="/starships">
        <NavItem eventKey={3}>Starships</NavItem>
      </LinkContainer>
      <LinkContainer activeClassName="active" to="/vehicles">
        <NavItem eventKey={3}>Vehicles</NavItem>
      </LinkContainer>
    </Nav>
  )
}

const Navigation = ({title}) => { 
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a>{title}</a>
        </Navbar.Brand>
      </Navbar.Header>
      <NavLinks />
    </Navbar>
  )
};

export default Navigation