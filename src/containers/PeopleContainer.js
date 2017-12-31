import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import People from '../components/People';
import { getResources } from '../actions';
import serialize from 'form-serialize';
import queryString from 'query-string';

class PeopleContainer extends Component {
  componentDidMount() {
    this.props.getResources();
  }

  render() {
    const { people, peopleCount, onSearchSubmit, isFetching, match, onPageChange, searchQuery } = this.props;
    return (
      <People
        people={people}
        peopleCount={peopleCount}
        isFetching={isFetching}
        onSearchSubmit={onSearchSubmit}
        match={match}
        onPageChange={onPageChange}
        searchQuery={searchQuery}
      />
    );
  }
}

PeopleContainer.propTypes = {
  people: PropTypes.array.isRequired,
  peopleCount: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  getResources: PropTypes.func.isRequired,
  searchQuery: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  const people = state.PeopleInfo.people;

  return {
    people: people.results || [],
    isFetching: state.PeopleInfo.isFetching,
    peopleCount: people.count || 10,
    searchQuery: ownProps.location.search
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getResources: () => {
      const query = queryString.parse(ownProps.location.search);
      const searchQuery = query.search;
      dispatch(getResources('people', ownProps.match.params.page_number, searchQuery));
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

      dispatch(getResources('people', page, searchQuery));
      ownProps.history.push({
        pathname: `/people/${ page }`,
        search: `${ searchQuery ? '?search=' + searchQuery : '' }`
      });
    },

    onSearchSubmit: (e) => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(getResources('people', 1, data.search_query));
      ownProps.history.push(`/people/1${ data.search_query ? '?search=' + data.search_query : '' }`);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleContainer);
