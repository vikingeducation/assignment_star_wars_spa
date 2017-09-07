import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Switch
} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import PlanetsHome from '../containers/PlanetsHome';

const NavLinks = props => {
	return (
		<div className="card text-center">
			<div className="card-header">
				<ul className="nav nav-tabs card-header-tabs">
					<li className="nav-item">
						<NavLink className="nav-link" activeclassName="active" exact to="/">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							className="nav-link"
							activeclassName="active"
							exact
							to="/planets"
						>
							Planets
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							className="nav-link"
							activeclassName="active"
							exact
							to="/people"
						>
							People
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="card-body text-left">
				{props.children}
			</div>
		</div>
	);
};

class App extends Component {
	render() {
		return (
			<Router>
				<ScrollToTop>
					<div className="container">
						<NavLinks>
							<Switch>
								<Route
									exact
									path="/"
									render={() => <h1>Star Wars Planets Page</h1>}
								/>
								<Route exact path="/planets" component={PlanetsHome} />
								<Route
									exact
									path="/people"
									render={() => <h1>Star Wars People Page</h1>}
								/>
							</Switch>
						</NavLinks>
					</div>
				</ScrollToTop>
			</Router>
		);
	}
}

export default App;
