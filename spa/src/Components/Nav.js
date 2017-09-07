import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <NavLink activeClassName="active" exact to="/ships">
        Ships
      </NavLink>{" "}
      <NavLink activeClassName="active" exact to="/spieces">
        Species
      </NavLink>
    </div>
  );
};
