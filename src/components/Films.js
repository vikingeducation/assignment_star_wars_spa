import React from "react";

const FilmCard = ({ film }) => {
  return (
    <div className="card my-3" style={{ maxWidth: "320px" }}>
      <div className="card-block">
        {film.title}
      </div>
    </div>
  );
};
const Films = ({ films }) => {
  let filmsList = films.map(film => (
    <FilmCard film={film} key={film.episode_id} />
  ));
  return (
    <div className="card-deck">
      {filmsList}
    </div>
  );
};

export default Films;
