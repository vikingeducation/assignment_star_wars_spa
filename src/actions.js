export const GET_FILMS_REQUEST = "GET_FILMS_REQUEST";
export const GET_FILMS_SUCCESS = "GET_FILMS_SUCCESS";
export const GET_FILMS_FAILURE = "GET_FILMS_FAILURE";
export const GET_SPECIFIC_FILM_REQUEST = "GET_SPECIFIC_FILM_REQUEST";
export const GET_SPECIFIC_FILM_SUCCESS = "GET_SPECIFIC_FILM_SUCCESS";
export const GET_SPECIFIC_FILM_FAILURE = "GET_SPECIFIC_FILM_FAILURE";
export const GET_PEOPLE_REQUEST = "GET_PEOPLE_REQUEST";
export const GET_PEOPLE_SUCCESS = "GET_PEOPLE_SUCCESS";
export const GET_PEOPLE_FAILURE = "GET_PEOPLE_FAILURE";
export const GET_PERSON_REQUEST = "GET_PERSON_REQUEST";
export const GET_PERSON_SUCCESS = "GET_PERSON_SUCCESS";
export const GET_PERSON_FAILURE = "GET_PERSON_FAILURE";
export const GET_NEXT_PEOPLE_PAGE = "GET_NEXT_PEOPLE_PAGE";
export const GET_PREV_PEOPLE_PAGE = "GET_PREV_PEOPLE_PAGE";

const BASE_URI = 'http://swapi.co/api';

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

export function getFilmsFromAPI(searchTerm) {
  return dispatch => {
    dispatch(getFilmsRequest());
    
    let query;
    searchTerm ? query = `/?${searchTerm}` : query = "";

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

export function getPeopleFromAPI(searchTerm, page) {
  return dispatch => {
    dispatch(getPeopleRequest());
    let query;
    searchTerm ? query = `&${searchTerm}` : query = "";

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

export function getNewPage(direction, type, page) {
  if (direction === "next") {
    switch(type) {
      case "people": 
        return dispatch => {
          dispatch(getNextPeoplePage());
          dispatch(getPeopleFromAPI(null, page + 1));
        };
      default:
        return;
    }
  } else if (direction === "prev") {
    switch(type) {
      case "people":
        return dispatch => {
          dispatch(getPrevPeoplePage());
          dispatch(getPeopleFromAPI(null, page - 1));
        };
      default:
        return;
    }
  }
}

/*

Refactor Idea:

const getApiSettings = type => {
  switch(type) {
    case "films":
      return {
        request: getAllFilmsRequest(),
        success: getAllFilmsSuccess(),
        failure: getAllFilmsFailure()
      }
    case "film":
      return {
        request: getSpecificFilmRequest(),
        success: getSpecificFilmSuccess(),
        failure: getSpecificFilmFailure()
      }
  }
};

export function getApiData(type, id) {
  let settings = getApiSettings(type)
  let url;
  if (id) {
    url = `${BASE_URI}/${type}/${id}`
  } else {
    url = `${BASE_URI}/${type}`
  }

  let query;
    searchTerm ? query = `/?${searchTerm}` : query = "";
  return dispatch => {
    dispatch(settings.request());

    fetch(`${BASE_URI}/people/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        if (json.results) {
          dispatch(settings.success(json.results));
        } else {
          dispatch(settings.success(json));
        }
      })
      .catch(error => {
        dispatch(settings.failure(error));
      });
  };
}
*/