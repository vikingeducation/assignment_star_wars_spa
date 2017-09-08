import { ResourcesActions } from "../actions";

const initialState = {
  schema: null,
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
        schema: action.data.schema,
        resources: action.data.body.results || [action.data.body],
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
