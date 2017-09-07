import { PlanetActions } from "../actions";

const initialState = {
  planets: [],
  isFetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PlanetActions.REQUEST_GET_PLANETS:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case PlanetActions.SUCCESS_GET_PLANETS:
      return {
        ...state,
        planets: action.data.results,
        isFetching: false
      };
    case PlanetActions.FAILURE_GET_PLANETS:
      console.log("Error:", action.error);
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};
