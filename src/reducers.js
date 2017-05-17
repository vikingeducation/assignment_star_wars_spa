import * as Actions from "./actions";

const initialState = {
  films: [],
  isFetching: false,
  people: {},
  error: null
};

export function starWars(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_FILMS_SUCCESS:
      return {
        ...state,
        films: action.data,
        isFetching: false
      };
    case Actions.GET_FILMS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_FILMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case Actions.GET_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.data,
        isFetching: false
      };
    case Actions.GET_PEOPLE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_PEOPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}
