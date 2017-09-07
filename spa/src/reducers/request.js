// const SET_FETCHING = "SET_FETCHING";

const initialState = {
  isFetching: false
};

export const request = (state = initialState, action) => {
  console.log("state = ", state);
  switch (action.type) {
    case "SET_FETCHING":
      return {
        ...state,
        isFetching: action.data
      };
    default:
      return state;
  }
  // return { isFetching: action.data };
};
