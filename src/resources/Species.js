import React from "react";
import { Panel } from "react-bootstrap";

const Species = {
  list: info => (
    <Panel header={<h3>{info.name}</h3>}>
      <p>
        Speaking {info.language}, {info.name} have appeared in{" "}
        {info.films.length} films.
      </p>
    </Panel>
  ),
  single: info => (
    <div>
      <h1>{info.name}</h1>
      <p>Classification: {info.classification}</p>
      <p>Designation: {info.designation}</p>
      <p>Average Height: {info.average_height}</p>
      <p>Average Lifespan: {info.average_lifespan}</p>
      <p>Skin Colors: {info.skin_colors}</p>
      <p>Hair Colors: {info.hair_colors}</p>
      <p>Eye Colors: {info.eye_colors}</p>
      <p>Language: {info.language}</p>
    </div>
  )
};

export default Species;
