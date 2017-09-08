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
		if (!this.props.PlanetReducer.planet) return <Loadable condition={false} />;
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
								{name} - (Pop: {population})
							</strong>
						</h1>
					</div>
					<div className="card-body">
						<h4 className="card-title">
							{`${residents.length} main characters from Star Wars live here.`}
						</h4>
						<div className="row">
							<div className="col-md-6">
								<p>
									<strong>Terrain: </strong> {terrain}
								</p>
								<p>
									<strong>Climate: </strong> {climate}
								</p>
								<p>
									<strong>Gravity: </strong> {gravity}
								</p>
							</div>
							<div className="col-md-6">
								<p>
									<strong>Diameter: </strong> {diameter} miles
								</p>
								<p>
									<strong>Orbital Period: </strong> {orbital_period} days
								</p>
								<p>
									<strong>Rotation Period: </strong> {rotation_period} hours
								</p>
							</div>
							<hr />
							<ul>
								{residents.map(resident =>
									<li key={resident.name}>
										{resident.name}
									</li>
								)}
							</ul>
						</div>
					</div>
				</div>
			</Loadable>
		);
	}
}

export default PlanetView;
