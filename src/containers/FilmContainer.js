import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import { getApiData } from "../actions";
import OneFilm from "../components/Films/OneFilm";

class FilmContainer extends Component {
  componentDidMount() {
    this.props.getFilmData(this.props.match.params.id);
  }

  render() {
    const { infoData, isFetching } = this.props;
    return <OneFilm filmData={infoData} isFetching={isFetching} />;
  }
}

const mapStateToProps = state => {
  return {
    infoData: state.infoData,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFilmData: id => {
      dispatch(getApiData("films", id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmContainer);
