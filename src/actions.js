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

export function getResources(resourceName, page, searchQuery) {
  return (dispatch) => {
    dispatch(getResourceRequest());

    if (resourceName) {
      fetch(`https://swapi.co/api/${ resourceName }/?${ page ? 'page=' + page : '' }&search=${ searchQuery || '' }`)
        .then(checkStatus)
        .then(json => {
          if (resourceName === 'people') {
            getPeopleInfo(json, dispatch);
          } else if (resourceName === 'species') {
            getSpeciesInfo(json, dispatch);
          } else {
            dispatch(getResourceSuccess(json));
          }
        })
        .catch(error => {
          dispatch(getResourceFailure(error));
        });

    } else {
      dispatch(getResourceFailure(new Error('No Resource given')));
    }
  };
}

function getPeopleInfo(json, dispatch) {
  new Promise(resolve => {
    const attributePromises = [];

    for (let person of json.results) {
      person.speciesString = '';

      if (!person.species.length) {
        person.speciesString = 'Unknown';
      } else {
        // save all species
        attributePromises.push(fetch(person.species)
          .then(checkStatus)
          .then(speciesJson => {
            if (person.speciesString === '') {
              person.speciesString += speciesJson.name;
            } else {
              person.speciesString += `, ${ speciesJson.name }`;
            }
          }));
      }
      // save person's homeworld
      attributePromises.push(fetch(person.homeworld)
        .then(checkStatus)
        .then(worldJson => {
          person.homeworld = worldJson.name;
        })
      );
    }
    Promise.all(attributePromises).then(() => resolve(json));
  })
    .then(json => {
      dispatch(getResourceSuccess(json));
    })
    .catch(error => dispatch(getResourceFailure(error)));
}

function getSpeciesInfo(json, dispatch) {
  new Promise(resolve => {
    const homeWorldPromises = [];

    for (let species of json.results) {
      if (!species.homeworld) {
        species.homeworld = 'n/a';
      } else {
        homeWorldPromises.push(fetch(species.homeworld)
          .then(checkStatus)
          .then(homeworldJson => {
            species.homeworld = homeworldJson.name;
          }));
      }
    }
    Promise.all(homeWorldPromises).then(() => resolve(json));
  })
    .then(json => {
      dispatch(getResourceSuccess(json));
    })
    .catch(error => dispatch(getResourceFailure(error)));
}
