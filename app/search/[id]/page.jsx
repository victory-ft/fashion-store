"use client";
import React from "react";
import { useParams } from "next/navigation";
import SearchFilter from "@/components/SearchFilter";
import ItemCard from "@/components/ItemCard";
import man from "@/public/images/man3.png";
import man2 from "@/public/images/man2.png";
import man3 from "@/public/images/man1.png";
import woman from "@/public/images/woman1.png";
import woman2 from "@/public/images/woman2.png";
import woman3 from "@/public/images/woman3.png";
import child from "@/public/images/child1.png";
import child2 from "@/public/images/child2.png";
import child3 from "@/public/images/child3.png";
import "@/assets/styles/Category.scss";

const SearchPage = () => {
	const { id } = useParams();
	console.log(id);
	return (
		<>
			<h1 className="search-result-header">
				Search results for "{decodeURIComponent(id)}"
			</h1>

			<div className="category-container">
				<SearchFilter />
				<div className="category-item-container">
					<ItemCard image={man} name="Men's Blue Button Shirt" price="20 CAD" />
					<ItemCard image={man2} name="Men's Jean Pants" price="25 CAD" />
					<ItemCard
						image={man3}
						name="Men's Blue Button Shirt"
						price="20 CAD"
					/>
					<ItemCard image={woman} name="Men's Jean Pants" price="25 CAD" />
					<ItemCard
						image={woman2}
						name="Men's Blue Button Shirt"
						price="10 CAD"
					/>
					<ItemCard
						image={woman3}
						name="Men's Blue Button Shirt"
						price="20 CAD"
					/>
					<ItemCard
						image={child}
						name="Men's Blue Button Shirt"
						price="10 CAD"
					/>
					<ItemCard image={child2} name="Men's Jean Pants" price="25 CAD" />
					<ItemCard
						image={child3}
						name="Men's Blue Button Shirt"
						price="10 CAD"
					/>
				</div>
			</div>
		</>
	);
};

export default SearchPage;
