import React from 'react';
import { withRouter } from 'react-router';
import superagent from 'superagent';

const Starship = props => {
	console.log('Starship line 5', props.location.state);
	const { name, model, manufacturer, crew, length } = props.location.state;

	return (
		<div>
			<ul>
				<li>
					Name: {name}
				</li>
				<li>
					Model: {model}
				</li>
				<li>
					Manufacturer: {manufacturer}
				</li>
				<li>
					Crew: {crew}
				</li>
				<li>
					Ship Length: {length}m
				</li>
			</ul>
		</div>
	);
};

//todo: convert to info desplay
export default withRouter(Starship);
