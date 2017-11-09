import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiData } from "../actions";
import Peoples from "../components/Peoples/Peoples";
import { withRouter } from "react-router-dom";

class PeoplesContainer extends Component {
  componentDidMount() {
    this.props.getPeoplesData(this.props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.props.getPeoplesData(nextProps.location.search);
    }
  }

  render() {
    const { infoData, isFetching } = this.props;

    return <Peoples peopleData={infoData} isFetching={isFetching} />;
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
    getPeoplesData: params => {
      dispatch(getApiData("people", params));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PeoplesContainer)
);
