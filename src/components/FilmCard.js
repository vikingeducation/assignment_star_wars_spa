import React from 'react';
import {Col, Well, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const FilmCard = ({film, id}) => {
  return (
    <Col md={4}>
      <Col md={12}>
        <Well>
        <h3>{film.title}</h3>
        <h5>Director: {film.director}</h5>
        <h5>Producer: {film.producer}</h5>
        <h6>Released On: {film.release_date}</h6>
        <LinkContainer to={`films/${id}`}>
          <Button bsStyle="success" block>View</Button>
        </LinkContainer>
        </Well>
      </Col>
    </Col>
  );
};

export default FilmCard;