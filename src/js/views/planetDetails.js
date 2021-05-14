import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Spinner from "../component/spinner";
import { Footer } from "../component/footer";

const PlanetDetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPlaneta(params.id);
	}, []);
	if (store.loading) {
		return <Spinner />;
	} else {
		return (
			<>
				<div className="container pt-5 mt-5 text-center">
					<div className="container pt-3 mt-3" style={{ backgroundColor: "#282727" }}>
						<div className="row p-3">
							<div className="col-6">
								<img className="card-img-top" src={store.planetasImg[params.id - 1]} height="450px" />
							</div>
							<div className="col-6 text-white text-center">
								<h1 className="text-warning">{store.detallePlaneta.name}</h1>
								<p>{store.planeta.description}</p>
							</div>
						</div>
						<div className="row border-top border-danger text-danger text-center">
							<div className="col-2">
								<p>Name</p>
								<p className="text-white">{store.detallePlaneta.name}</p>
							</div>
							<div className="col-2">
								<p>Climate</p>
								<p className="text-white">{store.detallePlaneta.climate}</p>
							</div>
							<div className="col-2">
								<p>Population</p>
								<p className="text-white">{store.detallePlaneta.population}</p>
							</div>
							<div className="col-2">
								<p>Orbital Period</p>
								<p className="text-white">{store.detallePlaneta.orbital_period}</p>
							</div>
							<div className="col-2">
								<p>Rotation Period</p>
								<p className="text-white">{store.detallePlaneta.rotation_period}</p>
							</div>
							<div className="col-2">
								<p>Diameter</p>
								<p className="text-white">{store.detallePlaneta.diameter}</p>
							</div>
						</div>
					</div>
					<Link to="/">
						<button className="btn btn-warning mt-2">Back</button>
					</Link>
				</div>
				<Footer />
			</>
		);
	}
};

export default PlanetDetails;
