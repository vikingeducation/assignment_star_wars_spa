import React from "react";
import { Panel } from "react-bootstrap";

const Films = {
  list: info => (
    <Panel
      header={
        <h3>
          {info.title} <small>Episode {info.episode_id}</small>
        </h3>
      }
    >
      <p>{info.opening_crawl}</p>
    </Panel>
  ),
  single: info => (
    <div>
      <h1>
        {info.title} <small>Episode {info.episode_id}</small>
      </h1>
      <p>{info.opening_crawl}</p>
      <p>Director: {info.director}</p>
      <p>Producer: {info.producer}</p>
      <p>Release Date: {info.release_date}</p>
    </div>
  )
};

export default Films;
