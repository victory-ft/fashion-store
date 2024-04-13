"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrow from "@/assets/icons/arrow-down.svg";
import filterIcon from "@/assets/icons/filter.svg";

const SearchFilter = ({ setFilters, resetFilter }) => {
	const [showPrice, setShowPrice] = useState(false);
	const [showGender, setShowGender] = useState(false);
	const [showSize, setShowSize] = useState(false);
	const [showFilters, setShowFilters] = useState(false);
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const [error, setError] = useState("");

	function confirmFilter() {
		setError("");
		if (maxPrice && minPrice) {
			setFilters(minPrice, maxPrice);
		}
		if (!minPrice) {
			setError("Please include a min price");
			return;
		}
		if (!maxPrice) {
			setError("Please include a max price");
			return;
		}
		if (maxPrice < minPrice) {
			setError("Max price cannot be less than min price");
			return;
		}
	}

	return (
		<>
			<button
				className="filter-no-mobile"
				onClick={() => {
					setShowFilters((prev) => !prev);
				}}
			>
				<Image
					src={filterIcon}
					height={0}
					width={0}
					style={{ width: "20px", height: "20px" }}
					alt="arrow"
				/>
				Filters
			</button>
			<aside
				className={`filter-container filter-no-mobile ${
					showFilters ? "show" : ""
				}`}
			>
				<h1 className="filter-header filter-no-mobile-text">Filter:</h1>
				<div className="filter">
					<button
						className={`filter-btn ${showPrice ? "open" : ""}`}
						onClick={() => {
							setShowPrice((prev) => !prev);
						}}
					>
						<p>Price</p>
						<Image
							src={arrow}
							height={0}
							width={0}
							style={{ width: "20px", height: "20px" }}
							alt="arrow"
						/>
					</button>
					<div
						className={`price-range filter-options ${showPrice ? "open" : ""}`}
					>
						<input
							type="number"
							name="min"
							id="min"
							className="price-input"
							value={minPrice || ""}
							onChange={(e) => setMinPrice(e.target.value)}
						/>
						<label htmlFor="min">Min</label>
						<input
							type="number"
							name="max"
							id="max"
							className="price-input"
							value={maxPrice || ""}
							onChange={(e) => setMaxPrice(e.target.value)}
						/>
						<label htmlFor="max">Max</label>
					</div>
					{error && <p className="error-auth">{error}</p>}
				</div>
				{/* <div className="filter">
					<button
						className={`filter-btn ${showGender ? "open" : ""}`}
						onClick={() => {
							setShowGender((prev) => !prev);
						}}
					>
						<p>Gender</p>
						<Image
							src={arrow}
							height={0}
							width={0}
							style={{ width: "20px", height: "20px" }}
							alt="arrow"
						/>
					</button>
					<div className={`filter-options ${showGender ? "open" : ""}`}>
						<input type="checkbox" name="male" id="male" />
						<label htmlFor="male">Male</label>
						<input type="checkbox" name="female" id="female" />
						<label htmlFor="female">Female</label>
						<input type="checkbox" name="kids" id="kids" />
						<label htmlFor="kids">Kids</label>
					</div>
				</div>
				<div className="filter">
					<button
						className={`filter-btn ${showSize ? "open" : ""}`}
						onClick={() => {
							setShowSize((prev) => !prev);
						}}
					>
						<p>Size</p>
						<Image
							src={arrow}
							height={0}
							width={0}
							style={{ width: "20px", height: "20px" }}
							alt="arrow"
						/>
					</button>
					<div className={`filter-options ${showSize ? "open" : ""}`}>
						<input type="checkbox" name="small" id="small" />
						<label htmlFor="small">S</label>
						<input type="checkbox" name="medium" id="medium" />
						<label htmlFor="medium">M</label>
						<input type="checkbox" name="large" id="large" />
						<label htmlFor="large">L</label>
					</div>
				</div> */}
				<button className="apply-filter" onClick={confirmFilter}>
					Apply Filters
				</button>
				<br />
				<button
					className="apply-filter"
					onClick={() => {
						resetFilter();
						setMaxPrice("");
						setMinPrice("");
					}}
				>
					Reset Filters
				</button>
			</aside>
		</>
	);
};

export default SearchFilter;
