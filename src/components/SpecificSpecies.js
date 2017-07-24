import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const SpecificSpecies = ({ species, isFetching }) => {
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
      <h1>Species: {species.name}</h1>
      <Row>
        <Col md={12}>
          <h3>Classification: {species.classification}</h3>
          <h3>Designation: {species.designation}</h3>
          <h3>Skin Colors: {species.skin_colors}</h3>
        </Col>
      </Row>
    </Grid>
  );
};

export default SpecificSpecies;
