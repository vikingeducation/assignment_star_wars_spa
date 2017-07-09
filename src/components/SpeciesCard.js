import React from "react";
import { Col, Well, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const SpeciesCard = ({ species, id }) => {
  return (
    <Col md={4}>
      <Col md={12}>
        <Well>
          <h3>{species.name}</h3>
          <h5>Classification: {species.classification}</h5>
          <h5>Designation: {species.designation}</h5>
          <LinkContainer to={`species/${id}`}>
            <Button bsStyle="success" block>View</Button>
          </LinkContainer>
        </Well>
      </Col>
    </Col>
  );
};

export default SpeciesCard;
