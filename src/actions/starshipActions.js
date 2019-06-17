import superagent from 'superagent';

export const GET_STARSHIPS_REQUEST = 'GET_STARSHIPS_REQUEST';
export const GET_STARSHIPS_SUCCESS = 'GET_STARSHIPS_SUCCESS';
export const GET_STARSHIPS_FAILURE = 'GET_STARSHIPS_FAILURE';

export function getStarshipsRequest() {
  return {
    type: GET_STARSHIPS_REQUEST
  };
}

export function getStarshipsSuccess(data, currentPage) {
  return {
    type: GET_STARSHIPS_SUCCESS,
    data,
    currentPage
  };
}

export function getStarshipsFailure(error) {
  return {
    type: GET_STARSHIPS_FAILURE,
    error
  };
}

export const getCurrentStarships = currentPage => async dispatch => {
  dispatch(getStarshipsRequest());

  try {
    const response = await superagent.get(
      `http://swapi.co/api/starships/?page=${currentPage}`
    );

    dispatch(getStarshipsSuccess(response.body.results, currentPage));
  } catch (e) {
    dispatch(getStarshipsFailure(e));
  }
};
