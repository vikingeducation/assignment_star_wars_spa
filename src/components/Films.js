import React from 'react';
import FilmCard from './FilmCard';
import {Grid, Row} from 'react-bootstrap';

const Films = ({films, isFetching}) => {
  const filmCards = films.map((film, index) => (
    <FilmCard film={film} key={film.episode_id} id={index +1}/>
  ));
  return (
    <Grid>
      <h1>Films</h1>
      <Row>
        {filmCards}
      </Row>
    </Grid>
  )
};

export default Films;