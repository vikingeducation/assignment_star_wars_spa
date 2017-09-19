import React, { Component } from "react";
import { NavLink, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";
import PeopleList from "./PeopleList";
import Loadable from "./Loadable";

class PeopleHome extends Component {
  componentDidMount() {
    this.props.actions.getPeople();
  }

  render() {
    return (
      <Loadable condition={!this.props.PeopleReducer.isFetching}>
        <div className="container">
          <Header text="People Home Page" />
          <hr />
          <PeopleList people={this.props.PeopleReducer.people} />
        </div>
      </Loadable>
    );
  }
}

export default PeopleHome;
