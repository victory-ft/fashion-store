import Link from "next/link";
import React from "react";
import "@/assets/styles/components/Footer.scss";

const Footer = () => {
	return (
		<footer>
			<div className="links">
				<Link href="/">Home</Link>
				<Link href="/">Men</Link>
				<Link href="/">Women</Link>
				<Link href="/">kids</Link>
				<Link href="/">Contact Us</Link>
			</div>
			<div className="copyright">
				<p>
					&#169; <span className="footer-logo">FASHION</span>, All Rights
					Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
