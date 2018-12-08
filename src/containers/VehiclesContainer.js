import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Vehicles from '../components/Vehicles';
import { getResources } from '../actions';
import serialize from 'form-serialize';
import queryString from 'query-string';

class VehiclesContainer extends Component {
  componentDidMount() {
    this.props.getResources();
  }

  render() {
    const { vehicles, vehiclesCount, onSearchSubmit, isFetching, match, onPageChange, searchQuery } = this.props;
    return (
      <Vehicles
        vehicles={vehicles}
        vehiclesCount={vehiclesCount}
        isFetching={isFetching}
        onSearchSubmit={onSearchSubmit}
        match={match}
        onPageChange={onPageChange}
        searchQuery={searchQuery}
      />
    );
  }
}

VehiclesContainer.propTypes = {
  vehicles: PropTypes.array.isRequired,
  vehiclesCount: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  getResources: PropTypes.func.isRequired,
  searchQuery: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  const vehicles = state.VehiclesInfo.vehicles;

  return {
    vehicles: vehicles.results || [],
    isFetching: state.VehiclesInfo.isFetching,
    vehiclesCount: vehicles.count || 10,
    searchQuery: ownProps.location.search
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getResources: () => {
      const query = queryString.parse(ownProps.location.search);
      const searchQuery = query.search;
      dispatch(getResources('vehicles', ownProps.match.params.page_number, searchQuery));
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

      dispatch(getResources('vehicles', page, searchQuery));
      ownProps.history.push({
        pathname: `/vehicles/${ page }`,
        search: `${ searchQuery ? '?search=' + searchQuery : '' }`
      });
    },

    onSearchSubmit: (e) => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(getResources('vehicles', 1, data.search_query));
      ownProps.history.push(`/vehicles/1${ data.search_query ? '?search=' + data.search_query : '' }`);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VehiclesContainer);
