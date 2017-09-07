import React from "react";
import { StarshipsContainer, SpeciesContainer } from "../Containers";
import { Route } from "react-router-dom";

const Home = () => <h1>HOME</h1>;

const Display = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/starships" component={StarshipsContainer} />
    <Route path="/species" component={SpeciesContainer} />
  </div>
);

export default Display;
