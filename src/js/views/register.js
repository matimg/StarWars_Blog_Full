import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const Register = () => {
	const { store, actions } = useContext(Context);
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const history = useHistory();

	const register = e => {
		e.preventDefault();
		actions.register(firstName, lastName, email, password);
		actions.login(email, password);
		history.push("/");
	};

	return (
		<div className="container mt-5 pt-5 d-flex justify-content-center">
			<div
				className="row p-5 m-5 w-50"
				style={{ backgroundColor: "#000000", border: "solid", borderColor: "yellow" }}>
				<div className="col-md-12">
					<div className="well well-sm">
						<form className="form-horizontal" method="post" onSubmit={register}>
							<fieldset>
								<legend className="text-center text-warning header">Create Account</legend>

								<div className="form-group">
									<div className="col-md-12">
										<input
											id="fname"
											name="fname"
											type="text"
											placeholder="First Name"
											className="form-control"
											onChange={e => setFirstName(e.target.value)}
											required
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-md-12">
										<input
											id="lname"
											name="lname"
											type="text"
											placeholder="Last Name"
											className="form-control"
											onChange={e => setLastName(e.target.value)}
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="col-md-12">
										<input
											id="email"
											name="email"
											type="email"
											placeholder="Email Address"
											className="form-control"
											onChange={e => setEmail(e.target.value)}
											required
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="col-md-12">
										<input
											id="password"
											name="password"
											type="password"
											placeholder="Password"
											className="form-control"
											onChange={e => setPassword(e.target.value)}
											required
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-md-12 text-center">
										<button type="submit" className="btn btn-warning btn-lg">
											Submit
										</button>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
