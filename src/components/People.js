import React from "react";

const PersonCard = ({ person }) => {
  return (
    <div className="card my-3" style={{ maxWidth: "320px" }}>
      <div className="card-block">
        {person.name}
      </div>
    </div>
  );
};
const People = ({ people }) => {
  let peopleList = people.results.map(person => (
    <PersonCard person={person} key={person.name} />
  ));
  return (
    <div className="card-deck">
      {peopleList}
    </div>
  );
};

export default People;
