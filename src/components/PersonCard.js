import React from 'react';
import {Col, Well, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const PersonCard = ({person, id}) => {
  return (
    <Col md={4}>
      <Col md={12}>
        <Well>
        <h3>{person.name}</h3>
        <h5>Height: {person.height}</h5>
        <h5>Mass: {person.mass}</h5>
        <h6>Birth Year: {person.birth_year}</h6>
        <LinkContainer to={`people/${id}`}>
          <Button bsStyle="success" block>View</Button>
        </LinkContainer>
        </Well>
      </Col>
    </Col>
  );
};

export default PersonCard;