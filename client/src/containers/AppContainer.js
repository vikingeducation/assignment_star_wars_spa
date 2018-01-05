import React, { Component } from "react";
import { connect } from "react-redux";
// import App from "../components/App";
import { App } from "../components/App";
import serialize from "form-serialize";
import { getStarWars } from "../actions";

class AppContainer extends Component {
  componentDidMount() {
    console.log("props inside app class", this.props);
    this.props.getStarWars();
  }

  render() {
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
    }
  };
};

const AppContainerConnected = connect(mapStateToProps, mapDispatchToProps)(
  AppContainer
);
export default AppContainerConnected;
