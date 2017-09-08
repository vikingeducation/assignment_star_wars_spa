import React from "react";
import { Panel } from "react-bootstrap";

const Planets = {
  list: info => (
    <Panel header={<h3>{info.name}</h3>}>
      <p>
        A {info.climate} planet with a population of {info.population} that has
        appeared in {info.films.length} films.
      </p>
    </Panel>
  ),
  single: info => (
    <div>
      <h3>{info.name}</h3>
      <p>Rotation Period: {info.rotation_period}</p>
      <p>Orbital Period: {info.orbital_period}</p>
      <p>Diameter: {info.diameter}</p>
      <p>Climate: {info.climate}</p>
      <p>Gravity: {info.gravity}</p>
      <p>Terrain: {info.terrain}</p>
      <p>Surface Water: {info.surface_water}</p>
      <p>Population: {info.population}</p>
    </div>
  )
};

export default Planets;
