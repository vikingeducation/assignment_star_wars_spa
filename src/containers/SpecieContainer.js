import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiData } from "../actions";
import OneSpecies from "../components/Species/OneSpecies";

class SpecieContainer extends Component {
  componentDidMount() {
    this.props.getSpecieData(this.props.match.params.id);
  }

  render() {
    const { infoData, isFetching } = this.props;
    return <OneSpecies specieData={infoData} isFetching={isFetching} />;
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
    getSpecieData: id => {
      dispatch(getApiData("species", id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecieContainer);
