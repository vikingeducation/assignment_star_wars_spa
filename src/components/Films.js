import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardBody } from 'reactstrap';
import Spinner from './elements/Spinner';
import SearchForm from './elements/SearchForm';

const Films = ({ films, isFetching, onSearchSubmit }) => {
  const filmCards = films.map(film => (
    <div className="col-md-6" key={film.episode_id}>
      <Card className="FilmCard">
        <CardBody>
          <CardTitle>{film.title}</CardTitle>
          <div className="attribute-item">Episode Number: <span className="attribute">{film.episode_id}</span></div>
          <div className="attribute-item">Director: <span className="attribute">{film.director}</span></div>
          <div className="attribute-item">Producer: <span className="attribute">{film.producer}</span></div>
          <div className="attribute-item">Release Date: <span className="attribute">{film.release_date}</span></div>
          <div className="attribute-item">Opening Crawl:</div>
          <p>{film.opening_crawl}</p>
        </CardBody>
      </Card>
    </div>
  ));

  return (
    <div className="Films container">
      <h1 className="text-center">FILMS</h1>
      <SearchForm onSubmit={onSearchSubmit}/>
      {isFetching
        ? <Spinner/>
        : <div className="row justify-content-center">
          {filmCards.length ? filmCards : <p className="text-muted text-center">No Films Found</p>}
        </div>}
    </div>
  );
};

Films.propTypes = {
  films: PropTypes.array.isRequired,
  isFetching: PropTypes.bool,
  onSearchSubmit: PropTypes.func.isRequired
};

export default Films;
