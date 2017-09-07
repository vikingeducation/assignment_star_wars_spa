import React from "react";
import { withRouter } from "react-router-dom";
import ResourceListContainer from "../containers/ResourceListContainer";
const qs = require("query-string");

const Films = ({ location }) => {
  const page = qs.parse(location.search).page || 1;
  return (
    <div>
      <h1>Films</h1>
      <ResourceListContainer resource="films" page={page} />
    </div>
  );
};

export default withRouter(Films);
