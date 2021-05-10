import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Planetas = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<h1>Planetas</h1>
			<ul className="list-group">
				{store.planetas.map((item, index) => {
					return <li key={index}>{item.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default Planetas;
