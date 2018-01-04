import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getStarWars } from "../actions";

class People extends Component {
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
  // console.log("state in populatecontainer=> ", state);
  // console.log("ownprops =>", ownProps);
  return {
    entities: state.starWarsReducer.entities
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getStarWars: () => {
      dispatch(getStarWars("/people"));
    }
  };
};

const PeopleContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(People)
);
export default PeopleContainer;
