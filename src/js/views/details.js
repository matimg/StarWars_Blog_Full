import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Spinner from "../component/spinner";
import { Footer } from "../component/footer";

const Details = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPersona(params.id);
	}, []);

	if (store.loading) {
		return <Spinner />;
	} else {
		return (
			<>
				<div className="container pt-5 mt-5 text-center">
					<div className="container pt-2 mt-2" style={{ backgroundColor: "#282727" }}>
						<div className="row p-3">
							<div className="col-6">
								<img className="card-img-top" src={store.personajesImg[params.id - 1]} height="450px" />
							</div>
							<div className="col-6 text-white text-center">
								<h1 className="text-warning">{store.propiedades.name}</h1>
								<p>{store.persona.description}</p>
							</div>
						</div>
						<div className="row border-top border-danger text-danger text-center">
							<div className="col-2">
								<p>Name</p>
								<p className="text-white">{store.propiedades.name}</p>
							</div>
							<div className="col-2">
								<p>Birt Year</p>
								<p className="text-white">{store.propiedades.birth_year}</p>
							</div>
							<div className="col-2">
								<p>Gender</p>
								<p className="text-white">{store.propiedades.gender}</p>
							</div>
							<div className="col-2">
								<p>Height</p>
								<p className="text-white">{store.propiedades.height}</p>
							</div>
							<div className="col-2">
								<p>Skin Color</p>
								<p className="text-white">{store.propiedades.skin_color}</p>
							</div>
							<div className="col-2">
								<p>Eye Color</p>
								<p className="text-white">{store.propiedades.eye_color}</p>
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

export default Details;
