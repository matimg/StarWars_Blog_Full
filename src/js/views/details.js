import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Details = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPersona(params.id);
	}, []);

	return (
		<div className="container pt-5 mt-5">
			<div className="container pt-3 mt-3" style={{ backgroundColor: "#282727" }}>
				<div className="row p-3">
					<div className="col-6">
						<img
							className="card-img-top"
							src="https://cdn6.dibujos.net/images/listas/140/darth-vader.jpg"
							height="450px"
						/>
					</div>
					<div className="col-6 text-white text-center">
						<h1 className="text-warning">{store.propiedades.name}</h1>
						<p>{store.persona.description}</p>
					</div>
				</div>
				<div className="row border-top border-danger text-danger text-center">
					<div className="col-2">
						<p>Name</p>
						<p>{store.propiedades.name}</p>
					</div>
					<div className="col-2">
						<p>Birt Year</p>
						<p>{store.propiedades.birth_year}</p>
					</div>
					<div className="col-2">
						<p>Gender</p>
						<p>{store.propiedades.gender}</p>
					</div>
					<div className="col-2">
						<p>Height</p>
						<p>{store.propiedades.height}</p>
					</div>
					<div className="col-2">
						<p>Skin Color</p>
						<p>{store.propiedades.skin_color}</p>
					</div>
					<div className="col-2">
						<p>Eye Color</p>
						<p>{store.propiedades.eye_color}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
