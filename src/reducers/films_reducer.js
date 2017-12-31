import * as Actions from '../actions';

const initialFilmsState = {
  films: {},
  isFetching: false,
  error: null
};

const FilmsInfo = (state = initialFilmsState, action) => {
  switch (action.type) {
  case Actions.GET_RESOURCE_REQUEST:
    return {
      ...state,
      isFetching: true
    };
  case Actions.GET_RESOURCE_SUCCESS:
    return {
      ...state,
      films: action.data,
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

export default FilmsInfo;
