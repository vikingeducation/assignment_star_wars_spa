import React, { Component } from 'react';
import { NavLink, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import PlanetsList from './PlanetsList';
import Loadable from './Loadable';

class PlanetsHome extends Component {
	componentDidMount() {
		this.props.actions.getInitialPlanets();
	}

	render() {
		return (
			<Loadable condition={!this.props.PlanetsReducer.isFetching}>
				<div className="container">
					<Header text="Planets Home Page" />
					<hr />
					<PlanetsList planets={this.props.PlanetsReducer.planets} />
				</div>
			</Loadable>
		);
	}
}

export default PlanetsHome;
