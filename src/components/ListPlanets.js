import React from "react";
import { Link } from "react-router-dom";

const ListPlanets = ({ planets }) => {
  return (
    <div>
      {planets.map(pl => (
        <Link to={`/${pl.url.match(/planets\/(\d+)/)[0]}`}>
          <h1>{pl.name}</h1>
        </Link>
      ))}
    </div>
  );
};

export default ListPlanets;
