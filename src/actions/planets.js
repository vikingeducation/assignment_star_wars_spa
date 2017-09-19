import superagent from "superagent";
import * as SWAPI from "./urlConst";

export const REQUEST_GET_PLANETS = "REQUEST_GET_PLANETS";
export const SUCCESS_GET_PLANETS = "SUCCESS_GET_PLANETS";
export const FAILURE_GET_PLANETS = "FAILURE_GET_PLANETS";

const requestGetPlanets = () => ({
  type: REQUEST_GET_PLANETS
});

const successGetPlanets = data => ({
  type: SUCCESS_GET_PLANETS,
  data
});

const failureGetPlanets = error => ({
  type: FAILURE_GET_PLANETS,
  error
});

export const getPlanets = page => async dispatch => {
  dispatch(requestGetPlanets());
  let url = `${SWAPI.BASE_URL}${SWAPI.PLANETS_URL}${SWAPI.FORMAT_SUFFIX}`;
  if (page) url = page;

  try {
    const response = await superagent.get(url).buffer();

    dispatch(successGetPlanets(response.body));
  } catch (error) {
    dispatch(failureGetPlanets(error));
  }
};
