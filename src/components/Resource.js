import React from "react";
import Loadable from "./elements/Loadable";
import Findable from "./elements/Findable";
import { resources } from "../resources";

const Resource = ({ resource, status }) => (
  <Findable condition={!status.error}>
    <Loadable condition={!status.isFetching}>
      {resource.type && resources[resource.type]["single"](resource)}
    </Loadable>
  </Findable>
);

export default Resource;
