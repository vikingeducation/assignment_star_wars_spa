import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import {
  NavbarNav,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";

export const BootNav = ({ onClick }) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          <NavLink activeClassName="active" exact to="/starships">
            Starships
          </NavLink>
        </NavItem>
        <NavItem eventKey={2} href="#">
          <NavLink activeClassName="active" exact to="/species">
            Species
          </NavLink>
        </NavItem>
        <NavDropdown eventKey={3} title="Language" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>
            <a id="UniversalCommon" onClick={onClick}>
              Universal Common
            </a>
          </MenuItem>
          <MenuItem eventKey={3.2}>
            <a id="WookieAccessible" onClick={onClick}>
              Wookie Accessible
            </a>
          </MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};
