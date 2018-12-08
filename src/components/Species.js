import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardBody } from 'reactstrap';
import Spinner from './elements/Spinner';
import SearchForm from './elements/SearchForm';
import Pagination from './Pagination';
import { withRouter } from 'react-router-dom';

const Species = ({ species, speciesCount, onSearchSubmit, isFetching, match, onPageChange, searchQuery }) => {
  const speciesCards = species.map(sp => {
    return <div className="col-md-6" key={sp.name}>
      <Card className="PersonCard">
        <CardBody>
          <CardTitle>{sp.name}</CardTitle>

          <div className="attribute-item">
            Classification:
            <span className="attribute">{sp.classification}</span>
          </div>

          <div className="attribute-item">
            Designation:
            <span className="attribute">{sp.designation}</span>
          </div>

          <div className="attribute-item">
            Average Height:
            <span className="attribute">{sp.average_height} cm</span>
          </div>

          <div className="attribute-item">
            Average Lifsepan:
            <span className="attribute">{sp.average_lifespan}</span>
          </div>

          <div className="attribute-item">
            Eye Color(s):
            <span className="attribute">{sp.eye_colors}</span>
          </div>

          <div className="attribute-item">
            Hair Color(s):
            <span className="attribute">{sp.hair_colors}</span>
          </div>

          <div className="attribute-item">
            Skin Color(s):
            <span className="attribute">{sp.skin_colors}</span>
          </div>

          <div className="attribute-item">
            Language:
            <span className="attribute">{sp.language}</span>
          </div>

          <div className="attribute-item">
            Homeworld:
            <span className="attribute">{sp.homeworld}</span>
          </div>

        </CardBody>
      </Card>
    </div>;
  });

  return (
    <div className="Species container">
      <h1 className="text-center">Species</h1>
      <SearchForm onSubmit={onSearchSubmit}/>
      {isFetching
        ? <Spinner/>
        : <div>
          <Pagination
            resource="species"
            length={speciesCount}
            currentPage={match.params.page_number}
            perPage="10"
            onPageChange={onPageChange}
            searchQuery={searchQuery}
          />
          <div className="row justify-content-center">
            {speciesCards.length ? speciesCards : <p className="text-muted text-center">No Species Found</p>}
          </div>
          <Pagination
            resource="species"
            length={speciesCount}
            currentPage={match.params.page_number}
            perPage="10"
            onPageChange={onPageChange}
            searchQuery={searchQuery}
          />
        </div>}
    </div>
  );
};

Species.propTypes = {
  species: PropTypes.array.isRequired,
  speciesCount: PropTypes.number.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string
};

export default withRouter(Species);
