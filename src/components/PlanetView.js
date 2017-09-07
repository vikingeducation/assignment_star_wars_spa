import React, { Component } from 'react';
import { NavLink, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Loadable from './Loadable';

class PlanetView extends Component {
	componentDidMount() {
		console.log('Planet View', this.props);
		this.props.actions.getPlanet(this.props.match.params.id);
	}

	render() {
		if (!this.props.PlanetReducer.planet) return null;
		const {
			name,
			diameter,
			population,
			terrain,
			climate,
			gravity,
			orbital_period,
			rotation_period,
			residents,
			url
		} = this.props.PlanetReducer.planet;
		return (
			<Loadable condition={!this.props.PlanetReducer.isFetching}>
				<div className="card bg-light mb-3">
					<div className="card-header">
						<h1>
							<strong>
								{name} - {this.props.PlanetReducer.isFetching}
							</strong>
						</h1>
					</div>
					<div className="card-body">
						<h4 className="card-title">
							{`${residents.length} actors from Star Wars live here.`}
						</h4>
						<p className="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
					</div>
				</div>
			</Loadable>
		);
	}
}

export default PlanetView;
