import React, { Component } from "react";
import { connect } from "react-redux";
import { findFilm } from "../helpers";
import Film from "../components/Film";
import { withRouter } from "react-router-dom";

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

export default withRouter(connect(mapStateToProps)(FilmContainer));
