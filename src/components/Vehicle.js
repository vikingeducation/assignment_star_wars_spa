import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const Vehicle = ({ vehicle, isFetching }) => {
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
      <h1>Vehicle: {vehicle.name}</h1>
      <Row>
        <Col md={12}>
          <h3>Model: {vehicle.model}</h3>
          <h3>Manufacturer: {vehicle.manufacturer}</h3>
          <h3>Cost (in Credits): {vehicle.cost_in_credits}</h3>
        </Col>
      </Row>
    </Grid>
  );
};

export default Vehicle;
