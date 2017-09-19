import React from "react";

const Search = ({onChange}) => {
  return <input type="text" placeholder="Search" className="search-box" onChange={onChange} />;
};

export default Search;
