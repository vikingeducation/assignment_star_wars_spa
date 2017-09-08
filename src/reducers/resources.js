import { ResourcesActions } from "../actions";

const initialState = {
  resources: [],
  isFetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ResourcesActions.REQUEST_GET_RESOURCES:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case ResourcesActions.SUCCESS_GET_RESOURCES:
      return {
        ...state,
        resources: action.data.results || [action.data],
        isFetching: false
      };
    case ResourcesActions.FAILURE_GET_RESOURCES:
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
