import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="col">
			<div className="card bg-dark text-white p-3" style={{ height: "250px", width: "250px" }}>
				<img className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<a href="#" className="btn btn-primary">
						Learn more!
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	name: PropTypes.string
};
