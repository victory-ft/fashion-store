"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrow from "@/assets/icons/arrow-down.svg";
import filterIcon from "@/assets/icons/filter.svg";

const SearchFilter = () => {
	const [showPrice, setShowPrice] = useState(false);
	const [showGender, setShowGender] = useState(false);
	const [showSize, setShowSize] = useState(false);
	const [showFilters, setShowFilters] = useState(false);

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
						<input type="number" name="min" id="min" className="price-input" />
						<label htmlFor="min">Min</label>
						<input type="number" name="max" id="max" className="price-input" />
						<label htmlFor="max">Max</label>
					</div>
				</div>
				<div className="filter">
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
				</div>
				<button className="apply-filter">Apply Filters</button>
			</aside>
		</>
	);
};

export default SearchFilter;
