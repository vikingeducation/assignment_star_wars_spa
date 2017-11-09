import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavContainer from "../containers/NavContainer";

//---Views--
import HomeContainer from "../containers/HomeContainer";
import FilmsContainer from "../containers/FilmsContainer";
import FilmContainer from "../containers/FilmContainer";
import PeoplesContainer from "../containers/PeoplesContainer";
import PeopleContainer from "../containers/PeopleContainer";
import PlanetsContainer from "../containers/PlanetsContainer";
import PlanetContainer from "../containers/PlanetContainer";
import SpeciesContainer from "../containers/SpeciesContainer";
import SpecieContainer from "../containers/SpecieContainer";
import StarshipsContainer from "../containers/StarshipsContainer";
import StarshipContainer from "../containers/StarshipContainer";
import VehiclesContainer from "../containers/VehiclesContainer";
import VehicleContainer from "../containers/VehicleContainer";

class App extends Component {
  render() {
    const { infoData } = this.props;
    let nextButton = <div />;
    let previousButton = <div />;
    if (infoData.next) {
      nextButton = (
        <Link
          className="btn btn-primary"
          to={infoData.next.substring(20)}
          key="next"
        >
          <h4>
            next{" "}
            <span role="img" aria-label="next arrow">
              ➡️
            </span>
          </h4>
        </Link>
      );
    }
    if (infoData.previous) {
      previousButton = (
        <Link
          className="btn btn-primary"
          to={infoData.previous.substring(20)}
          key="previous"
        >
          <h4>
            <span role="img" aria-label="left arrow">
              ⬅️
            </span>{" "}
            previous
          </h4>{" "}
        </Link>
      );
    }
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <Route component={NavContainer} />
            <div className="col-sm-9">
              <header className="App-header">
                <h2>Star Wars-pedia</h2>
                <small>
                  Powered by <a href="http://swapi.co">swapi.co</a>
                </small>
              </header>
              <br />
              <Switch>
                <Route exact path="/" component={HomeContainer} />
                <Route path="/films/:id" component={FilmContainer} />
                <Route path="/films/" component={FilmsContainer} />
                <Route path="/people/:id" component={PeopleContainer} />
                <Route path="/people/" component={PeoplesContainer} />
                <Route path="/planets/:id" component={PlanetContainer} />
                <Route path="/planets" component={PlanetsContainer} />
                <Route path="/species/:id" component={SpecieContainer} />
                <Route path="/species" component={SpeciesContainer} />
                <Route path="/starships/:id" component={StarshipContainer} />
                <Route path="/starships" component={StarshipsContainer} />
                <Route path="/vehicles/:id" component={VehicleContainer} />
                <Route path="/vehicles" component={VehiclesContainer} />
                <Route path="/" render={() => <h1>Page Not Found</h1>} />
              </Switch>
              <br />
              {previousButton} {nextButton}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    infoData: state.infoData
  };
};

export default connect(mapStateToProps)(App);
