import React from 'react';
import { withRouter } from 'react-router';

const Film = props => {
	console.log('here???', props);
	const { title, description, director, releaseDate } = props.location.state;
	return (
		<div>
			<ul>
				<li>
					{title}
				</li>
				<li>
					About: {description}
				</li>
				<li>
					Directed by: {director}
				</li>
				<li>
					Date of Release: {releaseDate}
				</li>
			</ul>
		</div>
	);
};

//todo: convert to info desplay
export default withRouter(Film);
