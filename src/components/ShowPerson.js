import React from "react";
import Loading from "./Loading";

const ShowPerson = ({ resource }) => {
  const person = resource;
  return (
    <div className="info">
      <h1>{person.name}</h1>
      <hr />
      <div>
        <h2>Appearance</h2>
        <strong>Height:</strong> {person.height}
        <br />
        <strong>Mass:</strong> {person.mass}
        <br />
        <strong>Hair Color:</strong> {person.hair_color}
        <br />
        <strong>Skin Color:</strong> {person.skin_color}
        <br />
        <strong>Eye Color:</strong> {person.eye_color}
        <br />
        <strong>Gender:</strong> {person.gender}
        <br />
      </div>
    </div>
  );
};

export default ShowPerson;
