import * as Actions from './actions';
import { combineReducers } from 'redux';

const initialFilmsState = {
  films: [],
  isFetching: false,
  error: null
};

const FilmsInfo = (state = initialFilmsState, action) => {
  switch (action.type) {
  case Actions.GET_RESOURCE_REQUEST:
    return {
      ...state,
      isFetching: true
    };
  case Actions.GET_RESOURCE_SUCCESS:
    return {
      ...state,
      films: action.data.results,
      isFetching: true,
      error: null
    };
  case Actions.GET_RESOURCE_FAILURE:
    return {
      ...state,
      error: action.error
    };
  default:
    return state;
  }
};

export const SwapiApp = combineReducers({ FilmsInfo });
