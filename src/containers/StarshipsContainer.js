import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiData } from "../actions";
import Starships from "../components/Starships/Starships";

class StarshipsContainer extends Component {
  componentDidMount() {
    this.props.getStarshipsData(this.props.location.search);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.props.getStarshipsData(nextProps.location.search);
    }
  }

  render() {
    const { infoData, isFetching } = this.props;

    return <Starships starshipsData={infoData} isFetching={isFetching} />;
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
    getStarshipsData: params => {
      dispatch(getApiData("starships", params));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarshipsContainer);
