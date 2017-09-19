import superagent from "superagent";
import * as SWAPI from "./urlConst";

export const REQUEST_GET_PEOPLE = "REQUEST_GET_PEOPLE";
export const SUCCESS_GET_PEOPLE = "SUCCESS_GET_PEOPLE";
export const FAILURE_GET_PEOPLE = "FAILURE_GET_PEOPLE";

const requestGetPeople = () => ({
  type: REQUEST_GET_PEOPLE
});

const successGetPeople = data => ({
  type: SUCCESS_GET_PEOPLE,
  data
});

const failureGetPeople = error => ({
  type: FAILURE_GET_PEOPLE,
  error
});

export const getPeople = page => async dispatch => {
  dispatch(requestGetPeople());
  let url = `${SWAPI.BASE_URL}${SWAPI.PEOPLE_URL}${SWAPI.FORMAT_SUFFIX}`;
  if (page) url = page;

  try {
    const response = await superagent.get(url).buffer();

    dispatch(successGetPeople(response.body));
  } catch (error) {
    dispatch(failureGetPeople(error));
  }
};
