import React from "react";
import Loadable from "./elements/Loadable";
import { resources } from "../resources";

const Resource = ({ type, list, status, prev, next, page }) => (
  <Loadable condition={!status.isFetching}>
    <h3>Single Resource</h3>
  </Loadable>
);

export default Resource;
