import React from "react";
import { Link } from "react-router-dom";

const PersonCard = ({ person }) => {
  return (
    <Link to={`/people/${person.name}`}>
      <div className="card my-4 col-sm-6">
        <div className="card-block">
          <h4>{person.name}</h4>
        </div>
      </div>
    </Link>
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
  let next = Number(page) + 1;
  let previous = Number(page) - 1;
  return (
    <div>
      <h1>People</h1>
      <div className="row">
        {people.previous
          ? <Link className="padding" to={`/people?page=${previous}`}>
              {" "}Previous {" "}
            </Link>
          : null}

        {people.next
          ? <Link to={`/people?page=${next}`}> {" "}Next </Link>
          : null}
      </div>
      <div className="card-deck">
        <div className="row">
          {peopleList}

        </div>
      </div>
    </div>
  );
};

export default People;
