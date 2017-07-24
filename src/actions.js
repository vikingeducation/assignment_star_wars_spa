const BASE_URI = "http://swapi.co/api";

/*
  ==========================
  Films
  ==========================
*/
export const GET_FILMS_REQUEST = "GET_FILMS_REQUEST";
export const GET_FILMS_SUCCESS = "GET_FILMS_SUCCESS";
export const GET_FILMS_FAILURE = "GET_FILMS_FAILURE";
export const GET_SPECIFIC_FILM_REQUEST = "GET_SPECIFIC_FILM_REQUEST";
export const GET_SPECIFIC_FILM_SUCCESS = "GET_SPECIFIC_FILM_SUCCESS";
export const GET_SPECIFIC_FILM_FAILURE = "GET_SPECIFIC_FILM_FAILURE";

export function getFilmsRequest() {
  return {
    type: GET_FILMS_REQUEST
  };
}

export function getFilmsSuccess(data) {
  return {
    type: GET_FILMS_SUCCESS,
    data
  };
}

export function getFilmsFailure(error) {
  return {
    type: GET_FILMS_FAILURE,
    error
  };
}

export function getSpecificFilmRequest() {
  return {
    type: GET_SPECIFIC_FILM_REQUEST
  };
}

export function getSpecificFilmSuccess(data) {
  return {
    type: GET_SPECIFIC_FILM_SUCCESS,
    data
  };
}

export function getSpecificFilmFailure(error) {
  return {
    type: GET_SPECIFIC_FILM_FAILURE,
    error
  };
}

export function getFilmsFromAPI(searchTerm) {
  return dispatch => {
    dispatch(getFilmsRequest());

    let query;
    searchTerm ? (query = `/?${searchTerm}`) : (query = "");

    fetch(`${BASE_URI}/films${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getFilmsSuccess(json.results));
      })
      .catch(error => {
        dispatch(getFilmsFailure(error));
      });
  };
}

export function getSpecificFilm(id) {
  return dispatch => {
    dispatch(getSpecificFilmRequest());

    fetch(`${BASE_URI}/films/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getSpecificFilmSuccess(json));
      })
      .catch(error => {
        dispatch(getSpecificFilmFailure(error));
      });
  };
}

/*
  ==========================
  People
  ==========================
*/
export const GET_PEOPLE_REQUEST = "GET_PEOPLE_REQUEST";
export const GET_PEOPLE_SUCCESS = "GET_PEOPLE_SUCCESS";
export const GET_PEOPLE_FAILURE = "GET_PEOPLE_FAILURE";
export const GET_PERSON_REQUEST = "GET_PERSON_REQUEST";
export const GET_PERSON_SUCCESS = "GET_PERSON_SUCCESS";
export const GET_PERSON_FAILURE = "GET_PERSON_FAILURE";
export const GET_NEXT_PEOPLE_PAGE = "GET_NEXT_PEOPLE_PAGE";
export const GET_PREV_PEOPLE_PAGE = "GET_PREV_PEOPLE_PAGE";

export function getPeopleRequest() {
  return {
    type: GET_PEOPLE_REQUEST
  };
}

export function getPeopleSuccess(data) {
  return {
    type: GET_PEOPLE_SUCCESS,
    data
  };
}

export function getPeopleFailure(error) {
  return {
    type: GET_PEOPLE_FAILURE,
    error
  };
}

export function getPersonRequest() {
  return {
    type: GET_PERSON_REQUEST
  };
}

export function getPersonSuccess(data) {
  return {
    type: GET_PERSON_SUCCESS,
    data
  };
}

export function getPersonFailure(error) {
  return {
    type: GET_PERSON_FAILURE,
    error
  };
}

export function getNextPeoplePage(data) {
  return {
    type: GET_NEXT_PEOPLE_PAGE
  };
}
export function getPrevPeoplePage(data) {
  return {
    type: GET_PREV_PEOPLE_PAGE
  };
}

export function getPeopleFromAPI(searchTerm, page = 1) {
  return dispatch => {
    dispatch(getPeopleRequest());
    let query;
    searchTerm ? (query = `&${searchTerm}`) : (query = "");

    fetch(`${BASE_URI}/people/?page=${page}${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getPeopleSuccess(json.results));
      })
      .catch(error => {
        dispatch(getPeopleFailure(error));
      });
  };
}

export function getPerson(id) {
  return dispatch => {
    dispatch(getPersonRequest());

    fetch(`${BASE_URI}/people/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getPersonSuccess(json));
      })
      .catch(error => {
        dispatch(getPersonFailure(error));
      });
  };
}

/*
  ==========================
  Planets
  ==========================
*/
export const GET_PLANETS_REQUEST = "GET_PLANETS_REQUEST";
export const GET_PLANETS_SUCCESS = "GET_PLANETS_SUCCESS";
export const GET_PLANETS_FAILURE = "GET_PLANETS_FAILURE";
export const GET_SPECIFIC_PLANET_REQUEST = "GET_SPECIFIC_PLANET_REQUEST";
export const GET_SPECIFIC_PLANET_SUCCESS = "GET_SPECIFIC_PLANET_SUCCESS";
export const GET_SPECIFIC_PLANET_FAILURE = "GET_SPECIFIC_PLANET_FAILURE";
export const GET_NEXT_PLANETS_PAGE = "GET_NEXT_PLANETS_PAGE";
export const GET_PREV_PLANETS_PAGE = "GET_PREV_PLANETS_PAGE";

export function getPlanetsRequest() {
  return {
    type: GET_PLANETS_REQUEST
  };
}

export function getPlanetsSuccess(data) {
  return {
    type: GET_PLANETS_SUCCESS,
    data
  };
}

export function getPlanetsFailure(error) {
  return {
    type: GET_PLANETS_FAILURE,
    error
  };
}

export function getSpecificPlanetRequest() {
  return {
    type: GET_SPECIFIC_PLANET_REQUEST
  };
}

export function getSpecificPlanetSuccess(data) {
  return {
    type: GET_SPECIFIC_PLANET_SUCCESS,
    data
  };
}

export function getSpecificPlanetFailure(error) {
  return {
    type: GET_SPECIFIC_PLANET_FAILURE,
    error
  };
}

export function getNextPlanetsPage(data) {
  return {
    type: GET_NEXT_PLANETS_PAGE
  };
}
export function getPrevPlanetsPage(data) {
  return {
    type: GET_PREV_PLANETS_PAGE
  };
}

export function getPlanetsFromAPI(searchTerm, page = 1) {
  return dispatch => {
    dispatch(getPlanetsRequest());
    let query;
    searchTerm ? (query = `&${searchTerm}`) : (query = "");

    fetch(`${BASE_URI}/planets/?page=${page}${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getPlanetsSuccess(json.results));
      })
      .catch(error => {
        dispatch(getPlanetsFailure(error));
      });
  };
}

export function getSpecificPlanet(id) {
  return dispatch => {
    dispatch(getSpecificPlanetRequest());

    fetch(`${BASE_URI}/planets/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getSpecificPlanetSuccess(json));
      })
      .catch(error => {
        dispatch(getSpecificPlanetFailure(error));
      });
  };
}
/*
  ==========================
  Species
  ==========================
*/
export const GET_SPECIES_REQUEST = "GET_SPECIES_REQUEST";
export const GET_SPECIES_SUCCESS = "GET_SPECIES_SUCCESS";
export const GET_SPECIES_FAILURE = "GET_SPECIES_FAILURE";
export const GET_SPECIFIC_SPECIES_REQUEST = "GET_SPECIFIC_SPECIES_REQUEST";
export const GET_SPECIFIC_SPECIES_SUCCESS = "GET_SPECIFIC_SPECIES_SUCCESS";
export const GET_SPECIFIC_SPECIES_FAILURE = "GET_SPECIFIC_SPECIES_FAILURE";
export const GET_NEXT_SPECIES_PAGE = "GET_NEXT_SPECIES_PAGE";
export const GET_PREV_SPECIES_PAGE = "GET_PREV_SPECIES_PAGE";

export function getSpeciesRequest() {
  return {
    type: GET_SPECIES_REQUEST
  };
}

export function getSpeciesSuccess(data) {
  return {
    type: GET_SPECIES_SUCCESS,
    data
  };
}

export function getSpeciesFailure(error) {
  return {
    type: GET_SPECIES_FAILURE,
    error
  };
}

export function getSpecificSpeciesRequest() {
  return {
    type: GET_SPECIFIC_SPECIES_REQUEST
  };
}

export function getSpecificSpeciesSuccess(data) {
  return {
    type: GET_SPECIFIC_SPECIES_SUCCESS,
    data
  };
}

export function getSpecificSpeciesFailure(error) {
  return {
    type: GET_SPECIFIC_SPECIES_FAILURE,
    error
  };
}

export function getNextSpeciesPage(data) {
  return {
    type: GET_NEXT_SPECIES_PAGE
  };
}
export function getPrevSpeciesPage(data) {
  return {
    type: GET_PREV_SPECIES_PAGE
  };
}

export function getSpeciesFromAPI(searchTerm, page = 1) {
  return dispatch => {
    dispatch(getSpeciesRequest());
    let query;
    searchTerm ? (query = `&${searchTerm}`) : (query = "");

    fetch(`${BASE_URI}/species/?page=${page}${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getSpeciesSuccess(json.results));
      })
      .catch(error => {
        dispatch(getSpeciesFailure(error));
      });
  };
}

export function getSpecificSpecies(id) {
  return dispatch => {
    dispatch(getSpecificSpeciesRequest());

    fetch(`${BASE_URI}/species/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getSpecificSpeciesSuccess(json));
      })
      .catch(error => {
        dispatch(getSpecificSpeciesFailure(error));
      });
  };
}

/*
  ==========================
  Starships
  ==========================
*/
export const GET_STARSHIPS_REQUEST = "GET_STARSHIPS_REQUEST";
export const GET_STARSHIPS_SUCCESS = "GET_STARSHIPS_SUCCESS";
export const GET_STARSHIPS_FAILURE = "GET_STARSHIPS_FAILURE";
export const GET_SPECIFIC_STARSHIP_REQUEST = "GET_SPECIFIC_STARSHIP_REQUEST";
export const GET_SPECIFIC_STARSHIP_SUCCESS = "GET_SPECIFIC_STARSHIP_SUCCESS";
export const GET_SPECIFIC_STARSHIP_FAILURE = "GET_SPECIFIC_STARSHIP_FAILURE";
export const GET_NEXT_STARSHIPS_PAGE = "GET_NEXT_STARSHIPS_PAGE";
export const GET_PREV_STARSHIPS_PAGE = "GET_PREV_STARSHIPS_PAGE";

export function getStarshipsRequest() {
  return {
    type: GET_STARSHIPS_REQUEST
  };
}

export function getStarshipsSuccess(data) {
  return {
    type: GET_STARSHIPS_SUCCESS,
    data
  };
}

export function getStarshipsFailure(error) {
  return {
    type: GET_STARSHIPS_FAILURE,
    error
  };
}

export function getSpecificStarshipRequest() {
  return {
    type: GET_SPECIFIC_STARSHIP_REQUEST
  };
}

export function getSpecificStarshipSuccess(data) {
  return {
    type: GET_SPECIFIC_STARSHIP_SUCCESS,
    data
  };
}

export function getSpecificStarshipFailure(error) {
  return {
    type: GET_SPECIFIC_STARSHIP_FAILURE,
    error
  };
}

export function getNextStarshipsPage(data) {
  return {
    type: GET_NEXT_STARSHIPS_PAGE
  };
}
export function getPrevStarshipsPage(data) {
  return {
    type: GET_PREV_STARSHIPS_PAGE
  };
}

export function getStarshipsFromAPI(searchTerm, page = 1) {
  return dispatch => {
    dispatch(getStarshipsRequest());
    let query;
    searchTerm ? (query = `&${searchTerm}`) : (query = "");

    fetch(`${BASE_URI}/starships/?page=${page}${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getStarshipsSuccess(json.results));
      })
      .catch(error => {
        dispatch(getStarshipsFailure(error));
      });
  };
}

export function getSpecificStarship(id) {
  return dispatch => {
    dispatch(getSpecificStarshipRequest());

    fetch(`${BASE_URI}/starships/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getSpecificStarshipSuccess(json));
      })
      .catch(error => {
        dispatch(getSpecificStarshipFailure(error));
      });
  };
}

/*
  ==========================
  Vehicles
  ==========================
*/
export const GET_VEHICLES_REQUEST = "GET_VEHICLES_REQUEST";
export const GET_VEHICLES_SUCCESS = "GET_VEHICLES_SUCCESS";
export const GET_VEHICLES_FAILURE = "GET_VEHICLES_FAILURE";
export const GET_SPECIFIC_VEHICLE_REQUEST = "GET_SPECIFIC_VEHICLE_REQUEST";
export const GET_SPECIFIC_VEHICLE_SUCCESS = "GET_SPECIFIC_VEHICLE_SUCCESS";
export const GET_SPECIFIC_VEHICLE_FAILURE = "GET_SPECIFIC_VEHICLE_FAILURE";
export const GET_NEXT_VEHICLES_PAGE = "GET_NEXT_VEHICLES_PAGE";
export const GET_PREV_VEHICLES_PAGE = "GET_PREV_VEHICLES_PAGE";

export function getVehiclesRequest() {
  return {
    type: GET_VEHICLES_REQUEST
  };
}

export function getVehiclesSuccess(data) {
  return {
    type: GET_VEHICLES_SUCCESS,
    data
  };
}

export function getVehiclesFailure(error) {
  return {
    type: GET_VEHICLES_FAILURE,
    error
  };
}

export function getSpecificVehicleRequest() {
  return {
    type: GET_SPECIFIC_VEHICLE_REQUEST
  };
}

export function getSpecificVehicleSuccess(data) {
  return {
    type: GET_SPECIFIC_VEHICLE_SUCCESS,
    data
  };
}

export function getSpecificVehicleFailure(error) {
  return {
    type: GET_SPECIFIC_VEHICLE_FAILURE,
    error
  };
}

export function getNextVehiclesPage(data) {
  return {
    type: GET_NEXT_VEHICLES_PAGE
  };
}
export function getPrevVehiclesPage(data) {
  return {
    type: GET_PREV_VEHICLES_PAGE
  };
}

export function getVehiclesFromAPI(searchTerm, page = 1) {
  return dispatch => {
    dispatch(getVehiclesRequest());
    let query;
    searchTerm ? (query = `&${searchTerm}`) : (query = "");

    fetch(`${BASE_URI}/vehicles/?page=${page}${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getVehiclesSuccess(json.results));
      })
      .catch(error => {
        dispatch(getVehiclesFailure(error));
      });
  };
}

export function getSpecificVehicle(id) {
  return dispatch => {
    dispatch(getSpecificVehicleRequest());

    fetch(`${BASE_URI}/vehicles/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getSpecificVehicleSuccess(json));
      })
      .catch(error => {
        dispatch(getSpecificVehicleFailure(error));
      });
  };
}

/*
  ==========================
  Pagination
  ==========================
*/
export function getNewPage(direction, type, page) {
  if (direction === "next") {
    switch (type) {
      case "people":
        return dispatch => {
          dispatch(getNextPeoplePage());
          dispatch(getPeopleFromAPI(null, page + 1));
        };
      case "planets":
        return dispatch => {
          dispatch(getNextPlanetsPage());
          dispatch(getPlanetsFromAPI(null, page + 1));
        };
      case "species":
        return dispatch => {
          dispatch(getNextSpeciesPage());
          dispatch(getSpeciesFromAPI(null, page + 1));
        };
      case "starships":
        return dispatch => {
          dispatch(getNextStarshipsPage());
          dispatch(getStarshipsFromAPI(null, page + 1));
        };
      case "vehicles":
        return dispatch => {
          dispatch(getNextVehiclesPage());
          dispatch(getVehiclesFromAPI(null, page + 1));
        };
      default:
        return;
    }
  } else if (direction === "prev") {
    switch (type) {
      case "people":
        return dispatch => {
          dispatch(getPrevPeoplePage());
          dispatch(getPeopleFromAPI(null, page - 1));
        };
      case "planets":
        return dispatch => {
          dispatch(getPrevPlanetsPage());
          dispatch(getPlanetsFromAPI(null, page - 1));
        };
      case "species":
        return dispatch => {
          dispatch(getPrevSpeciesPage());
          dispatch(getSpeciesFromAPI(null, page - 1));
        };
      case "starships":
        return dispatch => {
          dispatch(getPrevStarshipsPage());
          dispatch(getStarshipsFromAPI(null, page - 1));
        };
      case "vehicles":
        return dispatch => {
          dispatch(getPrevVehiclesPage());
          dispatch(getVehiclesFromAPI(null, page - 1));
        };
      default:
        return;
    }
  }
}
