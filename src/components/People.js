import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const PersonCard = ({ person }) => {
  return (
    <div className="card my-4 col-sm-6">
      <Link to={`/people/${person.name}`}>

        <div className="card-block">
          <h4>{person.name}</h4>
        </div>
      </Link>
    </div>
  );
};
const People = ({ people, searchResults, page, onSubmit, searchText }) => {
  if (!people.results) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  let peopleRender = searchResults.results ? searchResults : people;
  let peopleList = peopleRender.results.map(person => (
    <PersonCard person={person} key={person.name} />
  ));
  let next = Number(page) + 1;
  let previous = Number(page) - 1;
  return (
    <div>
      <h1>People</h1>
      <Search onSubmit={onSubmit} />
      <div className="row">
        {peopleRender.previous && searchText
          ? <Link
              className="padding"
              to={`/people?page=${previous}&searchText=${searchText}`}
            >
              Previous{" "}
            </Link>
          : null}
        {peopleRender.previous && !searchText
          ? <Link className="padding" to={`/people?page=${previous}`}>
              Previous{" "}
            </Link>
          : null}

        {peopleRender.next && searchText
          ? <Link to={`/people?page=${next}&searchText=${searchText}`}>
              Next
            </Link>
          : null}

        {peopleRender.next && !searchText
          ? <Link to={`/people?page=${next}`}>
              Next
            </Link>
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
