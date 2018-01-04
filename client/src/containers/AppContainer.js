import { connect } from "react-redux";
import App from "../components/App";
import serialize from "form-serialize";
import { getStarWars } from "../actions";

const mapStateToProps = state => {
  return {
    entities: state.starWars.entities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStarWars: () => {
      dispatch(getStarWars("films"));
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
