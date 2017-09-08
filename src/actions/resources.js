import superagent from "superagent";
import * as SWAPI from "./urlConst";

export const REQUEST_GET_RESOURCES = "REQUEST_GET_RESOURCES";
export const SUCCESS_GET_RESOURCES = "SUCCESS_GET_RESOURCES";
export const FAILURE_GET_RESOURCES = "FAILURE_GET_RESOURCES";

const requestGetResources = resources => ({
  type: REQUEST_GET_RESOURCES
});

const successGetResources = data => ({
  type: SUCCESS_GET_RESOURCES,
  data
});

const failureGetResources = error => ({
  type: FAILURE_GET_RESOURCES,
  error
});

export const getResources = (resource, page, id) => async dispatch => {
  let resourcesMap = ["planets", "people"];
  if (!resourcesMap.includes(resource))
    return dispatch(
      failureGetResources(new Error("Resources entered is invalid"))
    );

  dispatch(requestGetResources());

  let url = `${SWAPI.BASE_URL}${resource}`;
  url += id || "";
  url += `/${SWAPI.FORMAT_SUFFIX}`;
  url += page ? `&page=${page}` : "";

  try {
    const response = await superagent.get(url).buffer();

    dispatch(successGetResources(response.body));
  } catch (error) {
    dispatch(failureGetResources(error));
  }
};
