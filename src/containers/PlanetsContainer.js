import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Planets from '../components/Planets';
import { getResources } from '../actions';
import serialize from 'form-serialize';
import queryString from 'query-string';

class PlanetsContainer extends Component {
  componentDidMount() {
    this.props.getResources();
  }

  render() {
    const { planets, planetsCount, onSearchSubmit, isFetching, match, onPageChange, searchQuery } = this.props;
    return (
      <Planets
        planets={planets}
        planetsCount={planetsCount}
        isFetching={isFetching}
        onSearchSubmit={onSearchSubmit}
        match={match}
        onPageChange={onPageChange}
        searchQuery={searchQuery}
      />
    );
  }
}

PlanetsContainer.propTypes = {
  planets: PropTypes.array.isRequired,
  planetsCount: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  getResources: PropTypes.func.isRequired,
  searchQuery: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  const planets = state.PlanetsInfo.planets;

  return {
    planets: planets.results || [],
    isFetching: state.PlanetsInfo.isFetching,
    planetsCount: planets.count || 10,
    searchQuery: ownProps.location.search
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getResources: () => {
      const query = queryString.parse(ownProps.location.search);
      const searchQuery = query.search;
      dispatch(getResources('planets', ownProps.match.params.page_number, searchQuery));
    },

    onPageChange: (e) => {
      const currentPage = parseInt(ownProps.match.params.page_number, 10);
      let page;
      if (e.target.text === '<') {
        page = currentPage - 1;
      } else if (e.target.text === '>') {
        page = currentPage + 1;
      } else {
        page = e.target.text;
      }

      const query = queryString.parse(ownProps.location.search);
      const searchQuery = query.search;

      dispatch(getResources('planets', page, searchQuery));
      ownProps.history.push({
        pathname: `/planets/${ page || '' }`,
        search: `${ searchQuery ? '?search=' + searchQuery : '' }`
      });
    },

    onSearchSubmit: (e) => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(getResources('planets', 1, data.search_query));
      ownProps.history.push(`/planets/1${ data.search_query ? '?search=' + data.search_query : '' }`);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetsContainer);
