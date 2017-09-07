import React from 'react';

const Planet = ({ name, diameter, population, terrain, climate }) => {
	return (
		<li>
			<div className="card">
				<img className="card-img-left" src="..." alt="Card image cap" />
				<div className="card-body">
					<h4 className="card-title">Card title</h4>
					<p className="card-text">
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</li>
	);
};

export default ({ planets }) => {
	return (
		<ul className="list-unstyled">
			{planets.map(planet => <Planet key={planet.name} {...planet} />)}
		</ul>
	);
};
