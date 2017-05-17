import React, { Component } from "react";
import { connect } from "react-redux";
import Films from "../components/Films";
import { getFilms } from "../actions";

class FilmsContainer extends Component {
  componentDidMount() {
    this.props.getFilms();
  }
  render() {
    const { films, isFetching } = this.props;
    return <Films films={films} isFetching={isFetching} />;
  }
}

const mapStateToProps = state => {
  return {
    films: state.films,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFilms: () => {
      dispatch(getFilms());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);
