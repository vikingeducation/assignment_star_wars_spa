import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="MainNav col-2">
      <nav className="navbar navbar-inverse bg-inverse navbar-fixed-left">
        <Link to="/" className="navbar-brand">
          SWAPI
        </Link>
        <ul className="nav navbar-nav">
          <li>
            <NavLink exact to="/" activeClassName="active" className="first side-navlink">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/films/" activeClassName="active" className="side-navlink">
              Films
            </NavLink>
          </li>

          <li>
            <NavLink to="/people" activeClassName="active" className="side-navlink">
              People
            </NavLink>
          </li>

          <li>
            <NavLink to="/starships" activeClassName="active" className="side-navlink">
              Starships
            </NavLink>
          </li>

          <li>
            <NavLink to="/vehicles" activeClassName="active" className="side-navlink">
              Vehicles
            </NavLink>
          </li>

          <li>
            <NavLink to="/species" activeClassName="active" className="side-navlink">
              Species
            </NavLink>
          </li>

          <li>
            <NavLink to="/planets" activeClassName="active" className="side-navlink">
              Planets
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Nav;
