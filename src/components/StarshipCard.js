import React from 'react';
import {Col, Well, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const StarshipCard = ({starship, id}) => {
  return (
    <Col md={4}>
      <Col md={12}>
        <Well>
        <h3>{starship.name}</h3>
        <h5>Model: {starship.model}</h5>
        <h5>Manufacturer: {starship.manufacturer}</h5>
        <LinkContainer to={`starships/${id}`}>
          <Button bsStyle="success" block>View</Button>
        </LinkContainer>
        </Well>
      </Col>
    </Col>
  );
};

export default StarshipCard;