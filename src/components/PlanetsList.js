import React from 'react';
import { NavLink } from 'react-router-dom';

const extractId = url => {
	url = url.slice(0, -1);
	return url.slice(url.lastIndexOf('/') + 1);
};

const Planet = ({ name, diameter, population, terrain, climate, url }) => {
	return (
		<NavLink className="nav-link" exact to={`/planets/${extractId(url)}`}>
			<li>
				<div className="card">
					<div className="card-body">
						<div className="row">
							<div className="col-md-4">
								<h4 className="card-title">
									{name}
								</h4>
							</div>
							<div className="col-md-4">
								<p className="card-text">
									<strong>Terrain: </strong>
									{terrain}
								</p>
							</div>
							<div className="col-md-4">
								<p className="card-text">
									<strong>Population: </strong>
									{population}
								</p>
							</div>
						</div>

						{/* <p className="card-text">
              <strong>Diameter: </strong>
              {diameter}
            </p>


            <p className="card-text">
              <strong>Climate: </strong>
              {climate}
            </p> */}
					</div>
				</div>
			</li>
		</NavLink>
	);
};

export default ({ planets }) => {
	return (
		<ul className="list-unstyled">
			{planets.map(planet => <Planet key={planet.name} {...planet} />)}
		</ul>
	);
};
