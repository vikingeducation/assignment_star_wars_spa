import React, { Component } from 'react';
import { NavLink, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import PlanetsList from './PlanetsList';
import Loadable from './Loadable';

class PlanetsHome extends Component {
	componentDidMount() {
		console.log('fetching planets');
		this.props.getResources('planets');
	}

	render() {
		console.log(this.props);
		return (
			<Loadable condition={!this.props.ResourcesReducer.isFetching}>
				<div className="container">
					<Header text="Planets Home Page" />
					<hr />
					<PlanetsList planets={this.props.ResourcesReducer.resources} />
				</div>
			</Loadable>
		);
	}
}

export default PlanetsHome;
