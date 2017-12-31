import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Species from '../components/Species';
import { getResources } from '../actions';
import serialize from 'form-serialize';
import queryString from 'query-string';

class SpeciesContainer extends Component {
  componentDidMount() {
    this.props.getResources();
  }

  render() {
    const { species, speciesCount, onSearchSubmit, isFetching, match, onPageChange, searchQuery } = this.props;
    return (
      <Species
        species={species}
        speciesCount={speciesCount}
        isFetching={isFetching}
        onSearchSubmit={onSearchSubmit}
        match={match}
        onPageChange={onPageChange}
        searchQuery={searchQuery}
      />
    );
  }
}

SpeciesContainer.propTypes = {
  species: PropTypes.array.isRequired,
  speciesCount: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  getResources: PropTypes.func.isRequired,
  searchQuery: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  const species = state.SpeciesInfo.species;

  return {
    species: species.results || [],
    isFetching: state.SpeciesInfo.isFetching,
    speciesCount: species.count || 10,
    searchQuery: ownProps.location.search
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getResources: () => {
      const query = queryString.parse(ownProps.location.search);
      const searchQuery = query.search;
      dispatch(getResources('species', ownProps.match.params.page_number, searchQuery));
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

      dispatch(getResources('species', page, searchQuery));
      ownProps.history.push({
        pathname: `/species/${ page || '' }`,
        search: `${ searchQuery ? '?search=' + searchQuery : '' }`
      });
    },

    onSearchSubmit: (e) => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(getResources('species', 1, data.search_query));
      ownProps.history.push(`/species/1${ data.search_query ? '?search=' + data.search_query : '' }`);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeciesContainer);
