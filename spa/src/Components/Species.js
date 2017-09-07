import React from "react";
import { Link } from "react-router-dom";

const Species = ({ species, onClick }) => {
  const list = species.species.map(spec => {
    const str = spec.url.split("/");
    const id = str[str.length - 2];
    return (
      <div key={id} id={id}>
        <h3>Species</h3>
        <p>
          Name: {spec.name}
        </p>
        <p>
          Model: {spec.model}
        </p>
        <p>
          Manufacturer: {spec.manufacturer}
        </p>
        <p>
          Cost in Credits: {spec.cost_in_credits}
        </p>
        <p>
          hyperdrive_rating: {spec.hyperdrive_rating}
        </p>
        <Link to={`/species/${id}`} onClick={onClick} id={id}>
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

export default Species;
