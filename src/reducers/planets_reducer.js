import * as Actions from '../actions';

const initialPlanetsState = {
  planets: {},
  isFetching: false,
  error: null,
  search: null
};

const PlanetsInfo = (state = initialPlanetsState, action) => {
  switch (action.type) {
  case Actions.GET_RESOURCE_REQUEST:
    return {
      ...state,
      isFetching: true
    };
  case Actions.GET_RESOURCE_SUCCESS:
    return {
      ...state,
      planets: action.data,
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

export default PlanetsInfo;
