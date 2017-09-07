import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ResourceList from "../components/ResourceList";
import { fetchList } from "../actions";

class ResourceListContainer extends Component {
  componentDidMount() {
    this.props.fetchList(this.props.resource, this.props.page);
  }

  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      this.props.fetchList(this.props.resource, this.props.page);
    }
  }

  render() {
    return <ResourceList {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: state[ownProps.resource].list,
  prev: state[ownProps.resource].prev,
  next: state[ownProps.resource].next,
  page: ownProps.page,
  status: state.status,
  resource: ownProps.resource
});

const mapDispatchToProps = dispatch => ({
  fetchList: (resource, page) => dispatch(fetchList(resource, page))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ResourceListContainer)
);
