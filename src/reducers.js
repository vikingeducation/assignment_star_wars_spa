import * as Actions from "./actions";

const initialState = {
  films: [],
  isFetching: false,
  film: null,
  page: 1,
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
    case Actions.GET_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case Actions.GET_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.data,
        page: action.data.page,
        isFetching: false
      };
    case Actions.GET_SEARCH_SUCCESS:
      return {
        ...state,
        people: action.data,
        page: action.data.page,
        isFetching: false
      };
    default:
      return state;
  }
}
