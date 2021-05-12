import React from "react";
import { Link } from "react-router-dom";
import star_wars_img from "../../img/star_wars_icon.png";

export const Navbar = () => {
	return (
		<nav
			className="navbar fixed-top navbar-light mb-3 d-flex justify-content-between"
			style={{ backgroundColor: "#000000" }}>
			<div />
			<Link to="/">
				<img className="" src={star_wars_img} height="80px" width="200px" />
			</Link>
			<div className="">
				<div className="dropdown">
					<button
						className="btn btn-warning dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
					</button>
					<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
