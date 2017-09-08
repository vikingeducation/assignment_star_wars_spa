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

const baseUrl = "https://swapi.co/api/";

export const fetchList = (type, page = 1, search) => async dispatch => {
  try {
    dispatch(setFetching());
    search = search ? `&search=${search}` : "";
    const json = await ensureFetch(`${baseUrl}${type}?page=${page}${search}`);
    const update = {
      list: json.results,
      next: Boolean(json.next),
      prev: Boolean(json.previous)
    };
    dispatch(setResources(update, type));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error));
  }
};

export const fetchSingle = (type, id) => async dispatch => {
  try {
    dispatch(setFetching());
    const json = await ensureFetch(`${baseUrl}${type}/${id}`);
    dispatch(setResource(json, type));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error));
  }
};
