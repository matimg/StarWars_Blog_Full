import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Details = () => {
	const [persona, setPersona] = useState({});
	const [propiedades, setPropiedades] = useState({});
	const params = useParams();

	const getInfo = async () => {
		try {
			const res = await fetch("https://www.swapi.tech/api/people/" + params.id);
			const data = await res.json();
			setPersona(data.result);
			setPropiedades(data.result.properties);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getInfo();
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
						<h1 className="text-warning">{propiedades.name}</h1>
						<p>{persona.description}</p>
					</div>
				</div>
				<div className="row border-top border-danger text-danger text-center">
					<div className="col-2">
						<p>Name</p>
						<p>{propiedades.name}</p>
					</div>
					<div className="col-2">
						<p>Birt Year</p>
						<p>{propiedades.birth_year}</p>
					</div>
					<div className="col-2">
						<p>Gender</p>
						<p>{propiedades.gender}</p>
					</div>
					<div className="col-2">
						<p>Height</p>
						<p>{propiedades.height}</p>
					</div>
					<div className="col-2">
						<p>Skin Color</p>
						<p>{propiedades.skin_color}</p>
					</div>
					<div className="col-2">
						<p>Eye Color</p>
						<p>{propiedades.eye_color}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
