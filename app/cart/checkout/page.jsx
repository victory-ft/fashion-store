"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";
import Loading from "@/components/Loading";
import "@/assets/styles/Checkout.scss";

const CheckoutPage = () => {
	const searchParams = useSearchParams();

	const price = searchParams.get("price");

	const router = useRouter();

	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	async function makePayment(e) {
		e.preventDefault();
		const token = Cookies.get("token");
		setError("");
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
		} catch (error) {
			setError("An error occurred, please try again.");
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="checkout-container">
			<form action="#">
				<Image
					src="https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
					height={0}
					width={0}
					alt="visa"
					unoptimized
					style={{ width: "300px", height: "150px" }}
				/>
				<div className="checkout-row">
					<div className="checkout-input">
						<label htmlFor="card-number">Card Number</label>
						<input
							type="number"
							name="card-number"
							placeholder="5399 3498 0129 0393"
							required
						/>
					</div>
				</div>
				<div className="checkout-row">
					<div className="checkout-input">
						<label htmlFor="card-holder">Card Holder</label>
						<input
							type="text"
							name="card-holder"
							placeholder="John Doe"
							required
						/>
					</div>
				</div>
				<div className="checkout-row">
					<div className="checkout-input">
						<label htmlFor="card-expiry">Expires</label>
						<input
							type="text"
							name="card-expiry"
							placeholder="02/24"
							required
						/>
					</div>
					<div className="checkout-input">
						<label htmlFor="cvv">CVV/CVC</label>
						<input type="number" name="cvv" placeholder="999" required />
					</div>
				</div>
				<div className="checkout-row">
					<div className="checkout-input">
						<label htmlFor="password">
							Enter your account password to confirm
						</label>
						<input
							type="password"
							name="password"
							onClick={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
				</div>
				{error && <p className="error-big">{error}</p>}
				<button onClick={(e) => makePayment(e)}>
					{loading ? <Loading /> : ` Pay $${price} CAD`}
				</button>
			</form>
		</div>
	);
};

export default CheckoutPage;
