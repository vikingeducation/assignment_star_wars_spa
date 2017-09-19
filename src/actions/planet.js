import superagent from 'superagent';
import * as SWAPI from './urlConst';

export const REQUEST_GET_PLANET = 'REQUEST_GET_PLANET';
export const SUCCESS_GET_PLANET = 'SUCCESS_GET_PLANET';
export const FAILURE_GET_PLANET = 'FAILURE_GET_PLANET';

const requestGetPlanet = () => ({
	type: REQUEST_GET_PLANET
});

const successGetPlanet = data => ({
	type: SUCCESS_GET_PLANET,
	data
});

const failureGetPlanet = error => ({
	type: FAILURE_GET_PLANET,
	error
});

export const getPlanet = id => async dispatch => {
	dispatch(requestGetPlanet());
	let url = `${SWAPI.BASE_URL}${SWAPI.PLANETS_URL}${id}${SWAPI.FORMAT_SUFFIX}`;
	try {
		const planet = (await superagent.get(url).buffer()).body;

		planet.residents = await Promise.all(
			planet.residents.map(
				async residentUrl => (await superagent.get(residentUrl).buffer()).body
			)
		);

		dispatch(successGetPlanet(planet));
	} catch (error) {
		dispatch(failureGetPlanet(error));
	}
};
