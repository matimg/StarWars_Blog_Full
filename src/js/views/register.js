import React from "react";

const Register = () => {
	return (
		<div className="container mt-5 pt-5 d-flex justify-content-center">
			<div
				className="row p-5 m-5 w-50"
				style={{ backgroundColor: "#000000", border: "solid", borderColor: "yellow" }}>
				<div className="col-md-12">
					<div className="well well-sm">
						<form className="form-horizontal" method="post">
							<fieldset>
								<legend className="text-center text-warning header">Create Account</legend>

								<div className="form-group">
									<div className="col-md-12">
										<input
											id="fname"
											name="name"
											type="text"
											placeholder="First Name"
											className="form-control"
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-md-12">
										<input
											id="lname"
											name="name"
											type="text"
											placeholder="Last Name"
											className="form-control"
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="col-md-12">
										<input
											id="email"
											name="email"
											type="text"
											placeholder="Email Address"
											className="form-control"
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
