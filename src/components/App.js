import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import ListResourceContainer from "../containers/ListResourceContainer";
import ShowResourceContainer from "../containers/ShowResourceContainer";
import Welcome from "./Welcome";

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Nav} />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/people" component={ListResourceContainer} />
      <Route exact path="/people/:id" component={ShowResourceContainer} />
      <Route exact path="/planets" component={ListResourceContainer} />
      <Route exact path="/planets/:id" component={ShowResourceContainer} />
      <Route exact path="/films" component={ListResourceContainer} />
      <Route exact path="/films/:id" component={ShowResourceContainer} />
      <Route exact path="/starships" component={ListResourceContainer} />
      <Route exact path="/starships/:id" component={ShowResourceContainer} />
      <Route exact path="/vehicles" component={ListResourceContainer} />
      <Route exact path="/vehicles/:id" component={ShowResourceContainer} />
    </div>
  </Router>
);

export default App;
