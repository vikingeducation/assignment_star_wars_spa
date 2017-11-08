import React from "react";
import { Link } from "react-router-dom";

const personLinks = data => {
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

const Peoples = ({ peopleData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!peopleData) {
    return <p>Error</p>;
  } else if (peopleData.species) {
    return (
      <div className="people card" key={peopleData.name}>
        <h3>{peopleData.name}</h3>
        <p>Born: {peopleData.birth_year}</p>
        <p>Species: {personLinks(peopleData.species)}</p>
        <p>Gender: {peopleData.gender}</p>
        <p>Hair: {peopleData.hair_color}</p>
        <p>Eye: {peopleData.eye_color}</p>
        <p>Skin Color: {peopleData.skin_color}</p>
        <p>Height: {peopleData.height}cm</p>
        <p>Mass: {peopleData.mass}</p>
        <p>
          Homeworld:{" "}
          <Link to={peopleData.homeworld.substring(20)}>
            <button className="btn-sm btn">1</button>
          </Link>
        </p>
        <p>Films: {personLinks(peopleData.films)}</p>
        <p>Starships: {personLinks(peopleData.starships)}</p>
        <p>Vehicles: {personLinks(peopleData.vehicles)}</p>
      </div>
    );
  } else {
    return <p>Error</p>;
  }
};

export default Peoples;
