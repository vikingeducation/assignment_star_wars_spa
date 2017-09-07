import React from "react";

const Starships = ({ starships }) => {
  const list = starships.starships.map(ship => {
    const str = ship.url.split("/");
    const id = str[str.length - 2];
    return (
      // <a href={`/ship/${id}`} style={{ "text-decoration": "none" }}>
      <div key={id}>
        <h3>STARSHIP</h3>
        <p>Name: {ship.name}</p>
        <p>Model: {ship.model}</p>
        <p>Manufacturer: {ship.manufacturer}</p>
        <p>Cost in Credits: {ship.cost_in_credits}</p>
        <p>hyperdrive_rating: {ship.hyperdrive_rating}</p>
        <br />
        <hr />
      </div>

      // </a>
    );
  });
  return <div>{list}</div>;
};

export default Starships;

//"https://swapi.co/api/starships/15/"
