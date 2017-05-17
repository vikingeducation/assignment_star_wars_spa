export const GET_FILMS_REQUEST = "GET_FILMS_REQUEST";
export const GET_FILMS_SUCCESS = "GET_FILMS_SUCCESS";
export const GET_FILMS_FAILURE = "GET_FILMS_FAILURE";

export const GET_PEOPLE_REQUEST = "GET_PEOPLE_REQUEST";
export const GET_PEOPLE_SUCCESS = "GET_PEOPLE_SUCCESS";
export const GET_PEOPLE_FAILURE = "GET_PEOPLE_FAILURE";

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

export function getFilms() {
  return dispatch => {
    dispatch(getFilmsRequest());

    fetch("http://swapi.co/api/films/")
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

export function getPeopleRequest() {
  return {
    type: GET_PEOPLE_REQUEST
  };
}

export function getPeopleSuccess(data) {
  return {
    type: GET_PEOPLE_SUCCESS,
    data
  };
}

export function getPeopleFailure(error) {
  return {
    type: GET_PEOPLE_FAILURE,
    error
  };
}

export function getPeople(page) {
  return dispatch => {
    dispatch(getPeopleRequest());
    fetch(`http://swapi.co/api/people/?page=${page}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(json => {
        dispatch(getPeopleSuccess(json));
      })
      .catch(error => {
        dispatch(getPeopleFailure(error));
      });
  };
}
