import React, { Component } from 'react';
import { NavLink, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Loadable from './Loadable';

class PersonView extends Component {
	componentDidMount() {
		console.log('Person View', this.props);
		this.props.actions.getPerson(this.props.match.params.id);
	}

	render() {
		if (!this.props.PersonReducer.person) return null;
		console.log(this.props);
		const {
			name,
			height,
			mass,
			skin_color,
			eye_color,
			birth_year,
			homeworld,
			hair_color
		} = this.props.PersonReducer.person;
		return (
			<Loadable condition={!this.props.PersonReducer.isFetching}>
				<div className="card bg-light mb-3">
					<div className="card-header">
						<h1>
							<strong>
								{name}
							</strong>
						</h1>
					</div>
					<div className="card-body">
						<h4 className="card-title" />
						<div className="row">
							<div className="col-md-6">
								<p>
									<strong>Height: </strong> {height}
								</p>
								<p>
									<strong>Mass: </strong> {mass} kg
								</p>
								<p>
									<strong>Birth Year </strong> {birth_year}
								</p>
							</div>
							<div className="col-md-6">
								<p>
									<strong>Eye Color: </strong> {eye_color}
								</p>
								<p>
									<strong>Skin Color: </strong> {skin_color}
								</p>
								<p>
									<strong>Hair Color: </strong> {hair_color}
								</p>
							</div>
							<hr />
						</div>
					</div>
				</div>
			</Loadable>
		);
	}
}

export default PersonView;
