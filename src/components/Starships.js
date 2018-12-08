import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardBody } from 'reactstrap';
import Spinner from './elements/Spinner';
import SearchForm from './elements/SearchForm';
import Pagination from './Pagination';
import { withRouter } from 'react-router-dom';

const Starships = ({ starships, starshipsCount, onSearchSubmit, isFetching, match, onPageChange, searchQuery }) => {
  const starshipsCards = starships.map(starship => {
    let cost_in_credits = parseInt(starship.cost_in_credits, 10);
    let length = parseInt(starship.length, 10);
    let crew = parseInt(starship.crew, 10);
    let cargo_capacity = parseInt(starship.cargo_capacity, 10);

    if (isNaN(cost_in_credits)) cost_in_credits = starship.cost_in_credits;
    // } else {
    //   debugger;
    //   cost_in_credits = cost_in_credits.toLocalString();
    // }

    if (isNaN(length)) length = starship.length;
    if (isNaN(crew)) crew = starship.crew;
    if (isNaN(cargo_capacity)) cargo_capacity = starship.cargo_capacity;

    return <div className="col-md-6" key={starship.name}>
      <Card className="PersonCard">
        <CardBody>
          <CardTitle>{starship.name}</CardTitle>

          <div className="attribute-item">
            Model:
            <span className="attribute">{starship.model}</span>
          </div>

          <div className="attribute-item">
            Manufacturer:
            <span className="attribute">{starship.manufacturer}</span>
          </div>

          <div className="attribute-item">
            Class:
            <span className="attribute">{starship.starship_class}</span>
          </div>

          <div className="attribute-item">
            Cost in Credits:
            <span className="attribute">{cost_in_credits}</span>
          </div>

          <div className="attribute-item">
            Length:
            <span className="attribute">{`${ length } Meters`}</span>
          </div>

          <div className="attribute-item">
            # of Crew:
            <span className="attribute">{crew}</span>
          </div>

          <div className="attribute-item">
            Max Atmospheric Speed:
            <span className="attribute">{starship.max_atmosphering_speed}</span>
          </div>

          <div className="attribute-item">
            Hyperdrive Rating:
            <span className="attribute">{starship.hyperdrive_rating}</span>
          </div>

          <div className="attribute-item">
            Cargo Capacity:
            <span className="attribute">{cargo_capacity}</span>
          </div>

        </CardBody>
      </Card>
    </div>
  });

  return (
    <div className="Starships container">
      <h1 className="text-center">Starships</h1>
      <SearchForm onSubmit={onSearchSubmit}/>
      {isFetching
        ? <Spinner/>
        : <div>
          <Pagination
            resource="starships"
            length={starshipsCount}
            currentPage={match.params.page_number}
            perPage="10"
            onPageChange={onPageChange}
            searchQuery={searchQuery}
          />
          <div className="row justify-content-center">
            {starshipsCards.length ? starshipsCards : <p className="text-muted text-center">No Starships Found</p>}
          </div>
          <Pagination
            resource="starships"
            length={starshipsCount}
            currentPage={match.params.page_number}
            perPage="10"
            onPageChange={onPageChange}
            searchQuery={searchQuery}
          />
        </div>}
    </div>
  );
};

Starships.propTypes = {
  starships: PropTypes.array.isRequired,
  starshipsCount: PropTypes.number.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string
};

export default withRouter(Starships);
