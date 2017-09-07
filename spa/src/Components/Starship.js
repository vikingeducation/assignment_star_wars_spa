import React from "react";
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";

export const Starship = ({ starship }) => {
  //
  const list = Object.entries(starship).map(entry => {
    return !Array.isArray(entry[1]) ? (
      <ListGroupItem key={entry[0]}>
        {entry[0]}: {entry[1]}
      </ListGroupItem>
    ) : null;
  });

  return (
    <div className="container">
      <Panel>
        <ListGroup>{list}</ListGroup>
      </Panel>
    </div>
  );
};
