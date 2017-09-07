import superagent from 'superagent';

export const GET_STARSHIPS_REQUEST = 'GET_STARSHIPS_REQUEST';
export const GET_STARSHIPS_SUCCESS = 'GET_STARSHIPS_SUCCESS';
export const GET_STARSHIPS_FAILURE = 'GET_STARSHIPS_FAILURE';

export function getStarshipsRequest() {
  return {
    type: GET_STARSHIPS_REQUEST
  };
}

export function getStarshipsSuccess(data) {
  return {
    type: GET_STARSHIPS_SUCCESS,
    data
  };
}

export function getStarshipsFailure(error) {
  return {
    type: GET_STARSHIPS_FAILURE,
    error
  };
}

export const getInitialStarships = () => async dispatch => {
  dispatch(getStarshipsRequest());

  try {
    const response = await superagent.get('http://swapi.co/api/starships/');

    dispatch(getStarshipsSuccess(response.body.results));
  } catch (e) {
    dispatch(getStarshipsFailure(e));
  }
};