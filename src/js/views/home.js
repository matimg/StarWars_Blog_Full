import React, { useContext } from "react";
import personaje from "../../img/personaje.jpg";
import planeta from "../../img/planeta.png";
import "../../styles/home.scss";
import Card from "../component/card";
import { Context } from "../store/appContext";
import Spinner from "../component/spinner";

export const Home = () => {
	const { store, actions } = useContext(Context);
	if (store.loading) {
		return <Spinner />;
	} else {
		return (
			<div className="container-fluid mt-5 pt-5">
				<h2 className="text-warning">Characters</h2>
				<div className="row flex-row flex-nowrap" style={{ overflowX: "auto", overflowY: "hidden" }}>
					{store.personas.map((item, index) => {
						return (
							<Card
								key={index}
								name={item.name}
								id={item.uid}
								image={store.personajesImg[index]}
								detalle="/character_details/"
								index={index}
							/>
						);
					})}
				</div>
				<br />
				<h2 className="text-warning">Planets</h2>
				<div className="row flex-row flex-nowrap" style={{ overflowX: "auto", overflowY: "hidden" }}>
					{store.planetas.map((item, index) => {
						return (
							<Card
								key={index}
								name={item.name}
								id={item.uid}
								image={store.planetasImg[index]}
								detalle="/planet_details/"
								index={index + 10}
							/>
						);
					})}
				</div>
			</div>
		);
	}
};
