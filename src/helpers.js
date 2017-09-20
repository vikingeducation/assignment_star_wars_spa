export function findFilm(id, films) {
  return films.find(film => film.episode_id === Number(id));
}

export function findPerson(id, people) {
  return people.find(person => person.name === id);
}
