import React from "react";
import { Panel } from "react-bootstrap";

const Planets = {
  list: info => (
    <Panel key={info.name} header={<h3>{info.name}</h3>}>
      <p>
        A {info.climate} planet with a population of {info.population} that has
        appeared in {info.films.length} films.
      </p>
    </Panel>
  )
};

export default Planets;
