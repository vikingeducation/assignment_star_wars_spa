import { combineReducers } from "redux";

import {
  SET_PEOPLE,
  SET_FILMS,
  SET_FETCHING,
  SET_ERROR,
  SET_SUCCESS
} from "./actions";

const people = (state = [], action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return action.data;
    default:
      return state;
  }
};

const films = (state = [], action) => {
  switch (action.type) {
    case SET_FILMS:
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

const starWarsApp = combineReducers({ people, films, status });
export default starWarsApp;
