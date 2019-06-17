import superagent from 'superagent';

export const GET_FILMS_REQUEST = 'GET_FILMS_REQUEST';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILMS_FAILURE = 'GET_FILMS_FAILURE';

export function getFilmsRequest() {
	return {
		type: GET_FILMS_REQUEST
	};
}

export function getFilmsSuccess(data) {
	return {
		type: GET_FILMS_SUCCESS,
		data
	};
}

export function getFilmsFailure(error) {
	return {
		type: GET_FILMS_FAILURE,
		error
	};
}

export const getInitialFilms = () => async dispatch => {
	dispatch(getFilmsRequest());

	try {
		const response = await superagent.get('http://swapi.co/api/films/');

		dispatch(getFilmsSuccess(response.body.results));
	} catch (e) {
		dispatch(getFilmsFailure(e));
	}
};
