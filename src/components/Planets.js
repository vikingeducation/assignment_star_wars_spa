import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardBody } from 'reactstrap';
import Spinner from './elements/Spinner';
import SearchForm from './elements/SearchForm';
import Pagination from './Pagination';
import { withRouter } from 'react-router-dom';

const Planets = ({ planets, planetsCount, onSearchSubmit, isFetching, match, onPageChange, searchQuery }) => {
  const planetsCards = planets.map(planet => {
    return <div className="col-md-6" key={planet.name}>
      <Card className="PersonCard">
        <CardBody>
          <CardTitle>{planet.name}</CardTitle>

          <div className="attribute-item">
            Diameter:
            <span className="attribute">{planet.diameter}</span>
          </div>

          <div className="attribute-item">
            Rotation Period:
            <span className="attribute">{planet.rotation_period} hours</span>
          </div>

          <div className="attribute-item">
            Orbital Period:
            <span className="attribute">{planet.orbital_period} days</span>
          </div>

          <div className="attribute-item">
            Gravity:
            <span className="attribute">{planet.gravity}</span>
          </div>

          <div className="attribute-item">
            Population:
            <span className="attribute">{planet.population}</span>
          </div>

          <div className="attribute-item">
            Climate:
            <span className="attribute">{planet.climate}</span>
          </div>

          <div className="attribute-item">
            Terrain:
            <span className="attribute">{planet.terrain}</span>
          </div>

          <div className="attribute-item">
            Surface Water:
            <span className="attribute">{planet.surface_water}%</span>
          </div>

        </CardBody>
      </Card>
    </div>;
  });

  return (
    <div className="Planets container">
      <h1 className="text-center">Planets</h1>
      <SearchForm onSubmit={onSearchSubmit}/>
      {isFetching
        ? <Spinner/>
        : <div>
          <Pagination
            resource="planets"
            length={planetsCount}
            currentPage={match.params.page_number}
            perPage="10"
            onPageChange={onPageChange}
            searchQuery={searchQuery}
          />
          <div className="row justify-content-center">
            {planetsCards.length ? planetsCards : <p className="text-muted text-center">No Planets Found</p>}
          </div>
          <Pagination
            resource="planets"
            length={planetsCount}
            currentPage={match.params.page_number}
            perPage="10"
            onPageChange={onPageChange}
            searchQuery={searchQuery}
          />
        </div>}
    </div>
  );
};

Planets.propTypes = {
  planets: PropTypes.array.isRequired,
  planetsCount: PropTypes.number.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string
};

export default withRouter(Planets);
