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
  list: state.resources.list,
  prev: state.resources.prev,
  next: state.resources.next,
  type: state.resources.type,
  status: state.status,
  page: ownProps.page
});

const mapDispatchToProps = dispatch => ({
  fetchList: (resource, page) => dispatch(fetchList(resource, page))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ResourceListContainer)
);
