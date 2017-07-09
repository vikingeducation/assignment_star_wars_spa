import React, {Component} from 'react'
import {connect} from 'react-redux'
import SpecificSpecies from '../components/SpecificSpecies';
import {
  getSpecificSpecies
} from "../actions";

class SpecificSpeciesContainer extends Component {
  componentDidMount() {
    this.props.getSpecificSpecies();
  }

  render() {
    return <SpecificSpecies {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    species: state.species.specificSpecies,
    isFetching: state.species.isFetchingSpecific
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSpecificSpecies: () => {
      dispatch(getSpecificSpecies(ownProps.match.params.id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpecificSpeciesContainer)
