import React from "react";
import Loading from "./Loading";

const ShowFilm = ({ resource }) => {
  const film = resource;
  return (
    <div className="info">
      <Loading condition={Object.keys(resource).length} />
      <h1>{film.title}</h1>
      <h3>Episode {film.episode_id}</h3>
      <hr />
      <div>
        <p>{film.opening_crawl}</p>
        <br />
        <h2>Details</h2>
        <strong>Director:</strong> {film.director}
        <br />
        <strong>Producer:</strong> {film.producer}
        <br />
        <strong>Release Date:</strong> {film.release_date}
        <br />
      </div>
    </div>
  );
};

export default ShowFilm;
