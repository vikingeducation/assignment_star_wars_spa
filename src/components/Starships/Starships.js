import React from "react";
import { Link } from "react-router-dom";

const Starships = ({ starshipsData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!starshipsData) {
    return <p>Error</p>;
  } else if (starshipsData.results) {
    //map styling
    return starshipsData.results.map(starship => {
      return (
        <div className="people card" key={starship.name}>
          <Link to={starship.url.substring(20)}>
            <h3>{starship.name}</h3>
          </Link>
        </div>
      );
    });
  } else {
    return <p>Error</p>;
  }
};

export default Starships;
