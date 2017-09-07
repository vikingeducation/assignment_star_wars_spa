import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <div>
      <NavLink activeClassName="active" exact to="/">
        Home
      </NavLink>{" "}
      <NavLink activeClassName="active" exact to="/starships">
        Starships
      </NavLink>{" "}
      <NavLink activeClassName="active" exact to="/species">
        Species
      </NavLink>
    </div>
  );
};
