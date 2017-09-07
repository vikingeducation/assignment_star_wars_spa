import React from "react";
import { Panel, Pager } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loadable from "./Loadable";

const Film = info => (
  <Panel key={info.title} header={<h3>{info.title}</h3>}>
    <p>{info.opening_crawl}</p>
  </Panel>
);

const Person = info => (
  <Panel key={info.name} header={<h3>{info.name}</h3>}>
    <p>
      Born in {info.birth_year}, {info.name} has appeared in {info.films.length}{" "}
      films.
    </p>
  </Panel>
);

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

const resourceMap = {
  people: Person,
  films: Film
};

const ResourceList = ({ type, list, status, prev, next, page }) => {
  prev = prev ? +page - 1 : prev;
  next = next ? +page + 1 : next;
  return (
    <Loadable condition={!status.isFetching}>
      {pager(type, prev, next)}
      {list.map(res => resourceMap[type](res))}
      {pager(type, prev, next)}
    </Loadable>
  );
};

export default ResourceList;
