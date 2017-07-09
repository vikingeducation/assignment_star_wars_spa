import React, { Component } from "react";
import { connect } from "react-redux";
import Vehicles from "../components/Vehicles";
import {
  getVehiclesFromAPI
} from "../actions";

class VehiclesContainer extends Component {
  componentDidMount() {
    this.props.getVehiclesFromAPI(null, this.props.page);
  }

  render() {
    return <Vehicles {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles.allVehicles,
    isFetching: state.vehicles.isFetchingAll,
    page: state.vehicles.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getVehiclesFromAPI: (searchTerm, page) => {
      dispatch(getVehiclesFromAPI(searchTerm, page));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  VehiclesContainer
);