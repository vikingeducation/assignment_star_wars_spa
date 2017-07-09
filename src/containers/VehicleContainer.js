import React, { Component } from "react";
import { connect } from "react-redux";
import Vehicle from "../components/Vehicle";
import { getSpecificVehicle } from "../actions";

class VehicleContainer extends Component {
  componentDidMount() {
    this.props.getSpecificVehicle();
  }

  render() {
    return <Vehicle {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    vehicle: state.vehicles.specificVehicle,
    isFetching: state.vehicles.isFetchingSpecific
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSpecificVehicle: () => {
      dispatch(getSpecificVehicle(ownProps.match.params.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleContainer);
