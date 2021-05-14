import React, { Component } from "react";

export const Footer = () => (
	<footer className="text-center text-white mt-3" style={{ backgroundColor: "#000000" }}>
		<div className="container p-4 pb-0">
			<section className="mb-4">
				<a
					className="btn btn-outline-light btn-floating m-1"
					href="https://www.facebook.com/matias.gandini.3/"
					role="button">
					<i className="fab fa-facebook-f" />
				</a>

				<a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/Matimg07" role="button">
					<i className="fab fa-twitter" />
				</a>

				<a className="btn btn-outline-light btn-floating m-1" href="matias.gandinimg@gmail.com" role="button">
					<i className="fab fa-google" />
				</a>

				<a
					className="btn btn-outline-light btn-floating m-1"
					href="https://www.instagram.com/matimg07"
					role="button">
					<i className="fab fa-instagram" />
				</a>

				<a
					className="btn btn-outline-light btn-floating m-1"
					href="https://www.linkedin.com/in/mat%C3%ADas-gandini-47104a201/"
					role="button">
					<i className="fab fa-linkedin-in" />
				</a>

				<a className="btn btn-outline-light btn-floating m-1" href="https://github.com/matimg" role="button">
					<i className="fab fa-github" />
				</a>
			</section>
		</div>
		<div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
			© 2021 Copyright: &nbsp;
			<a className="text-white" href="#">
				matias.gandinimg@gmail.com
			</a>
		</div>
	</footer>
);
