"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import "@/assets/styles/Auth.scss";
import Loading from "@/components/Loading";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const router = useRouter();

	async function login(e) {
		e.preventDefault();
		try {
			setError("");
			setLoading(true);
			const response = await fetch(
				"https://fashion-ecommerce-backend.onrender.com/account/login-user/",
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, password }),
				},
			);
			const res = await response.json();
			if (response.status === 401) {
				setError("User does not Exist");
			}
			if (response.ok) {
				Cookies.set("token", res.access);
				router.push("/");
			}
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
			<form onSubmit={login}>
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
				<button className="login" disabled={loading}>
					{loading ? <Loading loading={loading} /> : "Login"}
				</button>
			</form>
			{error && <p className="error-auth">{error}</p>}

			<p className="auth-link">
				Don't have an account? <Link href="/signup">Sign up</Link>
			</p>
		</div>
	);
};

export default LoginPage;
