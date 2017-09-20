import React from "react";

const Film = ({ film }) => {
  return (
    <div className="card my-3" style={{ maxWidth: "720px" }}>
      <div className="card-header">
        Title: {film.title}
      </div>
      <div className="card-block">
        <p><strong>Director: </strong>{film.director}</p>
        <p><strong>Episode: </strong>{film.episode_id}</p>
        <p>{film.opening_crawl}</p>
      </div>
    </div>
  );
};

export default Film;
