import React from "react";
import { Link } from "react-router-dom";

const ListPeople = ({ people, numPages, onClick }) => {

  return (
    <div>
      {people.map(p => (
        <Link to={`/${p.url.match(/people\/(\d+)/)[0]}`}>
          <h1>{p.name}</h1>
        </Link>
      ))}
      <ul>
      	{[...Array(+numPages)].map((page, i) => <li onClick={onClick(i + 1)}>{i + 1}</li>)}
      </ul>
    </div>
  );
};

export default ListPeople;
