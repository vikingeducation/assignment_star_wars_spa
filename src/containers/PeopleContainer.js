import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import People from "../components/People";
import { getPeople } from "../actions";
import parse from "url-parse";

class PeopleContainer extends Component {
  componentDidMount() {
    console.log("PROPS", this.props);
    let url = parse(this.props.location.search, true);
    let page = url.query.page || 1;
    this.props.getPeople(page);
  }
  render() {
    const { people, isFetching } = this.props;
    return <People people={people} isFetching={isFetching} />;
  }
}

const mapStateToProps = state => {
  return {
    people: state.people,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPeople: page => {
      dispatch(getPeople(1));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)
);
