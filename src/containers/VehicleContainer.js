import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiData } from "../actions";
import OneVehicle from "../components/Vehicles/OneVehicle";

class VehicleContainer extends Component {
  componentDidMount() {
    this.props.getVehicleData(this.props.match.params.id);
  }

  render() {
    const { infoData, isFetching } = this.props;
    return <OneVehicle vehicleData={infoData} isFetching={isFetching} />;
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
    getVehicleData: id => {
      dispatch(getApiData("vehicles", id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleContainer);
