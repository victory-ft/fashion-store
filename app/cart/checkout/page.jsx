"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";
import Loading from "@/components/Loading";
import "@/assets/styles/Checkout.scss";
import "@/assets/styles/Auth.scss";

const CheckoutPage = () => {
	const searchParams = useSearchParams();

	const price = searchParams.get("price");

	const router = useRouter();

	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	async function makePayment(e) {
		e.preventDefault();
		setError("");
		const token = Cookies.get("token");
		try {
			setLoading(true);
			const response = await fetch(
				"https://fashion-ecommerce-backend.onrender.com/products/make-payment/",
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({ password }),
				},
			);

			if (response.ok) {
				router.push("/profile/orders");
			}
			if (!response.ok) {
				setError("An error occurred, please try again.");
			}
		} catch (error) {
			setError("An error occurred, please try again.");
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="auth-form-container as">
			<h2 className="con">
				Enter your password to confirm payment of ${price} CAD
			</h2>

			<form onSubmit={(e) => makePayment(e)}>
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
				{error && <p className="error-big">{error}</p>}
				<button className="login">{loading ? <Loading /> : `Pay`}</button>
			</form>
		</div>
	);
};

export default CheckoutPage;
