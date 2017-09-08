import React from "react";
import { Pager } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
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

const ResourceList = ({
  type,
  list,
  status,
  prev,
  next,
  search,
  updateSearch
}) => (
  <Findable condition={!status.error}>
    <h1>{capitalize(type)}</h1>
    <FormGroup>
      <ControlLabel>Search</ControlLabel>
      <FormControl
        onChange={updateSearch}
        type="text"
        name="search"
        value={search}
      />
    </FormGroup>
    <ResourcePager type={type} prev={prev} next={next} />
    <Loadable condition={!status.isFetching}>
      {list.map(info => <Resource key={info.url} info={info} type={type} />)}
    </Loadable>
    <ResourcePager type={type} prev={prev} next={next} />
  </Findable>
);

export default ResourceList;
