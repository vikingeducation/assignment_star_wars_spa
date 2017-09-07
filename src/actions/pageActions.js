import superagent from 'superagent';

export const GET_NEXT_PAGE_REQUEST = 'GET_PAGE_REQUEST';
export const GET_NEXT_PAGE_SUCCESS = 'GET_PAGE_SUCCESS';
export const GET_NEXT_PAGE_FAILURE = 'GET_PAGE_FAILURE';

export const GET_PREVIOUS_PAGE_REQUEST = 'GET_PAGE_REQUEST';
export const GET_PREVIOUS_PAGE_SUCCESS = 'GET_PAGE_SUCCESS';
export const GET_PREVIOUS_PAGE_FAILURE = 'GET_PAGE_FAILURE';

export function getNextPageRequest() {
  return {
    type: GET_NEXT_PAGE_REQUEST
  };
}

export function getNextPageSuccess(data) {
  return {
    type: GET_NEXT_PAGE_SUCCESS,
    data
  };
}

export function getNextPageFailure(error) {
  return {
    type: GET_NEXT_PAGE_FAILURE,
    error
  };
}

export function getPreviousPageRequest() {
  return {
    type: GET_PREVIOUS_PAGE_REQUEST
  };
}

export function getPreviousPageSuccess(data) {
  return {
    type: GET_PREVIOUS_PAGE_SUCCESS,
    data
  };
}

export function getPreviousPageFailure(error) {
  return {
    type: GET_PREVIOUS_PAGE_FAILURE,
    error
  };
}

// export const getInitialPage = () => async dispatch => {
//   dispatch(getPageRequest());

//   try {
//     const response = await superagent.get('http://swapi.co/api/page/');

//     dispatch(getPageSuccess(response.body.results));
//   } catch (e) {
//     dispatch(getPageFailure(e));
//   }
// };