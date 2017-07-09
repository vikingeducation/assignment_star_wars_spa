import { connect } from "react-redux";
import Search from "../components/Search";
import {
  getFilmsFromAPI,
  getPeopleFromAPI,
  getPlanetsFromAPI,
  getSpeciesFromAPI,
  getStarshipsFromAPI,
  getVehiclesFromAPI
} from "../actions";
import serialize from "form-serialize";

const handleDispatch = (dispatch, type, data) => {
  switch(type) {
    case "films":
      return dispatch(getFilmsFromAPI(data));
    case "people": 
      return dispatch(getPeopleFromAPI(data));
    case "planets": 
      return dispatch(getPlanetsFromAPI(data));
    case "species": 
      return dispatch(getSpeciesFromAPI(data));
    case "starships": 
      return dispatch(getStarshipsFromAPI(data));
    case "vehicles": 
      return dispatch(getVehiclesFromAPI(data));
    default:
      return;
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form);
      handleDispatch(dispatch, ownProps.type, data);
    }
  };
};

const SearchContainer = connect(null, mapDispatchToProps)(
  Search
);

export default SearchContainer;