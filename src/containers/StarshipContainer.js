import React, { Component } from "react";
import { connect } from "react-redux";
import Starship from "../components/Starship";
import { getSpecificStarship } from "../actions";

class StarshipContainer extends Component {
  componentDidMount() {
    this.props.getSpecificStarship();
  }

  render() {
    return <Starship {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    starship: state.starships.specificStarship,
    isFetching: state.starships.isFetchingSpecific
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSpecificStarship: () => {
      dispatch(getSpecificStarship(ownProps.match.params.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarshipContainer);
