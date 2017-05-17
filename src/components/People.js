import React from "react";
import Link from "react-router-dom";

const PersonCard = ({ person }) => {
  return (
    <div className="card my-3" style={{ maxWidth: "320px" }}>
      <div className="card-block">
        {person.name}
      </div>
    </div>
  );
};
const People = ({ people, page }) => {
  if (!people.results) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  let peopleList = people.results.map(person => (
    <PersonCard person={person} key={person.name} />
  ));
  return (
    <div className="card-deck">
      {peopleList}
      {people.next ? <Link to={`/people`}>Next</Link> : null}
      {people.previous ? <Link to={`/people`}>Previous</Link> : null}
    </div>
  );
};

export default People;
