import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import People from "../components/People";
import { getPeople } from "../actions";
import parse from "url-parse";

class PeopleContainer extends Component {
  componentDidMount() {
    let url = parse(this.props.location.search, true);
    let page = url.query.page || 1;
    this.setState({
      page
    });
    this.props.getPeople(page);
  }
  render() {
    const { people, isFetching, page } = this.props;
    return <People people={people} isFetching={isFetching} page={page} />;
  }
}

const mapStateToProps = state => {
  return {
    people: state.people,
    page: state.page,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPeople: page => {
      dispatch(getPeople(page));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)
);
