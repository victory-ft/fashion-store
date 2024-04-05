"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import deleteBin from "@/assets/icons/delete-bin.svg";

const CartItem = ({ image, info }) => {
	const [quantity, setQuantity] = useState(1);
	const total = info.price * quantity;

	const changeQuantity = (x) => {
		if (x === "minus") {
			if (quantity === 1) {
				return;
			}
			setQuantity((prev) => prev - 1);
		}
		if (x === "add") {
			setQuantity((prev) => prev + 1);
		}
	};

	return (
		<div className="cart-items items-cart">
			<div className="cart-item image-item">
				<Image
					src={image}
					height={0}
					width={0}
					alt={info.name}
					style={{ width: "150px", height: "200px" }}
				/>
				<div>
					<Link href="/item/1" className="product-name">
						{info.name}
					</Link>
					<p>Price: ${info.price} CAD</p>
					<p>Size: {info.size}</p>
				</div>
			</div>
			<div className="cart-item quantity">
				<button onClick={() => changeQuantity("minus")}> &minus; </button>
				<p>{quantity}</p>
				<button onClick={() => changeQuantity("add")}> &#43; </button>
			</div>
			<div className="cart-item total">${total} CAD</div>
			<div className="cart-item delete">
				<button>
					<Image
						src={deleteBin}
						height={0}
						width={0}
						alt="delete"
						style={{ width: "20px", height: "20px" }}
					/>
				</button>
			</div>
		</div>
	);
};

export default CartItem;
