import React, { Component } from "react";
import { connect } from "react-redux";
import Film from "../components/Film";
import { getSpecificFilm } from "../actions";

class FilmContainer extends Component {
  componentDidMount() {
    this.props.getSpecificFilm();
  }

  render() {
    return <Film {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    film: state.films.specificFilm,
    isFetching: state.films.isFetchingSpecific
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSpecificFilm: () => {
      dispatch(getSpecificFilm(ownProps.match.params.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmContainer);
