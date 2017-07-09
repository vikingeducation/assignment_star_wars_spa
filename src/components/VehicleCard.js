import React from 'react';
import {Col, Well, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const VehicleCard = ({vehicle, id}) => {
  return (
    <Col md={4}>
      <Col md={12}>
        <Well>
        <h3>{vehicle.name}</h3>
        <h5>Model: {vehicle.model}</h5>
        <h5>Manufacturer: {vehicle.manufacturer}</h5>
        <LinkContainer to={`vehicles/${id}`}>
          <Button bsStyle="success" block>View</Button>
        </LinkContainer>
        </Well>
      </Col>
    </Col>
  );
};

export default VehicleCard;