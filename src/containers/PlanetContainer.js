import React, { Component } from "react";
import { connect } from "react-redux";
import Planet from "../components/Planet";
import { getSpecificPlanet } from "../actions";

class PlanetContainer extends Component {
  componentDidMount() {
    this.props.getSpecificPlanet();
  }

  render() {
    return <Planet {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    planet: state.planets.specificPlanet,
    isFetching: state.planets.isFetchingSpecific
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSpecificPlanet: () => {
      dispatch(getSpecificPlanet(ownProps.match.params.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetContainer);
