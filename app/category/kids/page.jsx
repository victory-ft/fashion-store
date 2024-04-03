import React from "react";
import SearchFilter from "@/components/SearchFilter";
import ItemCard from "@/components/ItemCard";
import kids from "@/public/images/child1.png";
import kids2 from "@/public/images/child2.png";
import kids3 from "@/public/images/child3.png";
import "@/assets/styles/Category.scss";

const KidsCategory = () => {
	return (
		<div className="category-container">
			<SearchFilter />
			<div className="category-item-container">
				<ItemCard image={kids} name="Women's Dress" price="20 CAD" />
				<ItemCard image={kids2} name="Women's Flower Dress" price="25 CAD" />
				<ItemCard image={kids} name="Women's Dress" price="20 CAD" />
				<ItemCard image={kids2} name="Women's Flower Dress" price="25 CAD" />
				<ItemCard image={kids3} name="Women's Polkadot shirt" price="10 CAD" />
				<ItemCard image={kids} name="Women's Dress" />
				<ItemCard image={kids3} name="Women's Polkadot shirt" price="10 CAD" />
				<ItemCard image={kids2} name="Women's Flower Dress" price="25 CAD" />
				<ItemCard image={kids3} name="Women's Polkadot shirt" price="10 CAD" />
			</div>
		</div>
	);
};

export default KidsCategory;
