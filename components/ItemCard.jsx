import React from "react";
import "@/assets/styles/components/ItemCard.scss";
import Image from "next/image";
import Link from "next/link";

const ItemCard = ({ image, name, price }) => {
	return (
		<Link href="/item/1" className="card-container">
			<div className="item-card">
				<Image src={image} alt={name} />
			</div>
			<p className="item-name">{name}</p>
			<p className="item-price">{price}</p>
		</Link>
	);
};

export default ItemCard;
