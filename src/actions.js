export const GET_RESOURCE_REQUEST = 'GET_RESOURCE_REQUEST';
export const GET_RESOURCE_SUCCESS = 'GET_RESOURCE_SUCCESS';
export const GET_RESOURCE_FAILURE = 'GET_RESOURCE_FAILURE';

export function getResourceRequest() {
  return {
    type: GET_RESOURCE_REQUEST
  };
}

export function getResourceSuccess(data) {
  return {
    type: GET_RESOURCE_SUCCESS,
    data
  };
}

export function getResourceFailure(error) {
  return {
    type: GET_RESOURCE_FAILURE,
    error
  };
}

const checkStatus = (response) => {
  if (!response.ok) {
    const error = new Error(response.message);
    error.response = response;
    throw error;
  }

  return response.json();
};

export function getResources(resourceName) {
  return (dispatch) => {
    dispatch(getResourceRequest());

    if (resourceName) {
      fetch(`https://swapi.co/api/${ resourceName }/`)
        .then(checkStatus)
        .then(json => {
          dispatch(getResourceSuccess(json));
        })
        .catch(error => {
          dispatch(getResourceFailure(error));
        });

    } else {
      dispatch(getResourceFailure(new Error('No Resource given')));
    }
  };
}
