import React, { Component } from "react";
import { NavLink, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import ReactLoading from "react-loading";

class PlanetsHome extends Component {
  componentDidMount() {
    this.props.actions.getInitialPlanets();
  }

  render() {
    console.log(this.props.PlanetsReducer);
    if (!this.props.PlanetsReducer.planets.length)
      return <ReactLoading type="spinningBubbles" color="#444" />;
    return (
      <div className="container">
        <Header text="Planets Home Page" />
        <hr />
      </div>
    );
  }
}

export default PlanetsHome;
