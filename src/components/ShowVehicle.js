import React from "react";
import Loading from "./Loading";

const ShowVehicle = ({ resource }) => {
  const vehicle = resource;
  return (
    <div className="info">
      <Loading condition={Object.keys(resource).length} />
      <h1>{vehicle.name}</h1>
      <hr />
      <div>
        <h2>Appearance</h2>
        <strong>Model:</strong> {vehicle.model}
        <br />
        <strong>Manufacturer:</strong> {vehicle.manufacturer}
        <br />
        <strong>Cost:</strong> {vehicle.cost_in_credits} credits
        <br />
        <strong>Passengers:</strong> {vehicle.passengers}
        <br />
        <strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}
        <br />
        <strong>Crew Members:</strong> {vehicle.crew}
        <br />
        <strong>Length:</strong> {vehicle.length}
        <br />
        <strong>Max Atmosphering Speed:</strong>{" "}
        {vehicle.max_atmosphering_speed}
        <br />
      </div>
    </div>
  );
};

export default ShowVehicle;
