import React, { Component } from "react";
import { connect } from "react-redux";
import Resource from "../components/Resource";
import { fetchList } from "../actions";

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

export default connect(mapStateToProps, mapDispatchToProps)(Resource);
