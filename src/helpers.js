export function findFilm(id, films) {
  return films.find(film => film.episode_id === Number(id));
}
