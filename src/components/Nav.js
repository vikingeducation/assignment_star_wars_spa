import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="nav">
      <NavLink activeClassName="activeNav" to="/people">
        <li>People</li>
      </NavLink>
      <NavLink activeClassName="activeNav" to="/planets">
        <li>Planets</li>
      </NavLink>
      <NavLink activeClassName="activeNav" to="/films">
        <li>Films</li>
      </NavLink>
      <NavLink activeClassName="activeNav" to="/vehicles">
        <li>Vehicles</li>
      </NavLink>
      <NavLink activeClassName="activeNav" to="/starships">
        <li>Starships</li>
      </NavLink>
    </ul>
  );
};

export default Nav;
