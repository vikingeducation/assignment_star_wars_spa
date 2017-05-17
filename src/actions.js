export const GET_FILMS_SUCCESS = "GET_FILMS_SUCCESS";
export const GET_PEOPLE_SUCCESS = "GET_PEOPLE_SUCCESS";
export const GET_REQUEST = "GET_REQUEST";
export const GET_FAILURE = "GET_FAILURE";

export function getRequest() {
  return {
    type: GET_REQUEST
  };
}

export function getFilmsSuccess(data) {
  return {
    type: GET_FILMS_SUCCESS,
    data
  };
}

export function getFailure(error) {
  return {
    type: GET_FAILURE,
    error
  };
}

export function getFilms() {
  return dispatch => {
    dispatch(getRequest());
    _fetch("http://swapi.co/api/films/")
      .then(json => {
        dispatch(getFilmsSuccess(json.results));
      })
      .catch(error => {
        dispatch(getFailure(error));
      });
  };
}

export function getPeopleSuccess(data) {
  return {
    type: GET_PEOPLE_SUCCESS,
    data
  };
}

export function getPeople(page) {
  return dispatch => {
    dispatch(getRequest());
    _fetch(`http://swapi.co/api/people/?page=${page}`)
      .then(json => {
        json.page = page;
        dispatch(getPeopleSuccess(json));
      })
      .catch(error => {
        dispatch(getFailure(error));
      });
  };
}

function _fetch(url) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    return response.json();
  });
}
