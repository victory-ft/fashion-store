"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "@/assets/styles/Auth.scss";
import Loading from "@/components/Loading";

const SignUpPage = () => {
	const [fullname, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm_password, setConfirmPassword] = useState("");
	const [phone_number, setPhone] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const router = useRouter();

	async function signUp(e) {
		e.preventDefault();
		try {
			setError("");
			setLoading(true);
			const response = await fetch(
				"https://fashion-ecommerce-backend.onrender.com/account/create-user/",
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email,
						password,
						fullname,
						confirm_password,
						phone_number,
					}),
				},
			);
			if (response.ok) {
				router.push("/login");
			}
			const res = await response.json();
			console.log(res);

			if (res.non_field_errors) {
				setError(res.non_field_errors);
			}
		} catch (error) {
			setError("An error occurred, please try again.");
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="auth-form-container">
			<form onSubmit={signUp}>
				<div className="form-row">
					<div className="input-data">
						<input
							type="text"
							name="fullname"
							id="fullname"
							onChange={(e) => setFullName(e.target.value)}
							required
						/>
						<div className="underline"></div>
						<label htmlFor="fullname">Full name</label>
					</div>
				</div>
				<div className="form-row">
					<div className="input-data">
						<input
							type="email"
							name="email"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<div className="underline"></div>
						<label htmlFor="email">Email</label>
					</div>
				</div>
				<div className="form-row">
					<div className="input-data">
						<input
							type="password"
							name="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
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
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
						<div className="underline"></div>
						<label htmlFor="confirm_password">Confirm Password</label>
					</div>
				</div>
				<div className="form-row">
					<div className="input-data">
						<input
							type="text"
							name="phone"
							id="phone"
							onChange={(e) => setPhone(e.target.value)}
							required
						/>
						<div className="underline"></div>
						<label htmlFor="fullname">Phone Number</label>
					</div>
				</div>
				<button className="login" disabled={loading}>
					{loading ? <Loading loading={loading} /> : "Sign up"}
				</button>
				{error && <p className="error-auth">{error}</p>}
			</form>
			<p className="auth-link">
				Already have an account? <Link href="/login">Login</Link>
			</p>
		</div>
	);
};

export default SignUpPage;
