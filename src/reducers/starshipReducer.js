import { starshipsActions } from '../actions';

const initialState = {
  starships: [],
  isFetching: false,
  error: null
};

export const GET_STARSHIPS_REQUEST = 'GET_STARSHIPS_REQUEST';
export const GET_STARSHIPS_SUCCESS = 'GET_STARSHIPS_SUCCESS';
export const GET_STARSHIPS_FAILURE = 'GET_STARSHIPS_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case starshipsActions.GET_STARSHIPS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };

    case starshipsActions.GET_STARSHIPS_SUCCESS:
      return {
        ...state,
        starships: action.data,
        isFetching: false
      };

    case starshipsActions.GET_STARSHIPS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};