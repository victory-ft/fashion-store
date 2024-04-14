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
	const [cardNo, setCardNo] = useState("");
	const [cardExp, setCardExp] = useState("");
	const [cardExp1, setCardExp1] = useState("");
	const [cvv, setCvv] = useState("");

	async function makePayment(e) {
		e.preventDefault();
		const token = Cookies.get("token");
		if (cardNo.length < 15 || cardNo.length > 19) {
			setError("Card number should be between 15 and 19 digits long");
			return;
		}
		if (!cardExp || !cardExp1) {
			setError("Please include card expiry date");
			return;
		}
		if (cvv.length < 3 || cardNo.length > 3) {
			setError("CVV should be 3 digits long");
			return;
		}
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
		<div className="checkout-container">
			<form onSubmit={(e) => makePayment(e)}>
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
							onChange={(e) => setCardNo(e.target.value)}
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
				<div className="checkout-row exp">
					<label htmlFor="card-expiry" className="exp-la">
						Expires
					</label>
					{/* <br /> */}
					<div className="checkout-input exp">
						<input
							type="number"
							name="card-expiry"
							// placeholder="02/24"
							required
							onChange={(e) => setCardExp(e.target.value)}
						/>
						<span>/</span>
						<input
							type="number"
							name="card-expiry1"
							// placeholder="02/24"
							required
							onChange={(e) => setCardExp1(e.target.value)}
						/>
					</div>
					<div className="checkout-input">
						<label htmlFor="cvv">CVV/CVC</label>
						<input
							type="number"
							name="cvv"
							placeholder="999"
							onChange={(e) => setCvv(e.target.value)}
							required
						/>
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
				<button>{loading ? <Loading /> : ` Pay $${price} CAD`}</button>
			</form>
		</div>
	);
};

export default CheckoutPage;
