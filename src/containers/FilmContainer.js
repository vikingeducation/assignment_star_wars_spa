import React, { Component } from "react";
import { connect } from "react-redux";
import { findFilm } from "../helpers";
import Film from "../components/Film";

class FilmContainer extends Component {
  render() {
    const { film } = this.props;
    return <Film film={film} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    film: findFilm(ownProps.match.params.id, state.films)
  };
};

export default connect(mapStateToProps)(Film);
