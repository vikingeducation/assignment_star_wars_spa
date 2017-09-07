import React from "react";
import { Link } from "react-router-dom";

const Starships = ({ starships, onClick }) => {
  const list = starships.starships.map(ship => {
    const str = ship.url.split("/");
    const id = str[str.length - 2];
    return (
      <div key={id} id={id}>
        <h3>STARSHIP</h3>
        <p>
          Name: {ship.name}
        </p>
        <p>
          Model: {ship.model}
        </p>
        <p>
          Manufacturer: {ship.manufacturer}
        </p>
        <p>
          Cost in Credits: {ship.cost_in_credits}
        </p>
        <p>
          hyperdrive_rating: {ship.hyperdrive_rating}
        </p>
        <Link to={`/starships/${id}`} onClick={onClick} id={id}>
          CLICK HERE
        </Link>
        <br />
        <hr />
      </div>
    );
  });
  return (
    <div>
      {list}
    </div>
  );
};

export default Starships;
