import React from "react";
import { Link } from "react-router-dom";

const Species = ({ species, onClick }) => {
  const list = species.species.map(spec => {
    const str = spec.url.split("/");
    const id = str[str.length - 2];
    return (
      <div className="well" key={id} id={id}>
        <h3>{spec.name}</h3>
        <p>Name: {spec.name}</p>
        <p>Classification: {spec.classification}</p>
        <p>Average Lifespan: {spec.average_lifespan}</p>
        <p>Language: {spec.language}</p>
        <Link to={`/species/${id}`} onClick={onClick} id={id}>
          <p>CLICK HERE FOR MORE INFO</p>
        </Link>
        <br />
        <hr />
      </div>
    );
  });
  return <div>{list}</div>;
};

export default Species;
