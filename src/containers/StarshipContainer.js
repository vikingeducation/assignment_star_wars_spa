import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiData } from "../actions";
import OneStarship from "../components/Starships/OneStarship";

class StarshipContainer extends Component {
  componentDidMount() {
    this.props.getStarshipData(this.props.match.params.id);
  }

  render() {
    const { infoData, isFetching } = this.props;
    return <OneStarship starshipData={infoData} isFetching={isFetching} />;
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
    getStarshipData: id => {
      dispatch(getApiData("starships", id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarshipContainer);
