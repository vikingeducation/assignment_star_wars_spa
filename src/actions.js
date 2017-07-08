export const GET_FILMS_REQUEST = "GET_FILMS_REQUEST";
export const GET_FILMS_SUCCESS = "GET_FILMS_SUCCESS";
export const GET_FILMS_FAILURE = "GET_FILMS_FAILURE";
export const GET_SPECIFIC_FILM_REQUEST = "GET_SPECIFIC_FILM_REQUEST";
export const GET_SPECIFIC_FILM_SUCCESS = "GET_SPECIFIC_FILM_SUCCESS";
export const GET_SPECIFIC_FILM_FAILURE = "GET_SPECIFIC_FILM_FAILURE";
const BASE_URI = 'http://swapi.co/api';

export function getFilmsRequest() {
  return {
    type: GET_FILMS_REQUEST
  };
}

export function getFilmsSuccess(data) {
  return {
    type: GET_FILMS_SUCCESS,
    data
  };
}

export function getFilmsFailure(error) {
  return {
    type: GET_FILMS_FAILURE,
    error
  };
}

export function getSpecificFilmRequest() {
  return {
    type: GET_SPECIFIC_FILM_REQUEST
  };
}

export function getSpecificFilmSuccess(data) {
  return {
    type: GET_SPECIFIC_FILM_SUCCESS,
    data
  };
}

export function getSpecificFilmFailure(error) {
  return {
    type: GET_SPECIFIC_FILM_FAILURE,
    error
  };
}

export function getFilmsFromAPI(searchTerm) {
  return dispatch => {
    dispatch(getFilmsRequest());
    
    let query;
    searchTerm ? query = `/?search=${searchTerm}` : query = "";

    fetch(`${BASE_URI}/films${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getFilmsSuccess(json.results));
      })
      .catch(error => {
        dispatch(getFilmsFailure(error));
      });
  };
}

export function getSpecificFilm(id) {
  return dispatch => {
    dispatch(getSpecificFilmRequest());

    fetch(`${BASE_URI}/films/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getSpecificFilmSuccess(json));
      })
      .catch(error => {
        dispatch(getSpecificFilmFailure(error));
      });
  };
}

