import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Starships from '../components/Starships';
import { getResources } from '../actions';
import serialize from 'form-serialize';
import queryString from 'query-string';

class StarshipsContainer extends Component {
  componentDidMount() {
    this.props.getResources();
  }

  render() {
    const { starships, starshipsCount, onSearchSubmit, isFetching, match, onPageChange, searchQuery } = this.props;
    return (
      <Starships
        starships={starships}
        starshipsCount={starshipsCount}
        isFetching={isFetching}
        onSearchSubmit={onSearchSubmit}
        match={match}
        onPageChange={onPageChange}
        searchQuery={searchQuery}
      />
    );
  }
}

StarshipsContainer.propTypes = {
  starships: PropTypes.array.isRequired,
  starshipsCount: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  getResources: PropTypes.func.isRequired,
  searchQuery: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  const starships = state.StarshipsInfo.starships;

  return {
    starships: starships.results || [],
    isFetching: state.StarshipsInfo.isFetching,
    starshipsCount: starships.count || 10,
    searchQuery: ownProps.location.search
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getResources: () => {
      const query = queryString.parse(ownProps.location.search);
      const searchQuery = query.search;
      dispatch(getResources('starships', ownProps.match.params.page_number, searchQuery));
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

      dispatch(getResources('starships', page, searchQuery));
      ownProps.history.push({
        pathname: `/starships/${ page }`,
        search: `${ searchQuery ? '?search=' + searchQuery : '' }`
      });
    },

    onSearchSubmit: (e) => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(getResources('starships', 1, data.search_query));
      ownProps.history.push(`/starships/1${ data.search_query ? '?search=' + data.search_query : '' }`);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarshipsContainer);
