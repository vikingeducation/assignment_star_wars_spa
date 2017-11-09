export const GET_REQUEST_SUCCESS = "GET_REQUEST_SUCCESS";
export const GET_REQUEST = "GET_REQUEST";
export const GET_REQUEST_FAILURE = "GET_REQUEST_FAILURE";
export const CLEAR_DATA = "CLEAR_DATA";

export function getRequest() {
  return {
    type: GET_REQUEST
  };
}

export function getRequestSuccess(data) {
  return {
    type: GET_REQUEST_SUCCESS,
    data
  };
}

export function getRequestFailure(error) {
  return {
    type: GET_REQUEST_FAILURE,
    error
  };
}

export function clearData(data) {
  return {
    type: CLEAR_DATA,
    data
  };
}

export function getApiData(section, params) {
  return dispatch => {
    console.log("RequestDataCall", section, params);
    dispatch(getRequest());
    if (!params) {
      params = "";
    } else if (params.includes("?")) {
      params = "/" + params;
    } else {
      params = "/" + params + "/";
    }
    if (!section && params) {
      return {};
    }
    fetch(`https://swapi.co/api/${section}${params}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error with api");
        }
        return response.json();
      })
      .then(json => {
        dispatch(getRequestSuccess(json));
      })
      .catch(error => {
        dispatch(getRequestFailure(error));
      });
  };
}
