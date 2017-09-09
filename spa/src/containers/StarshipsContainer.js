import React from "react";
import { connect } from "react-redux";
import { getStarships, getStarship } from "../actions/starships";
import Starships from "../Components/Starships";
import { Starship } from "../Components/Starship";

class StarshipsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
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
      return <Starship starship={this.props.starships.starship} />;
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
      dispatch(getStarship(e.target.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarshipsContainer);
