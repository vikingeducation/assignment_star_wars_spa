import React from "react";
import { withRouter } from "react-router-dom";
import ResourceListContainer from "../containers/ResourceListContainer";
const qs = require("query-string");

const People = ({ location }) => {
  const page = qs.parse(location.search).page || 1;

  return (
    <div>
      <h1>People</h1>
      <ResourceListContainer resource="people" page={page} />
    </div>
  );
};

export default withRouter(People);
