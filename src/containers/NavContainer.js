import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getApiData } from "../actions";

class NavLinks extends Component {
  render() {
    const { getSearchData, location } = this.props;
    return (
      <div className="col-sm-3 sidebar">
        <input
          type="text"
          onChange={e => getSearchData(location.pathname, e.target.value)}
          placeholder="Search"
        />
        <NavLink
          activeClassName="active btn-primary"
          className="btn"
          exact
          to="/"
        >
          Home
        </NavLink>{" "}
        <br />
        <NavLink
          activeClassName="active btn-primary"
          className="btn"
          exact
          to="/films"
        >
          Films
        </NavLink>
        <br />
        <NavLink
          activeClassName="active btn-primary"
          className="btn"
          exact
          to="/people"
        >
          People
        </NavLink>
        <br />
        <NavLink
          activeClassName="active btn-primary"
          className="btn"
          exact
          to="/planets"
        >
          Planets
        </NavLink>
        <br />
        <NavLink
          activeClassName="active btn-primary"
          className="btn"
          exact
          to="/species"
        >
          Species
        </NavLink>
        <br />
        <NavLink
          activeClassName="active btn-primary"
          className="btn"
          exact
          to="/starships"
        >
          Starships
        </NavLink>
        <br />
        <NavLink
          activeClassName="active btn-primary"
          className="btn"
          exact
          to="/vehicles"
        >
          Vehicles
        </NavLink>
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    infoData: state.infoData,
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchData: (location, value) => {
      dispatch(getApiData(location.substring(1), `?search=${value}`));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLinks);
