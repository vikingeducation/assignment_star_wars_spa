import React from "react";
import { connect } from "react-redux";
import { getStarships, getStarship } from "../actions/starships";
import Starships from "../Components/Starships";

class StarshipsContainer extends React.Component {
  componentDidMount() {
    this.props.getIntitialStarships();
  }
  render() {
    if (this.props.match.isExact) {
      return (
        <Starships
          starships={this.props.starships}
          onClick={this.props.onClick}
        />
      );
    } else {
      return null;
    }
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
      console.log(e.target);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarshipsContainer);
