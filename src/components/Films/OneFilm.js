import React from "react";
import { Link } from "react-router-dom";

const filmLinks = data => {
  return data.map((single, index) => {
    return (
      <span key={single}>
        <Link to={single.substring(20)}>
          <button className="btn-sm btn">{index + 1}</button>
        </Link>{" "}
      </span>
    );
  });
};

const Films = ({ filmData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!filmData) {
    return <p>Error No Data</p>;
  } else if (filmData.title) {
    let characters = filmLinks(filmData.characters);
    let planets = filmLinks(filmData.planets);
    let species = filmLinks(filmData.species);
    let starships = filmLinks(filmData.starships);
    let vehicles = filmLinks(filmData.vehicles);
    return (
      <div className="film card" key={filmData.episode_id}>
        <h3>
          {filmData.title} Episode {filmData.episode_id}
        </h3>
        <small>{filmData.release_date}</small>
        <small>Director: {filmData.director}</small>
        <small>Producer: {filmData.producer}</small>
        <p>{filmData.opening_crawl}</p>
        <p>Characters</p>
        <p>{characters}</p>
        <p>Planets</p>
        <p>{planets}</p>
        <p>Species</p>
        <p>{species}</p>
        <p>Starships</p>
        <p>{starships}</p>
        <p>Vehicles</p>
        <p>{vehicles}</p>
      </div>
    );
  } else {
    return <p>Error Title</p>;
  }
};

export default Films;
