import React from 'react';
import FilmCard from './FilmCard';
import {Grid, Row} from 'react-bootstrap';
import SearchContainer from '../containers/SearchContainer';

const getResourceID = url => {
  let urlParts = url.split('/');
  let id = urlParts[urlParts.length-2];
  return id;
};

const Films = ({films, isFetching}) => {
  const filmCards = films.map((film, index) => (
    <FilmCard film={film} key={film.episode_id} id={getResourceID(film.url)}/>
  ));
  return (
    <Grid>
      <h1>Films</h1>
      <SearchContainer type="films"/>
      <Row>
        {isFetching ? 
        <span className="img-loader" /> : 
        filmCards}
      </Row>
    </Grid>
  )
};

export default Films;