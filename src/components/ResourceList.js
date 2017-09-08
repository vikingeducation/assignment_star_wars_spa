import React from "react";
import { Pager } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Loadable from "./elements/Loadable";
import Findable from "./elements/Findable";
import { resources } from "../resources";
import capitalize from "../lib/capitalize";
import getId from "../lib/getId";

const ResourcePager = ({ type, prev, next }) => (
  <Pager>
    <LinkContainer exact to={`/${type}?page=${prev}`}>
      <Pager.Item disabled={!prev} previous>
        &larr; Previous
      </Pager.Item>
    </LinkContainer>
    <LinkContainer exact to={`/${type}?page=${next}`}>
      <Pager.Item disabled={!next} next>
        Next &rarr;
      </Pager.Item>
    </LinkContainer>
  </Pager>
);

const Resource = ({ info, type }) => (
  <Link to={`/${type}/${getId(info.url)}`}>
    {resources[type]["list"](info, type)}
  </Link>
);

const ResourceList = ({ type, list, status, prev, next }) => (
  <Findable condition={!status.error}>
    <Loadable condition={!status.isFetching}>
      <h1>{capitalize(type)}</h1>
      <ResourcePager type={type} prev={prev} next={next} />
      {list.map(info => <Resource key={info.url} info={info} type={type} />)}
      <ResourcePager type={type} prev={prev} next={next} />
    </Loadable>
  </Findable>
);

export default ResourceList;
