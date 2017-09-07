import React from "react";
import { connect } from "react-redux";
import { getStarships, getStarship } from "../actions/starships";
import Starships from "../Components/Starships";

class StarshipsContainer extends React.Component {
  componentDidMount() {
    this.props.getIntitialStarships();
  }

  render() {
    console.log(this.props.starships);
    return <Starships starships={this.props.starships} />;
  }
}

const mapStateToProps = state => {
  return {
    starships: state.starships
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getIntitialStarships: () => {
      dispatch(getStarships());
    },
    onClick: e => {
      //TODO: write this
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarshipsContainer);
