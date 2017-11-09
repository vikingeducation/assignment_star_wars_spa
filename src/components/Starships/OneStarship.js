import React from "react";
import { Link } from "react-router-dom";

const starshipLinks = data => {
  return data.map((single, index) => {
    return (
      <span key={single}>
        <Link to={single.substring(20)}>
          <button className="btn-sm btn">{index + 1}</button>
        </Link>{" "}
      </span>
    );
  });
};

const OneStarship = ({ starshipData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!starshipData) {
    return <p>Error</p>;
  } else if (starshipData.films) {
    return (
      <div className="starship card" key={starshipData.name}>
        <h3>{starshipData.name}</h3>
        <p>MGLT: {starshipData.mglt}</p>
        <p>Cargo Capacity: {starshipData.cargo_capacity}</p>
        <p>Consumables: {starshipData.consumables}</p>
        <p>Cost: {starshipData.cost_in_credits}credits</p>
        <p>Crew: {starshipData.crew}</p>
        <p>Hyperdrive Rating: {starshipData.hyperdrive_rating}</p>
        <p>Length: {starshipData.length}</p>
        <p>Manufacturer: {starshipData.manufacturer}</p>
        <p>Max Atmosphering Speed: {starshipData.max_atmosphering_speed}</p>
        <p>Model: {starshipData.model}</p>
        {starshipData.pilots ? (
          <p>Pilots: {starshipLinks(starshipData.pilots)}</p>
        ) : (
          <div />
        )}
        <p>Passenagers: {starshipData.passengers}</p>
        <p>Starship Class: {starshipData.starship_class}</p>
        <p>Films: {starshipLinks(starshipData.films)}</p>
      </div>
    );
  } else {
    return <p>Error</p>;
  }
};

export default OneStarship;
