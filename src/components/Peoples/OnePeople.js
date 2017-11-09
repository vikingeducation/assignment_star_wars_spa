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
  } else if (peopleData.films) {
    return (
      <div className="people card" key={peopleData.name}>
        <h3>{peopleData.name}</h3>
        <p>Born: {peopleData.birth_year}</p>
        {peopleData.species ? (
          <p>Species: {personLinks(peopleData.species)}</p>
        ) : (
          <div />
        )}
        <p>Gender: {peopleData.gender}</p>
        <p>Hair: {peopleData.hair_color}</p>
        <p>Eye: {peopleData.eye_color}</p>
        <p>Skin Color: {peopleData.skin_color}</p>
        <p>Height: {peopleData.height}cm</p>
        <p>Mass: {peopleData.mass}</p>
        {peopleData.homeworld ? (
          <p>
            Homeworld:{" "}
            <Link to={peopleData.homeworld.substring(20)}>
              <button className="btn-sm btn">1</button>
            </Link>
          </p>
        ) : (
          <div />
        )}
        {peopleData.films ? (
          <p>Films: {personLinks(peopleData.films)}</p>
        ) : (
          <div />
        )}
        {peopleData.starships ? (
          <p>Starships: {personLinks(peopleData.starships)}</p>
        ) : (
          <div />
        )}
        {peopleData.vehicles ? (
          <p>Vehicles: {personLinks(peopleData.vehicles)}</p>
        ) : (
          <div />
        )}
      </div>
    );
  } else {
    return <p>Error</p>;
  }
};

export default Peoples;
