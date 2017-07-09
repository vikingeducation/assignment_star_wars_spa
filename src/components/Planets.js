import React from "react";
import PlanetCard from "./PlanetCard";
import { Grid, Row } from "react-bootstrap";
import SearchContainer from "../containers/SearchContainer";
import PaginationContainer from "../containers/PaginationContainer";

const getResourceID = url => {
  let urlParts = url.split("/");
  let id = urlParts[urlParts.length - 2];
  return id;
};

const Planets = ({ planets, isFetching, page }) => {
  const planetCards = planets.map((planet, index) =>
    <PlanetCard planet={planet} key={index} id={getResourceID(planet.url)} />
  );
  return (
    <Grid>
      <h1>Planets</h1>
      <SearchContainer type="planets" />
      <Row>
        {isFetching ? <span className="img-loader" /> : planetCards}
      </Row>
      <PaginationContainer type="planets" page={page} />
    </Grid>
  );
};

export default Planets;
