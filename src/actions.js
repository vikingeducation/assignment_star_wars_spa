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

const parseResponse = async res => {
  const json = await res.json();
  return {
    list: json.results,
    next: Boolean(json.next),
    prev: Boolean(json.previous)
  };
};

export const fetchList = (resource, page = 1) => async dispatch => {
  try {
    if (page === null) return;
    dispatch(setFetching());
    const response = await fetch(
      `https://swapi.co/api/${resource}?page=${page}`
    );
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    dispatch(resourceMap[resource](await parseResponse(response)));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error));
  }
};
