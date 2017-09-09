import { GET_SPECIES_SUCCESS, GET_SPECIE_SUCCESS } from "../actions/species";

const initialState = {
  species: [],
  specie: []
};

const species = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECIES_SUCCESS:
      return {
        ...state,
        species: action.data
      };
    case GET_SPECIE_SUCCESS:
      return {
        ...state,
        specie: action.data
      };
    default:
      return state;
  }
};

export default species;
