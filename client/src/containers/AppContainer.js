import React, { Component } from "react";
import { connect } from "react-redux";
// import App from "../components/App";
import { App } from "../components/App";
import serialize from "form-serialize";
import { getStarWars } from "../actions";

class AppContainer extends Component {
  componentDidMount() {
    this.props.getStarWars();
  }

  render() {
    console.log("entities", this.props.entities);
    return (
      <div>
        <App />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    entities: state.starWarsReducer.entities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStarWars: () => {
      dispatch(getStarWars("films"));
    },
    onClick: e => {
      e.preventDefault();
      let query = e.target.name;
      console.log(query);
      dispatch(getStarWars(query));
    }
  };
};

const AppContainerConnected = connect(mapStateToProps, mapDispatchToProps)(
  AppContainer
);
export default AppContainerConnected;
