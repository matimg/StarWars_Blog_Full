import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="col">
			<div className="card border-warning text-white" style={{ width: "250px", backgroundColor: "#282727" }}>
				<img className="card-img-top" src={props.image} height="200px" />

				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>

					<p className="card-text">Is simply dummy text of the printing and typesetting industry.</p>
					<a href="#" className="btn btn-warning">
						Learn more!
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string
};
