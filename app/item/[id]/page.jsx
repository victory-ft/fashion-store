"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Cookies from "js-cookie";
import LoadingPage from "@/components/PageLoading";
import "@/assets/styles/Item.scss";
import Link from "next/link";

const ItemPage = () => {
	const { id } = useParams();

	const [product, setProduct] = useState([]);
	const [sizes, setSizes] = useState([]);
	const [quantity, setQuantity] = useState(1);
	const [selectedSize, setSelectedSize] = useState("");
	const [loading, setLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [error, setError] = useState("");

	async function getProduct() {
		const token = Cookies.get("token");
		if (token) {
			setIsLoggedIn(true);
		}
		try {
			const response = await fetch(
				`https://fashion-ecommerce-backend.onrender.com/products/product-detail/${id}/`,
				{
					method: "GET",
				},
			);

			const res = await response.json();
			setProduct(res);

			let b = res.size;
			// Check if `b` is a string representation (e.g., "[XS,S,M,L,XL]")
			if (typeof b === "string" && b.startsWith("[") && b.endsWith("]")) {
				const trimmedString = b.slice(1, -1); // Remove square brackets
				const arrayFromTrimmedString = trimmedString
					.split(",")
					.map((item) => item.trim());
				setSizes(arrayFromTrimmedString);
				setSelectedSize(arrayFromTrimmedString[0]);
			} else if (Array.isArray(b)) {
				// If `b` is already an array (e.g., ["XS", "S", "M", "L", "XL"])
				setSizes(b);
				setSelectedSize(b[0]);
				// console.log("its already array: ", b);
			} else {
				setSizes(null);
				// console.log("Invalid size format:", b);
			}
		} catch (error) {
			setError("An error occurred, please try again.");
		} finally {
			setLoading(false);
		}
	}

	const sizeMap = {
		XS: "Extra Small",
		S: "Small",
		M: "Medium",
		L: "Large",
		XL: "Extra Large",
	};

	const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);

	const getFullSize = (size) => {
		if (isNumber(size)) {
			return size;
		} else {
			return sizeMap[size] || "Unknown";
		}
	};

	const changeQuantity = (x) => {
		if (x === "minus") {
			if (quantity === 1) {
				return;
			}
			setQuantity((prev) => prev - 1);
		}
		if (x === "add") {
			setQuantity((prev) => prev + 1);
		}
	};

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<div className="item-container">
			{loading ? (
				<LoadingPage />
			) : error ? (
				<p className="error-big">{error}</p>
			) : (
				<>
					<Image
						src={product.image}
						alt="woman"
						height={0}
						width={0}
						style={{ width: "400px", height: "500px" }}
						className="item-image"
						unoptimized
					/>
					<div className="item-info">
						<h1>{product.title}</h1>
						<h2>${product.price} CAD</h2>

						<div className="size-select">
							{!sizes ? (
								<h2 className="secondary-item-header">Size: No Sizes</h2>
							) : (
								<>
									<h2 className="secondary-item-header">
										Size: {getFullSize(selectedSize)}
									</h2>
									{sizes.map((size) => {
										return (
											<button
												className={`size-btn ${
													size === selectedSize ? "active" : ""
												}`}
												key={size}
												onClick={() => setSelectedSize(size)}
											>
												{size}
											</button>
										);
									})}
								</>
							)}
						</div>

						<div className="quantity-select-container">
							<h2 className="secondary-item-header q">Quantity</h2>
							<div className="quantity-select">
								<button onClick={() => changeQuantity("minus")}>&minus;</button>
								<p>{quantity}</p>
								<button onClick={() => changeQuantity("add")}> &#43; </button>
							</div>
						</div>
						<br />

						{isLoggedIn ? (
							<button className="add-to-cart">Add to cart</button>
						) : (
							<p className="product-details">
								Please <Link href="/login">login</Link> to add item to cart
							</p>
						)}

						<br />
						<br />

						<div className="product-details">
							<h2 className="secondary-item-header">Product Details</h2>
							<p className="product-details">{product.description}</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ItemPage;
