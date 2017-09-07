import { combineReducers } from "redux";

import { SET_RESOURCES, SET_FETCHING, SET_ERROR, SET_SUCCESS } from "./actions";

const defaultState = { list: [], next: null, prev: null };

const resources = (state = defaultState, action) => {
  switch (action.type) {
    case SET_RESOURCES:
      return action.data;
    default:
      return state;
  }
};

const status = (state = { isFetching: false, error: null }, action) => {
  switch (action.type) {
    case SET_FETCHING:
      return { error: null, isFetching: true };
    case SET_ERROR:
      console.error("Problem Fetching: ", action.error);
      return { isFetching: false, error: action.error };
    case SET_SUCCESS:
      return { isFetching: false, error: null };
    default:
      return state;
  }
};

const starWarsApp = combineReducers({ resources, status });
export default starWarsApp;
