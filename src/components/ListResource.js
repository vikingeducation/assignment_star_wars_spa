import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const ListResource = ({ resource, resourceName, numPages, onClick }) => {
  return (
    <div>
      <ul className="pagination">
        {[...Array(+numPages)].map((page, i) => (
          <li onClick={onClick(i + 1)}>{i + 1}</li>
        ))}
      </ul>
      <Loading condition={resource.length} />
      <ul className="resourceList">
        {resource.map(r => (
          <Link
            to={`/${resourceName}/${r.url.match(
              /swapi.co\/api\/\w+\/(\d+)/
            )[1]}`}
          >
            <li>{resourceName === "films" ? r.title : r.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ListResource;
