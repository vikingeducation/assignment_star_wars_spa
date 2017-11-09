import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { getApiData } from "../actions";
import Films from "../components/Films/Films";

class FilmsContainer extends Component {
  componentDidMount() {
    this.props.getFilmsData(this.props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.props.getFilmsData(nextProps.location.search);
    }
  }

  render() {
    const { infoData, isFetching } = this.props;

    return <Films filmData={infoData} isFetching={isFetching} />;
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
    getFilmsData: params => {
      dispatch(getApiData("films", params));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);
