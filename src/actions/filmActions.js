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
