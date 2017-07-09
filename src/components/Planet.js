import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const Planet = ({planet, isFetching}) => {
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
      <h1>Planet: {planet.name}</h1>
      <Row>
        <Col md={12}>
          <h3>Diameter: {planet.diameter}</h3>
          <h3>Gravity: {planet.gravity}</h3>
          <h3>Terrain: {planet.terrain}</h3>
        </Col>
      </Row>
    </Grid>
  );
};

export default Planet;
