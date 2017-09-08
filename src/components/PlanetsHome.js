import React, { Component } from 'react';
import { NavLink, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import PlanetsList from './PlanetsList';
import Loadable from './Loadable';

class PlanetsHome extends Component {
	componentDidMount() {
		this.props.getResources('planets');
	}

	render() {
		console.log('Planets Home', this.props);
		return (
			<Loadable condition={!this.props.isFetching}>
				<div className="container">
					<Header text="Planets Home Page" />
					<hr />
					<PlanetsList planets={this.props.resources} />
				</div>
			</Loadable>
		);
	}
}

export default PlanetsHome;
