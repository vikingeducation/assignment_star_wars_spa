import React from "react";
import { Panel } from "react-bootstrap";

const Films = {
  list: info => (
    <Panel key={info.title} header={<h3>{info.title}</h3>}>
      <p>{info.opening_crawl}</p>
    </Panel>
  )
};

export default Films;
