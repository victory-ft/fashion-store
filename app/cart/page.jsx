"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";
import CartItem from "@/components/CartItem";
import LoadingPage from "@/components/PageLoading";
import Loading from "@/components/Loading";
import "@/assets/styles/Cart.scss";

const CartPage = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);
	const [loadingP, setLoadingP] = useState(true);
	const [cart, setCart] = useState("");
	const [address, setAddress] = useState("");
	const [total, setTotal] = useState("");
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
					setCart(res);
					setTotal(
						res.reduce((accum, item) => accum + item.quantity * item.price, 0),
					);
					getProfile();
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

	async function getProfile() {
		const token = Cookies.get("token");

		try {
			const response = await fetch(
				"https://fashion-ecommerce-backend.onrender.com/account/user-data/",
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
				setAddress(res.address);
			}
		} catch (error) {
			setError("An error occurred, please try again.");
		} finally {
			setLoadingP(false);
		}
	}

	async function removeFromCart(id) {
		const token = Cookies.get("token");
		try {
			const response = await fetch(
				"https://fashion-ecommerce-backend.onrender.com/products/remove-order/",
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({ pk: id }),
				},
			);

			if (response.ok) {
				getCart();
			}
		} catch (error) {
			// setError("An error occurred, please try again.");
			console.log(error);
		} finally {
			setLoading(false);
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
									<h1>Your Cart</h1>
									<div className="cart-items">
										<h2 className="cart-header product">Product</h2>
										<h2 className="cart-header no-mobile-cart">Quantity</h2>
										<h2 className="cart-header total">Total</h2>
										<h2 className="cart-header"> </h2>
									</div>

									{cart.map((item) => {
										return (
											<CartItem
												key={item.id}
												image={item.image}
												info={{
													name: item.product,
													id: item.id,
													pk: item.product_pk,
													price: item.price,
													quantity: item.quantity,
													size: item.size || "None",
												}}
												isOrder={false}
												removeFromCart={removeFromCart}
											/>
										);
									})}
									<div className="total-price">
										<div className="subtotal">
											<h2>Subtotal:</h2>
											<h2>${total} CAD</h2>
										</div>
										{loadingP ? (
											<button className="checkout" disabled>
												<Loading />
											</button>
										) : !address ? (
											<h2>
												Please{" "}
												<Link href="/profile/address">add an address</Link> to
												checkout
											</h2>
										) : (
											<button
												className="checkout"
												onClick={() => {
													router.push(`/cart/checkout?price=${total}`);
												}}
											>
												Checkout
											</button>
										)}
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
