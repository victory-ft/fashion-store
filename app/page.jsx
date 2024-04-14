"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ItemCard from "@/components/ItemCard";
import headerImg from "@/public/images/header.png";
import mustHave from "@/public/images/musthave.png";
import LoadingPage from "@/components/PageLoading";
import man from "@/public/images/man3.png";
import woman from "@/public/images/woman1.png";
import child from "@/public/images/child1.png";
import "@/assets/styles/Index.scss";

export default function Home() {
	const router = useRouter();

	const [products, setProducts] = useState([]);
	const [displayedProducts, setDisplayedProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	async function getProducts() {
		try {
			const response = await fetch(
				"https://fashion-ecommerce-backend.onrender.com/products/all/",
				{
					method: "GET",
				},
			);
			const res = await response.json();
			// console.log(res);
			setProducts(res.slice(0, 3));
			setDisplayedProducts(res.slice(0, 3));
		} catch (error) {
			setError("An error occurred, please try again.");
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="home">
			<div className="header-section">
				<div className="left">
					<h1 className="main-header header-section-header">
						Find The Best Style For You
					</h1>
					<p className="secondary-text">
						We curate a constantly evolving collection, so you can always find
						the latest looks to elevate your style.
					</p>
					<button onClick={() => router.push("/category/all")}>Shop Now</button>
				</div>
				<Image src={headerImg} alt="person" className="header-img" priority />
			</div>
			<div className="arrivals">
				<h1 className="main-header">New Arrivals</h1>
				<div className="item-card-container">
					{loading ? (
						<div className="load-container">
							<LoadingPage />
						</div>
					) : error ? (
						<div className="category-item-container">
							<p className="error-big">{error}</p>
						</div>
					) : (
						<>
							{/* <div className="category-item-container"> */}
							{products.length !== 0 &&
								displayedProducts.map((product) => {
									return (
										<ItemCard
											key={product.id}
											id={product.id}
											image={product.image}
											name={product.title}
											price={`${product.price} CAD`}
										/>
									);
								})}
							{/* </div> */}
						</>
					)}
				</div>
			</div>

			<div className="more-about-section">
				<Image
					src={mustHave}
					alt="person"
					className="header-img"
					height={0}
					width={0}
					style={{ width: "400px", height: "500px" }}
				/>
				<div className="right">
					<h1 className="main-header header-section-header">
						Killin' It Since 2023
					</h1>
					<p className="secondary-text">
						We're all about bringing you the freshest looks that'll set you
						apart from the crowd. Whether you're searching for statement pieces
						or everyday essentials, we have something to turn heads and keep you
						lookin' your finest. From the runway to the streets, we're here to
						fuel your fire.
					</p>
				</div>
			</div>
		</div>
	);
}
