export const GET_STARSHIPS_SUCCESS = "GET_STARSHIPS_SUCCESS";
export const GET_STARSHIP_SUCCESS = "GET_STARSHIP_SUCCESS";
const BASE_URL = "https://swapi.co/api/starships";

const startRequest = () => {
  return {
    type: "SET_FETCHING",
    data: true
  };
};

const endRequest = () => {
  return {
    type: "SET_FETCHING",
    data: false
  };
};

const getStarshipsSuccess = data => {
  return {
    type: GET_STARSHIPS_SUCCESS,
    data
  };
};

const getStarshipSuccess = data => {
  return {
    type: GET_STARSHIP_SUCCESS,
    data
  };
};

export const getStarships = () => {
  return async dispatch => {
    dispatch(startRequest());
    let response = await fetch(BASE_URL);
    let starships = await response.json();
    dispatch(getStarshipsSuccess(starships.results));
    dispatch(endRequest());
  };
};

export const getStarship = id => {
  return async dispatch => {
    dispatch(startRequest());
    let response = await fetch(`${BASE_URL}/${id}/`);
    let starship = await response.json();
    dispatch(getStarshipSuccess(starship));
    dispatch(endRequest());
  };
};
