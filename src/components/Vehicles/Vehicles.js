import React from "react";
import { Link } from "react-router-dom";

const Vehicles = ({ vehiclesData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!vehiclesData) {
    return <p>Error</p>;
  } else if (vehiclesData.results) {
    //map styling
    return vehiclesData.results.map((vehicle, index) => {
      return (
        <div className="vehicle card" key={vehicle.name}>
          <Link to={vehicle.url.substring(20)}>
            <h3>{vehicle.name}</h3>
          </Link>
        </div>
      );
    });
  } else {
    return <p>Error</p>;
  }
};

export default Vehicles;
