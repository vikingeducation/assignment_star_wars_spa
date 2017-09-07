import React from "react";
import Loading from "./Loading";

const ShowVehicle = ({ vehicle }) => {
  return (
    <div className="info">
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
        <strong>Skin Color:</strong> {person.skin_color}
        <br />
        <strong>Eye Color:</strong> {person.eye_color}
        <br />
        <strong>Gender:</strong> {person.gender}
        <br />
      </div>
    </div>
  );
};

export default ShowVehicle;