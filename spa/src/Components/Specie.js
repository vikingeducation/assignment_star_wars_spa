import React from "react";
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";

export const Specie = ({ specie }) => {
  const list = Object.entries(specie).map(entry => {
    return !Array.isArray(entry[1])
      ? <ListGroupItem key={entry[0]}>
          {entry[0]}: {entry[1]}
        </ListGroupItem>
      : null;
  });

  return (
    <div className="container">
      <Panel>
        <ListGroup>
          {list}
        </ListGroup>
      </Panel>
    </div>
  );
};
