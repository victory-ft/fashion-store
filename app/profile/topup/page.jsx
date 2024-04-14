"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";
import Loading from "@/components/Loading";
import "@/assets/styles/Checkout.scss";

const TopupPage = () => {
	const router = useRouter();

	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [cardNo, setCardNo] = useState("");
	const [cardExp, setCardExp] = useState("");
	const [cardExp1, setCardExp1] = useState("");
	const [cvv, setCvv] = useState("");
	const [amount, setPrice] = useState("");

	async function makePayment(e) {
		e.preventDefault();
		const token = Cookies.get("token");
		if (cardNo.length < 15 || cardNo.length > 19) {
			setError("Card number should be between 15 and 19 digits long");
			return;
		}
		if (!cardExp) {
			setError("Please include card expiry date");
			return;
		}
		if (cvv.length < 3 || cvv.length > 3) {
			setError("CVV should be 3 digits long");
			return;
		}
		if (amount.length == 0) {
			setError("Please enter top up amount");
			return;
		}
		setError("");
		try {
			setLoading(true);
			const response = await fetch(
				"https://fashion-ecommerce-backend.onrender.com/account/topup-balance/",
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({ amount: parseInt(amount) }),
				},
			);

			if (response.ok) {
				router.push("/profile");
			}
			if (!response.ok) {
				// console.log(response.json());
				setError("An error occurred, please try again.");
			}
		} catch (error) {
			setError("An error occurred, please try again.");
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
					{/* <br /> */}
					<div className="checkout-input ">
						<label htmlFor="card-expiry" className="exp-la">
							Expires
						</label>
						<input
							type="number"
							name="card-expiry"
							// placeholder="02/24"
							required
							onChange={(e) => setCardExp(e.target.value)}
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
						<label htmlFor="topup">Enter amount to top up</label>
						<input
							type="number"
							name="topup"
							onKeyUp={(e) => setPrice(e.target.value)}
							required
						/>
					</div>
				</div>
				{error && <p className="error-big">{error}</p>}
				<button>{loading ? <Loading /> : `Top up`}</button>
			</form>
		</div>
	);
};

export default TopupPage;
