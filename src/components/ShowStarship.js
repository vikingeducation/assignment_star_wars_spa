import React from "react";
import Loading from "./Loading";

const ShowStarship = ({ resource }) => {
  const starship = resource;
  return (
    <div className="info">
      <h1>{starship.name}</h1>
      <hr />
      <div>
        <h2>Specs</h2>
        <strong>Model:</strong> {starship.model}
        <br />
        <strong>Manufacturer:</strong> {starship.manufacturer}
        <br />
        <strong>Cost:</strong> {starship.cost_in_credits} credits
        <br />
        <strong>Passengers:</strong> {starship.passengers}
        <br />
        <strong>Cargo Capacity:</strong> {starship.cargo_capacity}
        <br />
        <strong>Crew Members:</strong> {starship.crew}
        <br />
        <strong>Length:</strong> {starship.length}
        <br />
        <strong>Max Atmosphering Speed:</strong>{" "}
        {starship.max_atmosphering_speed}
        <br />
        <strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}
        <br />
      </div>
    </div>
  );
};

export default ShowStarship;
