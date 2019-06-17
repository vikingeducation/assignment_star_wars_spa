import superagent from 'superagent';

export const GET_PEOPLE_REQUEST = 'GET_PEOPLE_REQUEST';
export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS';
export const GET_PEOPLE_FAILURE = 'GET_PEOPLE_FAILURE';

export function getPeopleRequest() {
  return {
    type: GET_PEOPLE_REQUEST
  };
}

export function getPeopleSuccess(data, currentPage) {
  return {
    type: GET_PEOPLE_SUCCESS,
    data, 
    currentPage
  };
}

export function getPeopleFailure(error) {
  return {
    type: GET_PEOPLE_FAILURE,
    error
  };
}

export const getCurrentPeople = currentPage => async dispatch => {
  dispatch(getPeopleRequest());

  try {
    const response = await superagent.get(`http://swapi.co/api/people/?page=${currentPage}`);

    dispatch(getPeopleSuccess(response.body.results, currentPage));
  } catch (e) {
    dispatch(getPeopleFailure(e));
  }
};