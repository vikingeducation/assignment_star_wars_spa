import React, { Component } from "react";
import { connect } from "react-redux";
import Films from "../components/Films";
import { getFilmsFromAPI } from "../actions";

class FilmsContainer extends Component {
  componentDidMount() {
    this.props.getFilmsFromAPI();
  }

  render() {
    return <Films {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    films: state.films.allFilms,
    isFetching: state.films.isFetchingAll
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getFilmsFromAPI: () => {
      dispatch(getFilmsFromAPI());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);
