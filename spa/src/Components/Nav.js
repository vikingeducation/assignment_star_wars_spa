import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import { Navbar } from "react-bootstrap";

export const Nav = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>{" "}
          <NavLink activeClassName="active" exact to="/starships">
            Starships
          </NavLink>{" "}
          <NavLink activeClassName="active" exact to="/species">
            Species
          </NavLink>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
};
