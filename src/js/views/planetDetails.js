import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetDetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPlaneta(params.id);
	}, []);
	return (
		<div className="container pt-5 mt-5">
			<div className="container pt-3 mt-3" style={{ backgroundColor: "#282727" }}>
				<div className="row p-3">
					<div className="col-6">
						<img
							className="card-img-top"
							src="https://i.pinimg.com/originals/e0/c9/bd/e0c9bd2e3166c58a9aea8bb85f20e8a9.jpg"
							height="450px"
						/>
					</div>
					<div className="col-6 text-white text-center">
						<h1 className="text-warning">{store.detallePlaneta.name}</h1>
						<p>{store.planeta.description}</p>
					</div>
				</div>
				<div className="row border-top border-danger text-danger text-center">
					<div className="col-2">
						<p>Name</p>
						<p>{store.detallePlaneta.name}</p>
					</div>
					<div className="col-2">
						<p>Climate</p>
						<p>{store.detallePlaneta.climate}</p>
					</div>
					<div className="col-2">
						<p>Population</p>
						<p>{store.detallePlaneta.population}</p>
					</div>
					<div className="col-2">
						<p>Orbital Period</p>
						<p>{store.detallePlaneta.orbital_period}</p>
					</div>
					<div className="col-2">
						<p>Rotation Period</p>
						<p>{store.detallePlaneta.rotation_period}</p>
					</div>
					<div className="col-2">
						<p>Diameter</p>
						<p>{store.detallePlaneta.diameter}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlanetDetails;
