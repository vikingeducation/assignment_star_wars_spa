import React from "react";
import { Panel } from "react-bootstrap";

const People = {
  list: info => (
    <Panel header={<h3>{info.name}</h3>}>
      <p>
        Born in {info.birth_year}, {info.name} has appeared in{" "}
        {info.films.length} films.
      </p>
    </Panel>
  ),
  single: info => (
    <div>
      <h1>{info.name}</h1>
      <p>Height: {info.height}</p>
      <p>Mass: {info.mass}</p>
      <p>Hair Color: {info.hair_color}</p>
      <p>Skin Color: {info.skin_color}</p>
      <p>Eye Color: {info.eye_color}</p>
      <p>Birth Year: {info.birth_year}</p>
      <p>Gender: {info.gender}</p>
    </div>
  )
};

export default People;
