import * as Actions from '../actions';

const initialSpeciesState = {
  species: {},
  isFetching: false,
  error: null
};

const SpeciesInfo = (state = initialSpeciesState, action) => {
  switch (action.type) {
  case Actions.GET_RESOURCE_REQUEST:
    return {
      ...state,
      isFetching: true
    };
  case Actions.GET_RESOURCE_SUCCESS:
    return {
      ...state,
      species: action.data,
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

export default SpeciesInfo;
