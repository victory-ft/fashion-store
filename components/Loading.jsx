"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
	display: "block",
	margin: "auto",
};

const Loading = ({ loading }) => {
	return (
		<ClipLoader
			color="#fff"
			loading={loading}
			cssOverride={override}
			size={16}
			aria-label="Loading Spinner"
		/>
	);
};

export default Loading;
