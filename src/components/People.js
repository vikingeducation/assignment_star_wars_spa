import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardBody } from 'reactstrap';
import Spinner from './elements/Spinner';
import SearchForm from './elements/SearchForm';
import Pagination from './Pagination';
import { withRouter } from 'react-router-dom';

const People = ({ people, peopleCount, onSearchSubmit, isFetching, match, onPageChange, searchQuery }) => {
  const peopleCards = people.map(person => (
    <div className="col-md-6" key={person.name}>
      <Card className="PersonCard">
        <CardBody>
          <CardTitle>{person.name}</CardTitle>

          <div className="attribute-item">
            Birth Year:
            <span className="attribute">{person.birth_year}</span>
          </div>

          <div className="attribute-item">
            Gender:
            <span className="attribute">{person.gender}</span>
          </div>

          <div className="attribute-item">
            Home World:
            <span className="attribute">{person.homeworld}</span>
          </div>

          <div className="attribute-item">
            Species:
            <span className="attribute">{person.speciesString}</span>
          </div>
        </CardBody>
      </Card>
    </div>
  ));

  return (
    <div className="People container">
      <h1 className="text-center">People</h1>
      <SearchForm onSubmit={onSearchSubmit}/>
      {isFetching
        ? <Spinner/>
        : <div>
          <Pagination
            resource="people"
            length={peopleCount}
            currentPage={match.params.page_number}
            perPage="10"
            onPageChange={onPageChange}
            searchQuery={searchQuery}
          />
          <div className="row justify-content-center">
            {peopleCards.length ? peopleCards : <p className="text-muted text-center">No People Found</p>}
          </div>
          <Pagination
            resource="people"
            length={peopleCount}
            currentPage={match.params.page_number}
            perPage="10"
            onPageChange={onPageChange}
            searchQuery={searchQuery}
          />
        </div>}
    </div>
  );
};

People.propTypes = {
  people: PropTypes.array.isRequired,
  peopleCount: PropTypes.number.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  onPageChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string
};

export default withRouter(People);
