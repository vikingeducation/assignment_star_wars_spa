import React, { Component } from 'react';
import { NavLink, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import ReactLoading from 'react-loading';
import PlanetsList from './PlanetsList';

class PlanetsHome extends Component {
	componentDidMount() {
		this.props.actions.getInitialPlanets();
	}

	render() {
		console.log(this.props.PlanetsReducer.planets);
		if (!this.props.PlanetsReducer.planets.length)
			return <ReactLoading type="spinningBubbles" color="#444" />;
		return (
			<div className="container">
				<Header text="Planets Home Page" />
				<hr />
				<PlanetsList planets={this.props.PlanetsReducer.planets} />
			</div>
		);
	}
}

export default PlanetsHome;
