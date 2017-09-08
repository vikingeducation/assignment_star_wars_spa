import React from "react";
import { NavLink } from "react-router-dom";

const extractId = url => {
  url = url.slice(0, -1);
  return url.slice(url.lastIndexOf("/") + 1);
};

const Person = ({ name, gender, birth_year, hair_color, url }) => {
  return (
    <NavLink className="nav-link" exact to={`/people/${extractId(url)}`}>
      <li>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-3">
                <h4 className="card-title">
                  {name}
                </h4>
              </div>
              <div className="col-md-2">
                <p className="card-text">
                  <strong>Gender: </strong>
                  {gender}
                </p>
              </div>
              <div className="col-md-3">
                <p className="card-text">
                  <strong>Born: </strong>
                  {birth_year}
                </p>
              </div>
              <div className="col-md-4">
                <p className="card-text">
                  <strong>Hair Color (IMPORTANT!!!): </strong>
                  {hair_color}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </NavLink>
  );
};

export default ({ people }) => {
  console.log("people: ", people);
  return (
    <ul className="list-unstyled">
      {people.map(person => <Person key={person.name} {...person} />)}
    </ul>
  );
};
