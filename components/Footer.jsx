import Link from "next/link";
import React from "react";
import "@/assets/styles/components/Footer.scss";

const Footer = () => {
	return (
		<footer>
			<div className="links">
				<Link href="/">Home</Link>
				<Link href="/category/clothing">Clothing</Link>
				<Link href="/category/bags">Bags</Link>
				<Link href="/category/shoes">Shoes</Link>
				<Link href="/category/women">Women</Link>
				<Link href="/contact">Contact Us</Link>
			</div>
			<div className="copyright">
				<p>
					&#169; 2024 <span className="footer-logo">LUXE FASHION</span>, All
					Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
