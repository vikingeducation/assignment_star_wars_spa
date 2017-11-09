import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiData } from "../actions";
import Species from "../components/Species/Species";

class SpeciesContainer extends Component {
  componentDidMount() {
    this.props.getSpeciesData(this.props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.props.getSpeciesData(nextProps.location.search);
    }
  }

  render() {
    const { infoData, isFetching } = this.props;

    return <Species speciesData={infoData} isFetching={isFetching} />;
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
    getSpeciesData: params => {
      dispatch(getApiData("species", params));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesContainer);
