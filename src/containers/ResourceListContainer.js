import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ResourceList from "../components/ResourceList";
import { fetchList } from "../actions";
import queryString from "query-string";

class ResourceListContainer extends Component {
  componentDidMount() {
    this.props.fetchList(this.props.match.params.type, this.props.page);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.fetchList(this.props.match.params.type, this.props.page);
    }
  }

  render() {
    return <ResourceList {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const page = queryString.parse(ownProps.location.search).page || 1;
  return {
    list: state.resources.list,
    prev: state.resources.prev ? +page - 1 : null,
    next: state.resources.next ? +page + 1 : null,
    type: state.resources.type,
    status: state.status,
    page
  };
};

const mapDispatchToProps = dispatch => ({
  fetchList: (type, page) => dispatch(fetchList(type, page))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ResourceListContainer)
);
