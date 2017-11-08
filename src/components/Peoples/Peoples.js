import React from "react";
import { Link } from "react-router-dom";

const Peoples = ({ peopleData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!peopleData) {
    return <p>Error</p>;
  } else if (peopleData.results) {
    //map styling
    return peopleData.results.map(person => {
      return (
        <div className="people card" key={person.name}>
          <Link to={person.url.substring(20)}>
            <h3>{person.name}</h3>
          </Link>
        </div>
      );
    });
  } else {
    return <p>Error</p>;
  }
};

export default Peoples;
