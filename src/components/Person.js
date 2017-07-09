import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const Person = ({person, isFetching}) => {
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
      <h1>Person: {person.name}</h1>
      <Row>
        <Col md={12}>
          <h3>Height: {person.height}</h3>
          <h3>Mass: {person.mass}</h3>
          <h3>Hair Color: {person.hair_color}</h3>
          <h3>Skin Color: {person.skin_color}</h3>
          <h3>Eye Color: {person.eye_color}</h3>
          <h3>Birth Year: {person.birth_year}</h3>
        </Col>
      </Row>
    </Grid>
  );
};

export default Person;
