export const GET_STARWARS_REQUEST = "GET_STARWARS_REQUEST";
export const GET_STARWARS_SUCCESS = "GET_STARWARS_SUCCESS";
export const GET_STARWARS_FAILURE = "GET_STARWARS_FAILURE";

export function getStarWarsRequest() {
  return {
    type: GET_STARWARS_REQUEST
  };
}

export function getStarWarsSuccess(data) {
  return {
    type: GET_STARWARS_SUCCESS,
    data: data
  };
}

export function getStarWarsFailure(error) {
  return {
    type: GET_STARWARS_FAILURE,
    error: error
  };
}

export function getStarWars(query) {
  return dispatch => {
    dispatch(getStarWarsRequest());
    fetch(`https://swapi.co/api/${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response}`);
        }
        return response.json();
      })
      .then(response => {
        dispatch(getStarWarsSuccess(response.results));
      })
      .catch(e => {
        dispatch(getStarWarsFailure(e));
      });
  };
}
