import React from 'react';
import FilmCard from './FilmCard';
import {Grid, Row, Col} from 'react-bootstrap';

const Films = ({films, isFetching}) => {
  if (isFetching) {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <span className="img-loader" />
          </Col>
        </Row>
      </Grid>
    );
  }

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