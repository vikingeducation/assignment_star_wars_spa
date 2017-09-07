import React from "react";

const ListPlanets = ({ planets }) => {
  return <h1>{planets.map(p => p.name)}</h1>;
};

export default ListPlanets;
