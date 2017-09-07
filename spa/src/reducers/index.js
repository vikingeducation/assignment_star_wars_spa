import { combineReducers } from "redux";
import starships from "./starships";
import species from "./species";
import { request } from "./request";

export default combineReducers({ starships, species, request });
