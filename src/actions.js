export const SET_PEOPLE = "SET_PEOPLE";
export const SET_FILMS = "SET_FILMS";
export const SET_FETCHING = "SET_FETCHING";
export const SET_ERROR = "SET_ERROR";
export const SET_SUCCESS = "SET_SUCCESS";

const setFetching = () => {
  return {
    type: SET_FETCHING
  };
};

const setSuccess = () => {
  return {
    type: SET_SUCCESS
  };
};

const setError = msg => {
  return {
    type: SET_ERROR,
    error: msg
  };
};

const setPeople = peopleList => {
  return {
    type: SET_PEOPLE,
    data: peopleList
  };
};

const setFilms = filmList => {
  return {
    type: SET_FILMS,
    data: filmList
  };
};

const resourceMap = {
  films: setFilms,
  people: setPeople
};

export const fetchList = resource => async dispatch => {
  try {
    dispatch(setFetching());
    const response = await fetch(`https://swapi.co/api/${resource}`);
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    const json = await response.json();
    dispatch(resourceMap[resource](json.results));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error));
  }
};
