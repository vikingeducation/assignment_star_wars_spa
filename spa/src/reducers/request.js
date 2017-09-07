const SET_FETCHING = "SET_FETCHING";

const initialState = {
  isFetching: false
};

export const request = (state = initialState, action) => {
  return { isFetching: action.data };
};
