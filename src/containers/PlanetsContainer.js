import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiData } from "../actions";
import Planets from "../components/Planets/Planets";

class PlanetsContainer extends Component {
  componentDidMount() {
    this.props.getPlanetsData(this.props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.props.getPlanetsData(nextProps.location.search);
    }
  }

  render() {
    const { infoData, isFetching } = this.props;

    return <Planets planetsData={infoData} isFetching={isFetching} />;
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
    getPlanetsData: params => {
      dispatch(getApiData("planets", params));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsContainer);
