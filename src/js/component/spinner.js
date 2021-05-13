import React from "react";

const Spinner = () => {
	return (
		<div className="m-0 vh-100 row text-center align-content-center justify-content-center">
			<div className="col-auto">
				<div className="spinner-border text-warning" role="status" style={{ width: "100px", height: "100px" }}>
					<span className="sr-only" />
				</div>
			</div>
		</div>
	);
};

export default Spinner;
