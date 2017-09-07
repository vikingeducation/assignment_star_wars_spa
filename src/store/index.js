import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import { PlanetsReducer } from "../reducers";
import PlanetsReducer from "../reducers/planets";

console.log("type: ", typeof PlanetsReducer);
console.log(PlanetsReducer);

export default () => createStore(PlanetsReducer, applyMiddleware(thunk));
