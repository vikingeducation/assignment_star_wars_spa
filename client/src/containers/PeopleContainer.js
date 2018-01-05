import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { getStarWars } from "../actions";

class People extends Component {
  componentDidMount() {
    this.props.getStarWars();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.props.getStarWars(this.props);
  // }

  render() {
    console.log("this props => ", this.props);
    const gallery = this.props.entities.map((entity, index) => {
      return <p key={index}>{entity.name} </p>;
    });
    return (
      <div>
        {gallery}{" "}
        <NavLink
          activeClassName="active"
          exact
          to={this.props.previous ? this.props.previous : "/people"}
        >
          Previous Page
        </NavLink>{" "}
        <NavLink
          activeClassName="active"
          exact
          to={this.props.next ? this.props.next : "/people"}
        >
          Next Page
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    entities: state.starWarsReducer.entities,
    previous: state.starWarsReducer.previous,
    next: state.starWarsReducer.next
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const path = ownProps.location.pathname.slice(1);
  console.log("path => ", path);
  return {
    getStarWars: () => {
      dispatch(getStarWars(path));
    }
  };
};

const PeopleContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(People)
);
export default PeopleContainer;
