import React from "react";
import { Link } from "react-router-dom";
import star_wars_img from "../../img/starwars_logo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<img src={star_wars_img} height="50px" width="65px" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
