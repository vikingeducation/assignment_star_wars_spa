import React from "react";
import { Link } from "react-router-dom";

const Planets = ({ planetsData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!planetsData) {
    return <p>Error</p>;
  } else if (planetsData.results) {
    //map styling
    return planetsData.results.map(planet => {
      return (
        <div className="planet card" key={planet.name}>
          <Link to={planet.url.substring(20)}>
            <h3>{planet.name}</h3>
          </Link>
        </div>
      );
    });
  } else {
    return <p>Error</p>;
  }
};

export default Planets;
