import React from "react";
import CartItem from "@/components/CartItem";
import man from "@/public/images/man3.png";
import woman from "@/public/images/woman1.png";
import child from "@/public/images/child1.png";
import "@/assets/styles/Cart.scss";

const CartPage = () => {
	return (
		<div className="cart-container">
			<h1>Your Cart</h1>
			<div className="cart-items">
				<h2 className="cart-header">Product</h2>
				<h2 className="cart-header">Quantity</h2>
				<h2 className="cart-header">Total</h2>
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
		</div>
	);
};

export default CartPage;
