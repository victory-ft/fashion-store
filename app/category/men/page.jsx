import React from "react";
import SearchFilter from "@/components/SearchFilter";
import ItemCard from "@/components/ItemCard";
import man from "@/public/images/man3.png";
import man2 from "@/public/images/man2.png";
import man3 from "@/public/images/man1.png";
import "@/assets/styles/Category.scss";

const MenCategory = () => {
	return (
		<div className="category-container">
			{/* <SearchFilter /> */}
			<div className="category-item-container">
				<ItemCard image={man} name="Men's Blue Button Shirt" price="20 CAD" />
				<ItemCard image={man2} name="Men's Jean Pants" price="25 CAD" />
				<ItemCard image={man} name="Men's Blue Button Shirt" price="20 CAD" />
				<ItemCard image={man2} name="Men's Jean Pants" price="25 CAD" />
				<ItemCard image={man3} name="Men's Blue Button Shirt" price="10 CAD" />
				<ItemCard image={man} name="Men's Blue Button Shirt" price="20 CAD" />
				<ItemCard image={man3} name="Men's Blue Button Shirt" price="10 CAD" />
				<ItemCard image={man2} name="Men's Jean Pants" price="25 CAD" />
				<ItemCard image={man3} name="Men's Blue Button Shirt" price="10 CAD" />
			</div>
		</div>
	);
};

export default MenCategory;
