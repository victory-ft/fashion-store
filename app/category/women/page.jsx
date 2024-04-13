import React from "react";
import SearchFilter from "@/components/SearchFilter";
import ItemCard from "@/components/ItemCard";
import woman from "@/public/images/woman3.png";
import woman2 from "@/public/images/woman2.png";
import woman3 from "@/public/images/woman1.png";
import "@/assets/styles/Category.scss";

const WomenCategory = () => {
	return (
		<div className="category-container">
			{/* <SearchFilter /> */}
			<div className="category-item-container">
				<ItemCard image={woman} name="Women's Dress" price="20 CAD" />
				<ItemCard image={woman2} name="Women's Flower Dress" price="25 CAD" />
				<ItemCard image={woman} name="Women's Dress" price="20 CAD" />
				<ItemCard image={woman2} name="Women's Flower Dress" price="25 CAD" />
				<ItemCard image={woman3} name="Women's Polkadot shirt" price="10 CAD" />
				<ItemCard image={woman} name="Women's Dress" />
				<ItemCard image={woman3} name="Women's Polkadot shirt" price="10 CAD" />
				<ItemCard image={woman2} name="Women's Flower Dress" price="25 CAD" />
				<ItemCard image={woman3} name="Women's Polkadot shirt" price="10 CAD" />
			</div>
		</div>
	);
};

export default WomenCategory;
