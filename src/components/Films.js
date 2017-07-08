import React from 'react';
import FilmCard from './FilmCard';
import {Grid, Row, Col} from 'react-bootstrap';

const Films = ({films, isFetching}) => {
  const filmCards = films.map(film => (
    <FilmCard film={film} key={film.episode_id}/>
  ));
  return (
    <Row>
      <Col md={8}>
      Films
      {filmCards}
      </Col>
    </Row>
  )
};

export default Films;