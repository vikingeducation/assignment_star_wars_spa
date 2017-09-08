import React from "react";
import { Pager } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loadable from "./elements/Loadable";
import Findable from "./elements/Findable";
import { resources } from "../resources";
import capitalize from "../lib/capitalize";

const pager = (resource, prev, next) => (
  <Pager>
    <LinkContainer exact to={`/${resource}?page=${prev}`}>
      <Pager.Item disabled={!prev} previous>
        &larr; Previous
      </Pager.Item>
    </LinkContainer>
    <LinkContainer exact to={`/${resource}?page=${next}`}>
      <Pager.Item disabled={!next} next>
        Next &rarr;
      </Pager.Item>
    </LinkContainer>
  </Pager>
);

const ResourceList = ({ type, list, status, prev, next, page }) => {
  prev = prev ? +page - 1 : prev;
  next = next ? +page + 1 : next;
  return (
    <Findable condition={!status.error}>
      <Loadable condition={!status.isFetching}>
        <h1>{capitalize(type)}</h1>
        {pager(type, prev, next)}
        {list.map(res => resources[type]["list"](res))}
        {pager(type, prev, next)}
      </Loadable>
    </Findable>
  );
};

export default ResourceList;
