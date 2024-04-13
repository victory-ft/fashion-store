import React from "react";
import "@/assets/styles/components/ItemCard.scss";
import Image from "next/image";
import Link from "next/link";

const ItemCard = ({ image, name, price, id }) => {
	return (
		<Link href={`/item/${id}`} className="card-container">
			<div className="item-card">
				<Image
					src={image}
					alt={name}
					height={0}
					width={0}
					style={{ width: "250px", height: "300px" }}
					unoptimized
				/>
			</div>
			<p className="item-name">{name}</p>
			<p className="item-price">${price}</p>
		</Link>
	);
};

export default ItemCard;
