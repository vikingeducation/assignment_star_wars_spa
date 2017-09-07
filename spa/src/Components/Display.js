import React from "react";
import StarshipsContainer from "../Containers/StarshipsContainer";
import SpeciesContainer from "../Containers/SpeciesContainer";
import { Route } from "react-router-dom";
import { ShowableContainer } from "../Containers/ShowableContainer";

const Home = () => <h1>WELCOME TO THE SWAPI MEET</h1>;

const Display = () =>
  <div>
    <ShowableContainer>
      <Route exact path="/" component={Home} />
      <Route path="/starships" component={StarshipsContainer} />
      <Route path="/species" component={SpeciesContainer} />
    </ShowableContainer>
  </div>;

export default Display;
