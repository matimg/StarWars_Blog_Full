import React from "react";

const Login = () => {
    const [username, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <div className="container mt-5 pt-5 d-flex justify-content-center">
            <div
                className="row p-5 m-5 w-50"
                style={{ backgroundColor: "#000000", border: "solid", borderColor: "yellow" }}>
                <div className="col-md-12">
                    <div className="well well-sm">
                        <form className="form-horizontal" method="post">
                            <fieldset>
                                <legend className="text-center text-warning header">Login</legend>
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

export default Login;
