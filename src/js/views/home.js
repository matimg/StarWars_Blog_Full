import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid mt-5 pt-5">
			<h2 className="text-warning">Characters</h2>
			<div className="row flex-row flex-nowrap" style={{ overflowX: "auto", overflowY: "hidden" }}>
				{store.personas.map((item, index) => {
					return (
						<Card
							key={index}
							name={item.name}
							image="https://cdn6.dibujos.net/images/listas/140/darth-vader.jpg"
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
							image="https://i.pinimg.com/originals/e0/c9/bd/e0c9bd2e3166c58a9aea8bb85f20e8a9.jpg"
						/>
					);
				})}
			</div>
		</div>
	);
};
