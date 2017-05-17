import React from "react";
import { Link } from "react-router-dom";

const FilmCard = ({ film }) => {
  return (
    <Link to={`/films/${film.episode_id}`}>
      <div className="card my-3" style={{ maxWidth: "320px" }}>
        <div className="card-block">

          <h4>{film.title}</h4>
          <h6>{film.release_date}</h6>
        </div>
      </div>
    </Link>
  );
};
const Films = ({ films }) => {
  let filmsList = films.map(film => (
    <FilmCard film={film} key={film.episode_id} />
  ));
  return (
    <div>
      <h1>Films</h1>
      <div className="card-deck">
        {filmsList}
      </div>
    </div>
  );
};

export default Films;
