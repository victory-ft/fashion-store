"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import LoadingPage from "@/components/PageLoading";
import CartItem from "@/components/CartItem";
import "@/assets/styles/Cart.scss";
import "@/assets/styles/Profile.scss";

const OrderPage = () => {
	const router = useRouter();

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);
	const [orders, setOrders] = useState([]);
	const [error, setError] = useState("");

	async function getOrders() {
		const token = Cookies.get("token");
		if (token) {
			setIsLoggedIn(true);
			try {
				const response = await fetch(
					"https://fashion-ecommerce-backend.onrender.com/products/get-purchased-products/",
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
					// setProfile(res);
					setOrders(res);
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
		getOrders();
	}, []);

	return (
		<div className="profile">
			{loading ? (
				<LoadingPage />
			) : !isLoggedIn ? (
				<>
					<h1>
						Please <Link href="/login">Login</Link> to view Profile
					</h1>
				</>
			) : (
				<>
					{error ? (
						<p className="error-big">{error}</p>
					) : (
						<>
							<h1>Orders</h1>
							<div className="cart-items">
								<h2 className="cart-header product">Product</h2>
								<h2 className="cart-header no-mobile-cart">Quantity</h2>
								<h2 className="cart-header total">Total</h2>
							</div>
							{orders.length ? (
								orders.map((order) => {
									return (
										<CartItem
											key={order.id}
											image={order.image}
											info={{
												name: order.product,
												id: order.id,
												pk: order.product_pk,
												price: order.price,
												quantity: order.quantity,
												size: order.size || "None",
											}}
											isOrder={true}
										/>
									);
								})
							) : (
								<h2>You haven't made any orders</h2>
							)}
							{/* <p className="profile-info-header">Name</p>
							<p className="profile-info">{profile.fullname}</p>
							<p className="profile-info-header">Address</p>
							<p className="profile-info">
								{profile.address ? (
									profile.address
								) : (
									<span className="no-address">No address added</span>
								)}
							</p>
							<button
								className="address-btn"
								onClick={() => router.push("/profile/address")}
							>
								Edit Address
							</button>
							<br />
							<h2>Order History</h2>
							<p className="no-address">No orders </p>
							<button className="logout" onClick={logout}>
								Log Out
							</button> */}
						</>
					)}
				</>
			)}
		</div>
	);
};

export default OrderPage;
