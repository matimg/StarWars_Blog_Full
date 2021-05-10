import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<h2 className="text-white">Characters</h2>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.personas.map((item, index) => {
					return <Card key={index} name={item.name} />;
				})}
			</div>
		</div>
	);
};
