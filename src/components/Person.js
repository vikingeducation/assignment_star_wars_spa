import React from "react";

const Person = ({ person }) => {
  console.log(person);
  return (
    <div className="card my-3" style={{ maxWidth: "720px" }}>
      <div className="card-header">
        {person.name}
      </div>
      <div className="card-block">
        <p><strong>Height: </strong>{person.height} cm</p>
        <p><strong>Weight: </strong>{person.mass} kg</p>
        <p><strong>Hair Color: </strong>{person.hair_color}</p>
        <p><strong>Eye Color: </strong>{person.eye_color}</p>
      </div>
    </div>
  );
};

export default Person;
