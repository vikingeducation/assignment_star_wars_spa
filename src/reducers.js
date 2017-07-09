import * as Actions from "./actions";
import { combineReducers } from "redux";

const initialState = {
  films: {
    allFilms: [],
    specificFilm: {}
  },
  people: {
    people: [],
    person: {}
  },
  planets: {},
  species: {},
  starships: {},
  vehicles: {}
}

export function films(state = initialState.films, action) {
  switch (action.type) {
    case Actions.GET_FILMS_SUCCESS:
      return {
        ...state,
        allFilms: action.data,
        isFetchingAll: false,
      }
    case Actions.GET_FILMS_REQUEST:
      return {
        ...state,
        isFetchingAll: true,
        error: null,
      }
    case Actions.GET_FILMS_FAILURE:
      return {
        ...state,
        isFetchingAll: false,
        error: action.error
      }
    case Actions.GET_SPECIFIC_FILM_SUCCESS:
      return {
        ...state,
        specificFilm: action.data,
        isFetchingSpecific: false,
      }
    case Actions.GET_SPECIFIC_FILM_REQUEST:
      return {
        ...state,
        isFetchingSpecific: true,
        error: null,
      }
    case Actions.GET_SPECIFIC_FILM_FAILURE:
      return {
        ...state,
        isFetchingSpecific: false,
        error: action.error
      }
    default:
      return state
  }
}

export function people(state = initialState.people, action) {
  switch (action.type) {
    case Actions.GET_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.data,
        isFetchingAll: false,
      }
    case Actions.GET_PEOPLE_REQUEST:
      return {
        ...state,
        isFetchingAll: true,
        error: null,
      }
    case Actions.GET_PEOPLE_FAILURE:
      return {
        ...state,
        isFetchingAll: false,
        error: action.error
      }
    case Actions.GET_PERSON_SUCCESS:
      return {
        ...state,
        person: action.data,
        isFetchingSpecific: false,
      }
    case Actions.GET_PERSON_REQUEST:
      return {
        ...state,
        isFetchingSpecific: true,
        error: null,
      }
    case Actions.GET_PERSON_FAILURE:
      return {
        ...state,
        isFetchingSpecific: false,
        error: action.error
      }
    default:
      return state
  }
}

/* 

  films, people, planets, species, starships, and vehicles
  paginated
  details-view

  so routes are
  / -> simple landing page
  /films
  /people
  /planets
  ... etc.

  /films/:id
  /people/:id
  /planets/:id
  ... etc.

  We need to store into state:
  -> allFilms
    -> api response
    -> current page
  -> allPeople
  -> allPlanets

  -> selectedFilm
  -> selectedPeople
  -> selectedPlanet

  So tomorrow, very simple:
  First, set up working routes for all the resources + nav links, etc.
  Then, get just ONE resource working perfectly. You get one, you have them all.

  state = {
    films: {
      allFilms: api response,
      selectedFilm: api response,
      currentPage: Integer
    }
    selectedFilm: api response <- look at demo repo for clues; also goodreads assignment
  }

  Tricky parts 
    -> What to do about pagination when jumping between resources? Reset?
    -> Search? <- Should be under resources
    -> Bonus Search: One on the landing page with an option-select for the resource

*/

export const starWarsApp = combineReducers({
  films,
  people
});