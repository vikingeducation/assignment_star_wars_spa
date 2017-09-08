import React, { Component } from 'react';
import { NavLink, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Loadable from './Loadable';
import extractResourceData from '../util/extractResourceData';

class PlanetView extends Component {
	componentDidMount() {
		this.props.getResources('planets', undefined, this.props.match.params.id);
	}

	render() {
		if (!this.props.resources.length) return <Loadable condition={false} />;
		const resourceData = extractResourceData(
			this.props.schema,
			this.props.resources
		);
		console.log(resourceData);
		return (
			<Loadable condition={!this.props.isFetching}>
				<div className="card bg-light mb-3">
					<div className="card-header">
						<h1>
							<strong>
								{resourceData.name} - (Pop: {resourceData.population})
							</strong>
						</h1>
					</div>
					<div className="card-body">
						<h4 className="card-title">
							{`${resourceData.residents
								.length} main characters from Star Wars live here.`}
						</h4>
						<div className="row">
							<div className="col-md-6">
								<p>
									<strong>Terrain: </strong> {resourceData.terrain}
								</p>
								<p>
									<strong>Climate: </strong> {resourceData.climate}
								</p>
								<p>
									<strong>Gravity: </strong> {resourceData.gravity}
								</p>
							</div>
							<div className="col-md-6">
								<p>
									<strong>Diameter: </strong> {resourceData.diameter} miles
								</p>
								<p>
									<strong>Orbital Period: </strong>{' '}
									{resourceData.orbital_period} days
								</p>
								<p>
									<strong>Rotation Period: </strong>{' '}
									{resourceData.rotation_period} hours
								</p>
							</div>
							<hr />
							<ul>
								{resourceData.residents.map(resident =>
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
