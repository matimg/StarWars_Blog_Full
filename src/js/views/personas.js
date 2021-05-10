import React, { useContext } from "react";
import { Context } from "../store/appContext";
const Personas = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<h1>Personas</h1>
			<ul className="list-group">
				{store.personas.map((item, index) => {
					return <li key={index}>{item.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default Personas;
