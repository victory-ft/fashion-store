"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchFilter from "@/components/SearchFilter";
import ItemCard from "@/components/ItemCard";
import LoadingPage from "@/components/PageLoading";
import "@/assets/styles/Category.scss";

const AllCategory = () => {
	const searchParams = useSearchParams();

	const q = searchParams.get("q");

	const [products, setProducts] = useState([]);
	const [displayedProducts, setDisplayedProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const [filter, setFilter] = useState({
		maxPrice: "",
		minPrice: "",
	});

	function setFilters(min, max) {
		setFilter({ maxPrice: max, minPrice: min });
	}

	function applyFilter() {
		if (products.length !== 0) {
			const check = products.filter((product) => {
				return (
					product.price <= filter.maxPrice && product.price >= filter.minPrice
				);
			});
			setDisplayedProducts(check);
			console.log(check);
		}
	}

	function resetFilter() {
		setDisplayedProducts(products);
	}

	async function getProducts() {
		try {
			const response = await fetch(
				`https://fashion-ecommerce-backend.onrender.com/products/search/${q}/`,
				{
					method: "GET",
				},
			);
			const res = await response.json();
			// console.log(res);
			setProducts(res);
			setDisplayedProducts(res);
		} catch (error) {
			setError("An error occurred, please try again.");
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getProducts();
	}, []);

	useEffect(() => {
		if (products.length && filter.maxPrice && filter.minPrice) {
			applyFilter();
		}
	}, [filter, products]);

	return (
		<div className="category-container">
			{loading ? (
				<LoadingPage />
			) : error ? (
				<div className="category-item-container">
					<p className="error-big">{error}</p>
				</div>
			) : (
				<>
					<SearchFilter setFilters={setFilters} resetFilter={resetFilter} />

					<div className="category-item-container">
						<h2>Search results for "{q}"</h2>
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
					</div>
				</>
			)}
		</div>
	);
};

export default AllCategory;
