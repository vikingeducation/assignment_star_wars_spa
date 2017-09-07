import superagent from "superagent";
import * as SWAPI from "./urlConst";

export const REQUEST_GET_PERSON = "REQUEST_GET_PERSON";
export const SUCCESS_GET_PERSON = "SUCCESS_GET_PERSON";
export const FAILURE_GET_PERSON = "FAILURE_GET_PERSON";

const requestGetPerson = () => ({
  type: REQUEST_GET_PERSON
});

const successGetPerson = data => ({
  type: SUCCESS_GET_PERSON,
  data
});

const failureGetPerson = error => ({
  type: FAILURE_GET_PERSON,
  error
});

export const getPerson = id => async dispatch => {
  dispatch(requestGetPerson());
  let url = `${SWAPI.BASE_URL}${SWAPI.PEOPLE_URL}${id}${SWAPI.FORMAT_SUFFIX}`;
  try {
    const person = (await superagent.get(url).buffer()).body;

    dispatch(successGetPerson(person));
  } catch (error) {
    dispatch(failureGetPerson(error));
  }
};
