import React from "react";
import { Link } from "react-router-dom";

const ListPeople = ({ people }) => {
  return (
    <div>
      {people.map(p => (
        <Link to={`/${p.url.match(/people\/(\d+)/)[0]}`}>
          <h1>{p.name}</h1>
        </Link>
      ))}
    </div>
  );
};

export default ListPeople;
