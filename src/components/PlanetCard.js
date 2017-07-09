import React from 'react';
import {Col, Well, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const PlanetCard = ({planet, id}) => {
  return (
    <Col md={4}>
      <Col md={12}>
        <Well>
        <h3>{planet.name}</h3>
        <h5>Climate: {planet.climate}</h5>
        <h5>Population: {planet.population}</h5>
        <LinkContainer to={`planets/${id}`}>
          <Button bsStyle="success" block>View</Button>
        </LinkContainer>
        </Well>
      </Col>
    </Col>
  );
};

export default PlanetCard;