"use client";
import React from "react";
import woman from "@/public/images/woman1.png";
import "@/assets/styles/Item.scss";
import Image from "next/image";

const ItemPage = () => {
	return (
		<div className="item-container">
			<Image
				src={woman}
				alt="woman"
				height={0}
				width={0}
				style={{ width: "400px", height: "500px" }}
				className="item-image"
			/>
			<div className="item-info">
				<h1>Women's Polkadot Shirt</h1>
				<h2>$25 CAD</h2>

				<div className="size-select">
					<h2 className="secondary-item-header">Size: Small</h2>
					<button className="size-btn active">S</button>
					<button className="size-btn">M</button>
					<button className="size-btn">L</button>
				</div>

				<div className="quantity-select-container">
					<h2 className="secondary-item-header q">Quantity</h2>
					<div className="quantity-select">
						<button> &minus; </button>
						<p>1</p>
						<button> &#43; </button>
					</div>
				</div>
				<br />

				<button className="add-to-cart">Add to cart</button>
				<br />
				<br />

				<div className="product-details">
					<h2 className="secondary-item-header">Product Details</h2>
					<p className="product-details">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						maxime, explicabo animi cum accusamus maiores numquam, quidem
						quibusdam, libero voluptatibus dolorum. Laborum esse, qui doloribus
						fugit dolorem aliquid eaque, officia debitis beatae tempore
						voluptate, inventore repellendus iure possimus dicta repudiandae
						porro. Iusto, culpa incidunt officia laudantium ducimus velit
						doloribus inventore eaque aperiam, tenetur sint aspernatur! Placeat
						necessitatibus quas non.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ItemPage;
