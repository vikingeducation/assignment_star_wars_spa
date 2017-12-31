import * as Actions from '../actions';

const initialVehiclesState = {
  vehicles: {},
  isFetching: false,
  error: null
};

const VehiclesInfo = (state = initialVehiclesState, action) => {
  switch (action.type) {
  case Actions.GET_RESOURCE_REQUEST:
    return {
      ...state,
      isFetching: true
    };
  case Actions.GET_RESOURCE_SUCCESS:
    return {
      ...state,
      vehicles: action.data,
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

export default VehiclesInfo;
