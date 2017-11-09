import React from "react";
import { Link } from "react-router-dom";

const specieLinks = data => {
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

const Specie = ({ specieData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!specieData) {
    return <p>Error</p>;
  } else if (specieData.films) {
    return (
      <div className="specie card" key={specieData.name}>
        <h3>{specieData.name}</h3>
        <p>Height ≈ {specieData.average_height}cm</p>
        <p>Lifespan ≈ {specieData.average_lifespan}</p>
        <p>Classification: {specieData.classification}</p>
        <p>Designation: {specieData.designation}</p>
        <p>Eye Colors: {specieData.eye_colors}</p>
        <p>Hair Colors: {specieData.hair_colors}</p>
        <p>Skin Colors: {specieData.skin_colors}</p>
        <p>
          Homeworld:{" "}
          <Link to={specieData.homeworld.substring(20)}>
            <button className="btn-sm btn">1</button>
          </Link>
        </p>
        <p>Languages: {specieData.language}</p>
        <p>Films: {specieLinks(specieData.films)}</p>
        {specieData.people ? (
          <p>People: {specieLinks(specieData.people)}</p>
        ) : (
          <div />
        )}
      </div>
    );
  } else {
    return <p>Error</p>;
  }
};

export default Specie;
