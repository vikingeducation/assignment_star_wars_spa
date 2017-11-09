import * as Actions from "./actions";

const initalState = {
  infoData: {},
  searchBox: "",
  isFetching: false,
  error: null
};

export function swpedia(state = initalState, action) {
  console.log(action);
  switch (action.type) {
    case Actions.GET_REQUEST_SUCCESS:
      return {
        ...state,
        infoData: action.data,
        isFetching: false,
        error: null
      };
    case Actions.GET_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case Actions.CLEAR_DATA:
      return {
        infoData: {},
        search: "",
        isFetching: false,
        error: null
      };
    default:
      return state;
  }
}
