export const GET_FILMS_REQUEST = "GET_FILMS_REQUEST";
export const GET_FILMS_SUCCESS = "GET_FILMS_SUCCESS";
export const GET_FILMS_FAILURE = "GET_FILMS_FAILURE";
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
        dispatch(getFilmsSuccess(json));
      })
      .catch(error => {
        dispatch(getFilmsFailure(error));
      });
  };
}