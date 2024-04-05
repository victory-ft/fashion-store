import Link from "next/link";
import React from "react";
import "@/assets/styles/components/Footer.scss";

const Footer = () => {
	return (
		<footer>
			<div className="links">
				<Link href="/">Home</Link>
				<Link href="/category/men">Men</Link>
				<Link href="/category/women">Women</Link>
				<Link href="/category/kids">kids</Link>
				<Link href="/contactus">Contact Us</Link>
			</div>
			<div className="copyright">
				<p>
					&#169; 2024 <span className="footer-logo">FASHION</span>, All Rights
					Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
