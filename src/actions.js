import { FetchError } from "./lib/errors";

export const SET_RESOURCES = "SET_RESOURCES";
export const SET_RESOURCE = "SET_RESOURCE";
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

const setResources = (resources, type) => {
  return {
    type: SET_RESOURCES,
    data: { ...resources, type }
  };
};

const setResource = (resource, type) => {
  return {
    type: SET_RESOURCE,
    data: { ...resource, type }
  };
};

const ensureFetch = async url => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new FetchError(response);
  }
  return response.json();
};

export const fetchList = (resource, page = 1) => async dispatch => {
  try {
    dispatch(setFetching());
    const json = await ensureFetch(
      `https://swapi.co/api/${resource}?page=${page}`
    );
    const update = {
      list: json.results,
      next: Boolean(json.next),
      prev: Boolean(json.previous)
    };
    dispatch(setResources(update, resource));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error));
  }
};

export const fetchSingle = (resource, id) => async dispatch => {
  try {
    dispatch(setFetching());
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error));
  }
};
