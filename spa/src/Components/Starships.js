import React from "react";
import { Link } from "react-router-dom";

const Starships = ({ starships, onClick }) => {
  const list = starships.starships.map(ship => {
    const str = ship.url.split("/");
    const id = str[str.length - 2];
    return (
      <div className="well" key={id} id={id}>
        <h3>{ship.name}</h3>
        <p>Name: {ship.name}</p>
        <p>Model: {ship.model}</p>
        <p>Manufacturer: {ship.manufacturer}</p>
        <p>Cost in Credits: {ship.cost_in_credits}</p>
        <p>hyperdrive_rating: {ship.hyperdrive_rating}</p>
        <Link to={`/starships/${id}`} onClick={onClick} id={id}>
          <p>CLICK HERE FOR MORE INFO</p>
        </Link>
        <br />
        <hr />
      </div>
    );
  });
  return <div>{list}</div>;
};

export default Starships;
