import React from "react";
import { Link } from "react-router-dom";

const Species = ({ speciesData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!speciesData) {
    return <p>Error</p>;
  } else if (speciesData.results) {
    //map styling
    return speciesData.results.map(specie => {
      return (
        <div className="people card" key={specie.name}>
          <Link to={specie.url.substring(20)}>
            <h3>{specie.name}</h3>
          </Link>
        </div>
      );
    });
  } else {
    return <p>Error</p>;
  }
};

export default Species;
