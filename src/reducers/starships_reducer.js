import * as Actions from '../actions';

const initialStarshipsState = {
  starships: {},
  isFetching: false,
  error: null
};

const StarshipsInfo = (state = initialStarshipsState, action) => {
  switch (action.type) {
  case Actions.GET_RESOURCE_REQUEST:
    return {
      ...state,
      isFetching: true
    };
  case Actions.GET_RESOURCE_SUCCESS:
    return {
      ...state,
      starships: action.data,
      isFetching: false,
      error: null
    };
  case Actions.GET_RESOURCE_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.error
    };
  default:
    return state;
  }
};

export default StarshipsInfo;
