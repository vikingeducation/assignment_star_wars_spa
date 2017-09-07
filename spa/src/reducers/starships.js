import {
  GET_STARSHIPS_SUCCESS,
  GET_STARSHIP_SUCCESS
} from "../actions/startships";

const initialState = {
  starships: [],
  starship: []
};

const starships = (state = initialState, action) => {
  switch (action.type) {
    case GET_STARSHIPS_SUCCESS:
      return {
        ...state,
        starships: action.data
      };
    case GET_STARSHIP_SUCCESS:
      return {
        ...state,
        starship: action.data
      };
    default:
      return state;
  }
};
