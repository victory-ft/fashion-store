import React from "react";
import Link from "next/link";
import "@/assets/styles/Auth.scss";

const SignUpPage = () => {
	return (
		<div className="auth-form-container">
			<form action="#">
				<div className="form-row">
					<div className="input-data">
						<input type="text" name="fullname" id="fullname" required />
						<div className="underline"></div>
						<label htmlFor="fullname">Full name</label>
					</div>
				</div>
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
				<div className="form-row">
					<div className="input-data">
						<input
							type="password"
							name="confirm_password"
							id="confirm_password"
							required
						/>
						<div className="underline"></div>
						<label htmlFor="confirm_password">Confirm Password</label>
					</div>
				</div>
			</form>
			<button className="login">Sign Up</button>
			<p className="auth-link">
				Already have an account? <Link href="/login">Login</Link>
			</p>
		</div>
	);
};

export default SignUpPage;
