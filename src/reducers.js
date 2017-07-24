import * as Actions from "./actions";
import { combineReducers } from "redux";

const initialState = {
  films: {
    allFilms: [],
    specificFilm: {}
  },
  people: {
    people: [],
    person: {},
    page: 1
  },
  planets: {
    allPlanets: [],
    specificPlanet: {},
    page: 1
  },
  species: {
    allSpecies: [],
    specificSpecies: {},
    page: 1
  },
  starships: {
    allStarships: [],
    specificStarship: {},
    page: 1
  },
  vehicles: {
    allVehicles: [],
    specificVehicle: {},
    page: 1
  }
};

export function films(state = initialState.films, action) {
  switch (action.type) {
    case Actions.GET_FILMS_SUCCESS:
      return {
        ...state,
        allFilms: action.data,
        isFetchingAll: false
      };
    case Actions.GET_FILMS_REQUEST:
      return {
        ...state,
        isFetchingAll: true,
        error: null
      };
    case Actions.GET_FILMS_FAILURE:
      return {
        ...state,
        isFetchingAll: false,
        error: action.error
      };
    case Actions.GET_SPECIFIC_FILM_SUCCESS:
      return {
        ...state,
        specificFilm: action.data,
        isFetchingSpecific: false
      };
    case Actions.GET_SPECIFIC_FILM_REQUEST:
      return {
        ...state,
        isFetchingSpecific: true,
        error: null
      };
    case Actions.GET_SPECIFIC_FILM_FAILURE:
      return {
        ...state,
        isFetchingSpecific: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function people(state = initialState.people, action) {
  switch (action.type) {
    case Actions.GET_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.data,
        isFetchingAll: false
      };
    case Actions.GET_PEOPLE_REQUEST:
      return {
        ...state,
        isFetchingAll: true,
        error: null
      };
    case Actions.GET_PEOPLE_FAILURE:
      return {
        ...state,
        isFetchingAll: false,
        error: action.error
      };
    case Actions.GET_PERSON_SUCCESS:
      return {
        ...state,
        person: action.data,
        isFetchingSpecific: false
      };
    case Actions.GET_PERSON_REQUEST:
      return {
        ...state,
        isFetchingSpecific: true,
        error: null
      };
    case Actions.GET_PERSON_FAILURE:
      return {
        ...state,
        isFetchingSpecific: false,
        error: action.error
      };
    case Actions.GET_NEXT_PEOPLE_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case Actions.GET_PREV_PEOPLE_PAGE:
      return {
        ...state,
        page: state.page - 1
      };
    default:
      return state;
  }
}

export function planets(state = initialState.planets, action) {
  switch (action.type) {
    case Actions.GET_PLANETS_SUCCESS:
      return {
        ...state,
        allPlanets: action.data,
        isFetchingAll: false
      };
    case Actions.GET_PLANETS_REQUEST:
      return {
        ...state,
        isFetchingAll: true,
        error: null
      };
    case Actions.GET_PLANETS_FAILURE:
      return {
        ...state,
        isFetchingAll: false,
        error: action.error
      };
    case Actions.GET_SPECIFIC_PLANET_SUCCESS:
      return {
        ...state,
        specificPlanet: action.data,
        isFetchingSpecific: false
      };
    case Actions.GET_SPECIFIC_PLANET_REQUEST:
      return {
        ...state,
        isFetchingSpecific: true,
        error: null
      };
    case Actions.GET_SPECIFIC_PLANET_FAILURE:
      return {
        ...state,
        isFetchingSpecific: false,
        error: action.error
      };
    case Actions.GET_NEXT_PLANETS_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case Actions.GET_PREV_PLANETS_PAGE:
      return {
        ...state,
        page: state.page - 1
      };
    default:
      return state;
  }
}

export function species(state = initialState.species, action) {
  switch (action.type) {
    case Actions.GET_SPECIES_SUCCESS:
      return {
        ...state,
        allSpecies: action.data,
        isFetchingAll: false
      };
    case Actions.GET_SPECIES_REQUEST:
      return {
        ...state,
        isFetchingAll: true,
        error: null
      };
    case Actions.GET_SPECIES_FAILURE:
      return {
        ...state,
        isFetchingAll: false,
        error: action.error
      };
    case Actions.GET_SPECIFIC_SPECIES_SUCCESS:
      return {
        ...state,
        specificSpecies: action.data,
        isFetchingSpecific: false
      };
    case Actions.GET_SPECIFIC_SPECIES_REQUEST:
      return {
        ...state,
        isFetchingSpecific: true,
        error: null
      };
    case Actions.GET_SPECIFIC_SPECIES_FAILURE:
      return {
        ...state,
        isFetchingSpecific: false,
        error: action.error
      };
    case Actions.GET_NEXT_SPECIES_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case Actions.GET_PREV_SPECIES_PAGE:
      return {
        ...state,
        page: state.page - 1
      };
    default:
      return state;
  }
}

export function starships(state = initialState.starships, action) {
  switch (action.type) {
    case Actions.GET_STARSHIPS_SUCCESS:
      return {
        ...state,
        allStarships: action.data,
        isFetchingAll: false
      };
    case Actions.GET_STARSHIPS_REQUEST:
      return {
        ...state,
        isFetchingAll: true,
        error: null
      };
    case Actions.GET_STARSHIPS_FAILURE:
      return {
        ...state,
        isFetchingAll: false,
        error: action.error
      };
    case Actions.GET_SPECIFIC_STARSHIP_SUCCESS:
      return {
        ...state,
        specificStarship: action.data,
        isFetchingSpecific: false
      };
    case Actions.GET_SPECIFIC_STARSHIP_REQUEST:
      return {
        ...state,
        isFetchingSpecific: true,
        error: null
      };
    case Actions.GET_SPECIFIC_STARSHIP_FAILURE:
      return {
        ...state,
        isFetchingSpecific: false,
        error: action.error
      };
    case Actions.GET_NEXT_STARSHIPS_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case Actions.GET_PREV_STARSHIPS_PAGE:
      return {
        ...state,
        page: state.page - 1
      };
    default:
      return state;
  }
}

export function vehicles(state = initialState.vehicles, action) {
  switch (action.type) {
    case Actions.GET_VEHICLES_SUCCESS:
      return {
        ...state,
        allVehicles: action.data,
        isFetchingAll: false
      };
    case Actions.GET_VEHICLES_REQUEST:
      return {
        ...state,
        isFetchingAll: true,
        error: null
      };
    case Actions.GET_VEHICLES_FAILURE:
      return {
        ...state,
        isFetchingAll: false,
        error: action.error
      };
    case Actions.GET_SPECIFIC_VEHICLE_SUCCESS:
      return {
        ...state,
        specificVehicle: action.data,
        isFetchingSpecific: false
      };
    case Actions.GET_SPECIFIC_VEHICLE_REQUEST:
      return {
        ...state,
        isFetchingSpecific: true,
        error: null
      };
    case Actions.GET_SPECIFIC_VEHICLE_FAILURE:
      return {
        ...state,
        isFetchingSpecific: false,
        error: action.error
      };
    case Actions.GET_NEXT_VEHICLES_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case Actions.GET_PREV_VEHICLES_PAGE:
      return {
        ...state,
        page: state.page - 1
      };
    default:
      return state;
  }
}

export const starWarsApp = combineReducers({
  films,
  people,
  planets,
  species,
  starships,
  vehicles
});
