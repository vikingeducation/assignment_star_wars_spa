import { connect } from "react-redux";
import Search from "../components/Search";
import {
  getFilmsFromAPI,
  getPeopleFromAPI,
  getPlanetsFromAPI
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