import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const Starship = ({starship, isFetching}) => {
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
      <h1>Starship: {starship.name}</h1>
      <Row>
        <Col md={12}>
          <h3>Model: {starship.model}</h3>
          <h3>Manufacturer: {starship.manufacturer}</h3>
          <h3>Cost (in Credits): {starship.cost_in_credits}</h3>
        </Col>
      </Row>
    </Grid>
  );
};

export default Starship;
