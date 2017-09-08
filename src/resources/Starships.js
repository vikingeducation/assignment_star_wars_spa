import React from "react";
import { Panel } from "react-bootstrap";

const Starships = {
  list: info => (
    <Panel header={<h3>{info.name}</h3>}>
      <p>
        Made by the {info.manufacturer}, {info.name} has appeared in{" "}
        {info.films.length} films.
      </p>
    </Panel>
  ),
  single: info => (
    <div>
      <h1>{info.name}</h1>
      <p>Model: {info.model}</p>
      <p>Manufacturer: {info.manufacturer}</p>
      <p>Cost: {info.cost_in_credits}</p>
      <p>Length: {info.length}</p>
      <p>Max Speed: {info.max_astmosphering_speed}</p>
      <p>Crew: {info.crew}</p>
      <p>Passengers: {info.passengers}</p>
      <p>Cargo Capacity: {info.cargo_capacity}</p>
      <p>Consumables: {info.consumables}</p>
      <p>Class: {info.starship_class}</p>
      <p>Hyperdrive: {info.hyperdrive_rating}</p>
    </div>
  )
};

export default Starships;
