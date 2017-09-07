import { peopleActions } from '../actions';

const initialState = {
  people: [],
  isFetching: false,
  error: null
};

export const GET_PEOPLE_REQUEST = 'GET_PEOPLE_REQUEST';
export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS';
export const GET_PEOPLE_FAILURE = 'GET_PEOPLE_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case peopleActions.GET_PEOPLE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case peopleActions.GET_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.data,
        isFetching: false
      };

    case peopleActions.GET_PEOPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};