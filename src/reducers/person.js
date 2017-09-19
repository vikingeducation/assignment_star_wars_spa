import { PersonActions } from '../actions';

const initialState = {
	person: null,
	isFetching: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case PersonActions.REQUEST_GET_PERSON:
			return {
				...state,
				isFetching: true,
				error: null
			};
		case PersonActions.SUCCESS_GET_PERSON:
			return {
				...state,
				person: action.data,
				isFetching: false
			};
		case PersonActions.FAILURE_GET_PERSON:
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
