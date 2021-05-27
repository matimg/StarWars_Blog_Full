import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, StaticRouter } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col">
			<div className="card border-warning text-white" style={{ width: "250px", backgroundColor: "#282727" }}>
				<img className="card-img-top" src={props.image} height="200px" />

				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>

					<p className="card-text">Is simply dummy text of the printing and typesetting industry.</p>
					<Link to={props.detalle + props.id}>
						<button className="btn btn-outline-secondary">Learn more!</button>
					</Link>
					<button
						className={store.btnFavoritos[props.index]}
						onClick={() => actions.addFavorito(props.name, props.index)}>
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	id: PropTypes.number,
	detalle: PropTypes.string,
	index: PropTypes.number
};
