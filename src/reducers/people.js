import { PeopleActions } from "../actions";

const initialState = {
  people: [],
  isFetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PeopleActions.REQUEST_GET_PEOPLE:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case PeopleActions.SUCCESS_GET_PEOPLE:
      return {
        ...state,
        people: action.data.results,
        isFetching: false
      };
    case PeopleActions.FAILURE_GET_PEOPLE:
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
