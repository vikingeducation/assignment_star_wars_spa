import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
const Film = ({film, isFetching}) => {
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
  
  return (
    <Grid>
      <h1>Film: {film.title}</h1>
      <Row>
        <Col md={12}>
          <h3>Director: {film.director}</h3>
          <h3>Producer: {film.producer}</h3>
          <br />
          <h4>Released On: {film.release_date}</h4>
          <br />
          <h3>
            <strong>Opening Crawl: </strong>
            {film.opening_crawl}
          </h3>
        </Col>
      </Row>
    </Grid>
  );
};

export default Film;
