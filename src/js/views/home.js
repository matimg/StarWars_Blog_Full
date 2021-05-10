import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Personas from "./personas";
import Planetas from "./planetas";

export const Home = () => (
	<div className="m-5  d-flex justify-content-center">
		<Personas />
		<Planetas />
	</div>
);
