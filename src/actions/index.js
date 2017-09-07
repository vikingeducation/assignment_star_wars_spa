import * as filmActions from './filmActions';
import * as peopleActions from './peopleActions'


// function getGenericRequest() {
//   return {
//     type: GET_GENERIC_REQUEST
//   };
// }

// const genericGetter = () => async dispatch => {
//   dispatch(getGenericRequest());

//   try {
//     const response = await superagent.get('http://swapi.co/api/people/');

//     dispatch(getPeopleSuccess(response.body.results));
//   } catch (e) {
//     dispatch(getPeopleFailure(e));
//   }
// };

export { filmActions, peopleActions,  };
