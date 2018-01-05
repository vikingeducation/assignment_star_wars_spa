import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { getStarWars } from "../actions";

class Populate extends Component {
  componentDidMount() {
    this.props.getStarWars();
  }

  render() {
    const gallery = this.props.entities.map((entity, index) => {
      return <p key={index}>{entity.title} </p>;
    });
    return <div>{gallery}</div>;
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
  return {
    getStarWars: () => {
      dispatch(getStarWars(ownProps.location.pathname.slice(1)));
    }
  };
};

const PopulateContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Populate)
);
export default PopulateContainer;
