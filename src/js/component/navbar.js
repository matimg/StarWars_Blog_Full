import React, { useContext } from "react";
import { Link } from "react-router-dom";
import star_wars_img from "../../img/star_wars_icon.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
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
						<div className="bg-dark text-warning text-center ml-1 mr-1 px-1 rounded d-inline">
							{store.favoritos.length}
						</div>
					</button>
					<div className="dropdown-menu dropdown-menu-right bg-dark" aria-labelledby="dropdownMenuButton">
						{store.favoritos.map((item, index) => {
							return (
								<li key={index} className="dropdown-item bg-dark text-white" href="#">
									{item}{" "}
									<i
										type="button"
										className="fas fa-trash ml-2"
										onClick={() => actions.removeFavorito(item)}
									/>
								</li>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
