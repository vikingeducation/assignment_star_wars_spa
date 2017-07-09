import React from "react";
import VehicleCard from "./VehicleCard";
import { Grid, Row } from "react-bootstrap";
import SearchContainer from "../containers/SearchContainer";
import PaginationContainer from "../containers/PaginationContainer";

const getResourceID = url => {
  let urlParts = url.split("/");
  let id = urlParts[urlParts.length - 2];
  return id;
};

const Vehicles = ({ vehicles, isFetching, page }) => {
  const vehicleCards = vehicles.map((vehicle, index) =>
    <VehicleCard
      vehicle={vehicle}
      key={index}
      id={getResourceID(vehicle.url)}
    />
  );
  return (
    <Grid>
      <h1>Vehicles</h1>
      <SearchContainer type="vehicles" />
      <Row>
        {isFetching ? <span className="img-loader" /> : vehicleCards}
      </Row>
      <PaginationContainer type="vehicles" page={page} />
    </Grid>
  );
};

export default Vehicles;
