import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import ResourceReducer from '../reducers/resources';

export default () => createStore(ResourceReducer, applyMiddleware(thunk));
