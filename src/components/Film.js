import React from "react";

const Film = ({ film }) => {
  return (
    <div className="Film">
      <h1>Title: {film.title}</h1>
    </div>
  );
};

export default Film;
