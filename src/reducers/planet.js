import { PlanetActions } from '../actions';

const initialState = {
	planet: null,
	isFetching: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case PlanetActions.REQUEST_GET_PLANET:
			return {
				...state,
				isFetching: true,
				error: null
			};
		case PlanetActions.SUCCESS_GET_PLANET:
			return {
				...state,
				planet: action.data,
				isFetching: false
			};
		case PlanetActions.FAILURE_GET_PLANET:
			console.log('Error:', action.error);
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
};
