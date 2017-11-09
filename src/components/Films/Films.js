import React from "react";
import { Link } from "react-router-dom";

const Films = ({ filmData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!filmData) {
    return <p>Error</p>;
  } else if (filmData.results) {
    //Sort Films by episode
    let sortedFilms = filmData;
    sortedFilms.results.sort((a, b) => {
      return a.release_date > b.release_date;
    });
    //map styling
    return sortedFilms.results.map(film => {
      return (
        <div className="film card" key={film.episode_id}>
          <Link to={film.url.substring(20)}>
            <h3>
              {film.title} Episode {film.episode_id}
            </h3>
          </Link>
          <small>{film.release_date}</small>
          <small>Director: {film.director}</small>
          <small>Producer: {film.producer}</small>
          <p>{film.opening_crawl}</p>
        </div>
      );
    });
  } else {
    return <p>Error</p>;
  }
};

export default Films;
