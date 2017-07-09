import React, { Component } from "react";
import { connect } from "react-redux";
import Planets from "../components/Planets";
import {
  getSpeciesFromAPI
} from "../actions";

class PlanetsContainer extends Component {
  componentDidMount() {
    this.props.getPlanetsFromAPI(null, this.props.page);
  }

  render() {
    return <Planets {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    planets: state.planets.allPlanets,
    isFetching: state.planets.isFetchingAll,
    page: state.planets.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPlanetsFromAPI: (searchTerm, page) => {
      dispatch(getSpeciesFromAPI(searchTerm, page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PlanetsContainer
);