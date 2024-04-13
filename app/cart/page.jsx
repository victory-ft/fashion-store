"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";
import CartItem from "@/components/CartItem";
import man from "@/public/images/man3.png";
import woman from "@/public/images/woman1.png";
import child from "@/public/images/child1.png";
import LoadingPage from "@/components/PageLoading";

import "@/assets/styles/Cart.scss";

const CartPage = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);
	const [cart, setCart] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();

	async function getCart() {
		const token = Cookies.get("token");
		if (token) {
			setIsLoggedIn(true);
			try {
				const response = await fetch(
					"https://fashion-ecommerce-backend.onrender.com/products/get-cart/",
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);

				if (response.ok) {
					const res = await response.json();
					console.log(res);
					setCart(res);
				}
			} catch (error) {
				setError("An error occurred, please try again.");
			} finally {
				setLoading(false);
			}
		} else {
			setLoading(false);
			return;
		}
	}

	useEffect(() => {
		getCart();
	}, []);
	return (
		<div className="cart-container">
			{loading ? (
				<LoadingPage />
			) : !isLoggedIn ? (
				<>
					<h2>
						Please <Link href="/login">Login</Link> to view Cart
					</h2>
				</>
			) : (
				<>
					{error ? (
						<p className="error-big">{error}</p>
					) : (
						<>
							{cart.length ? (
								<>
									{" "}
									<h1>Your Cart</h1>
									<div className="cart-items">
										<h2 className="cart-header product">Product</h2>
										<h2 className="cart-header no-mobile-cart">Quantity</h2>
										<h2 className="cart-header total">Total</h2>
										<h2 className="cart-header"> </h2>
									</div>
									<CartItem
										image={man}
										info={{
											name: "Men's Blue Button Shirt",
											price: 20,
											size: "Large",
										}}
									/>
									<CartItem
										image={woman}
										info={{
											name: "Women's Polkadot Shirt",
											price: 25,
											size: "Medium",
										}}
									/>
									<CartItem
										image={child}
										info={{
											name: "Children Blue Jeans",
											price: 10,
											size: "Small",
										}}
									/>
									<div className="total-price">
										<div className="subtotal">
											<h2>Subtotal:</h2>
											<h2>$99.98 CAD</h2>
										</div>
										<button className="checkout">Checkout</button>
									</div>
								</>
							) : (
								<div className="center-empty-cart">
									<h2>Your Cart is empty</h2>
									<button
										className="continue-shopping"
										onClick={() => router.push("/category/all")}
									>
										Continue Shopping
									</button>
								</div>
							)}
						</>
					)}
				</>
			)}
		</div>
	);
};

export default CartPage;
