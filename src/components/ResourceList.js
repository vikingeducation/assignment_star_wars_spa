import React from "react";
import { Panel } from "react-bootstrap";
import Loadable from "./Loadable";

const Film = info => (
  <Panel key={info.title} header={<h3>{info.title}</h3>}>
    <p>{info.opening_crawl}</p>
  </Panel>
);

const Person = info => (
  <Panel key={info.name} header={<h3>{info.name}</h3>}>
    <p>Born: {info.birth_year}</p>
  </Panel>
);

const resourceMap = {
  people: Person,
  films: Film
};

const ResourceList = ({ resource, list, status }) => (
  <Loadable condition={!status.isFetching}>
    {list.map(res => resourceMap[resource](res))}
  </Loadable>
);

export default ResourceList;
