import React from "react";
import "@/assets/styles/Auth.scss";
import Link from "next/link";

const LoginPage = () => {
	return (
		<div className="auth-form-container">
			<form action="#">
				<div className="form-row">
					<div className="input-data">
						<input type="email" name="email" id="email" required />
						<div className="underline"></div>
						<label htmlFor="email">Email</label>
					</div>
				</div>
				<div className="form-row">
					<div className="input-data">
						<input type="password" name="password" id="password" required />
						<div className="underline"></div>
						<label htmlFor="password">Password</label>
					</div>
				</div>
			</form>
			<button className="login">Login</button>

			<p className="auth-link">
				Don't have an account? <Link href="/signup">Sign up</Link>
			</p>
		</div>
	);
};

export default LoginPage;
