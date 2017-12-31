import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardBody } from 'reactstrap';
import Spinner from './elements/Spinner';
import SearchForm from './elements/SearchForm';
import Pagination from './Pagination';
import { withRouter } from 'react-router-dom';

const Vehicles = ({ vehicles, vehiclesCount, onSearchSubmit, isFetching, match, onPageChange, searchQuery }) => {
  const vehiclesCards = vehicles.map(vehicle => {
    // let cost_in_credits = parseInt(vehicle.cost_in_credits, 10);
    // let length = parseInt(vehicle.length, 10);
    // let crew = parseInt(vehicle.crew, 10);
    // let cargo_capacity = parseInt(vehicle.cargo_capacity, 10);

    // if (isNaN(cost_in_credits)) cost_in_credits = vehicle.cost_in_credits;
    // if (isNaN(length)) length = vehicle.length;
    // if (isNaN(crew)) crew = vehicle.crew;
    // if (isNaN(cargo_capacity)) cargo_capacity = vehicle.cargo_capacity;

    return <div className="col-md-6" key={vehicle.name}>
      <Card className="PersonCard">
        <CardBody>
          <CardTitle>{vehicle.name}</CardTitle>

          <div className="attribute-item">
            Model:
            <span className="attribute">{vehicle.model}</span>
          </div>

          <div className="attribute-item">
            Manufacturer:
            <span className="attribute">{vehicle.manufacturer}</span>
          </div>

          <div className="attribute-item">
            Class:
            <span className="attribute">{vehicle.vehicle_class}</span>
          </div>

          <div className="attribute-item">
            Cost in Credits:
            <span className="attribute">{vehicle.cost_in_credits}</span>
          </div>

          <div className="attribute-item">
            Length:
            <span className="attribute">{`${ vehicle.length } Meters`}</span>
          </div>

          <div className="attribute-item">
            # of Crew:
            <span className="attribute">{vehicle.crew}</span>
          </div>

          <div className="attribute-item">
            # of Passengers:
            <span className="attribute">{vehicle.passengers}</span>
          </div>

          <div className="attribute-item">
            Max Atmospheric Speed:
            <span className="attribute">{vehicle.max_atmosphering_speed}</span>
          </div>

          <div className="attribute-item">
            Cargo Capacity:
            <span className="attribute">{vehicle.cargo_capacity}</span>
          </div>

        </CardBody>
      </Card>
    </div>;
  });

  return (
    <div className="Vehicles container">
      <h1 className="text-center">Vehicles</h1>
      <SearchForm onSubmit={onSearchSubmit}/>
      {isFetching
        ? <Spinner/>
        : <div>
          <Pagination
            resource="vehicles"
            length={vehiclesCount}
            currentPage={match.params.page_number}
            perPage="10"
            onPageChange={onPageChange}
            searchQuery={searchQuery}
          />
          <div className="row justify-content-center">
            {vehiclesCards.length ? vehiclesCards : <p className="text-muted text-center">No Vehicles Found</p>}
          </div>
          <Pagination
            resource="vehicles"
            length={vehiclesCount}
            currentPage={match.params.page_number}
            perPage="10"
            onPageChange={onPageChange}
            searchQuery={searchQuery}
          />
        </div>}
    </div>
  );
};

Vehicles.propTypes = {
  vehicles: PropTypes.array.isRequired,
  vehiclesCount: PropTypes.number.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string
};

export default withRouter(Vehicles);
