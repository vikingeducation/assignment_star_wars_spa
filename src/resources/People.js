import React from "react";
import { Panel } from "react-bootstrap";

const People = {
  list: info => (
    <Panel key={info.name} header={<h3>{info.name}</h3>}>
      <p>
        Born in {info.birth_year}, {info.name} has appeared in{" "}
        {info.films.length} films.
      </p>
    </Panel>
  )
};

export default People;
