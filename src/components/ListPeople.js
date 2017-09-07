import React from "react";

const ListPeople = ({ people }) => {
  return <h1>{people.map(p => p.name)}</h1>;
};

export default ListPeople;
