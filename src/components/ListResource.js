import React from "react";
import { Link } from "react-router-dom";

const ListResource = ({ resource, resourceName, numPages, onClick }) => {
  return (
    <div>
      <ul className="pagination">
        {[...Array(+numPages)].map((page, i) => (
          <li onClick={onClick(i + 1)}>{i + 1}</li>
        ))}
      </ul>
      {resource.map(r => (
        <Link
          to={`/${resourceName}/${r.url.match(/swapi.co\/api\/\w+\/(\d+)/)[1]}`}
        >
          <h1>{r.name}</h1>
        </Link>
      ))}
    </div>
  );
};

export default ListResource;
