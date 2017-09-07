import React from "react";
import {NavLink} from "react-router-dom";

const Nav = () => {
	return (
		<ul>
			<NavLink to="/people"><li>People</li></NavLink>
			<NavLink to="/planets"><li>Planets</li></NavLink>
		</ul>
	)
}

export default Nav