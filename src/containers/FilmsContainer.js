import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getResources } from '../actions';
import Films from '../components/Films';
import serialize from 'form-serialize';

class FilmsContainer extends Component {
  componentDidMount() {
    this.props.getResources('films');
  }

  render() {
    let { films, isFetching, onSearchSubmit } = this.props;
    films = films.sort((a, b) => a.episode_id > b.episode_id);
    return <Films films={films} isFetching={isFetching} onSearchSubmit={onSearchSubmit}/>;
  }
}

FilmsContainer.propTypes = {
  films: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  getResources: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    films: state.FilmsInfo.films,
    isFetching: state.FilmsInfo.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getResources: (resource) => {
      dispatch(getResources(resource));
    },

    onSearchSubmit: (e) => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(getResources('films', data.search_query));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmsContainer);


