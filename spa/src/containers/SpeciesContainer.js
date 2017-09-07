import React from "react";
import { connect } from "react-redux";
import { getSpecies, getSpecie } from "../actions/species";
import Species from "../Components/Species";
import { Specie } from "../Components/Specie";

class SpeciesContainer extends React.Component {
  componentDidMount() {
    this.props.getIntitialSpecies();
  }
  render() {
    if (this.props.match.isExact) {
      return (
        <Species species={this.props.species} onClick={this.props.onClick} />
      );
    } else {
      return <Specie specie={this.props.species.specie} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    species: state.species
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getIntitialSpecies: () => {
      dispatch(getSpecies());
    },
    onClick: e => {
      dispatch(getSpecie(e.target.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeciesContainer);
