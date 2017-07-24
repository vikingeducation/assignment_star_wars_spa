import React, { Component } from "react";
import { connect } from "react-redux";
import Species from "../components/Species";
import { getSpeciesFromAPI } from "../actions";

class SpeciesContainer extends Component {
  componentDidMount() {
    this.props.getSpeciesFromAPI(null, this.props.page);
  }

  render() {
    return <Species {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    species: state.species.allSpecies,
    isFetching: state.species.isFetchingAll,
    page: state.species.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSpeciesFromAPI: (searchTerm, page) => {
      dispatch(getSpeciesFromAPI(searchTerm, page));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesContainer);
