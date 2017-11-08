import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiData } from "../actions";
import OnePlanet from "../components/Planets/OnePlanet";

class OnePlanetContainer extends Component {
  componentDidMount() {
    this.props.getPlanetData(this.props.match.params.id);
  }

  render() {
    const { infoData, isFetching } = this.props;

    return <OnePlanet planetData={infoData} isFetching={isFetching} />;
  }
}

const mapStateToProps = state => {
  return {
    infoData: state.infoData,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPlanetData: id => {
      dispatch(getApiData("planets", id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OnePlanetContainer);
