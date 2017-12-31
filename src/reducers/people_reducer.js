import * as Actions from '../actions';

const initialPeopleState = {
  people: {},
  isFetching: false,
  error: null,
  search: null
};

const PeopleInfo = (state = initialPeopleState, action) => {
  switch (action.type) {
  case Actions.GET_RESOURCE_REQUEST:
    return {
      ...state,
      isFetching: true
    };
  case Actions.GET_RESOURCE_SUCCESS:
    return {
      ...state,
      people: action.data,
      isFetching: false,
      error: null
    };
  case Actions.GET_RESOURCE_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.error
    };
  default:
    return state;
  }
};

export default PeopleInfo;
