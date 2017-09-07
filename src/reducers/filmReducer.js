import { filmActions } from '../actions';

const initialState = {
	films: [],
	isFetching: false,
	error: null
};

export const GET_FILMS_REQUEST = 'GET_FILMS_REQUEST';
export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILMS_FAILURE = 'GET_FILMS_FAILURE';

export default (state = initialState, action) => {
	switch (action.type) {
		case filmActions.GET_FILMS_REQUEST:
			return {
				...state,
				isFetching: true,
				error: null
			};

		case filmActions.GET_FILMS_SUCCESS:
			return {
				...state,
				films: action.data,
				isFetching: false
			};

		case filmActions.GET_FILMS_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};

		default:
			return state;
	}
};
