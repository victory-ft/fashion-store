import React from "react";
import phone from "@/assets/icons/phone.svg";
import email from "@/assets/icons/mail.svg";
import "@/assets/styles/Contact.scss";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
	return (
		<div className="contact-us-container">
			<div className="contact-banner">
				<h1>Get in Touch</h1>
				<p className="get-in-touch">
					Have a question about sizing, styling, or our latest collection? We'd
					love to hear from you! Our friendly team is here to help you find the
					perfect pieces and elevate your wardrobe. Don't hesitate to reach out
					via email or give us a call.
				</p>
			</div>

			<div className="contact-info-container">
				<div className="contact-info">
					<Image
						src={phone}
						height={0}
						width={0}
						style={{ width: "80px", height: "80px" }}
						alt="phone"
					/>
					<h2>Phone</h2>
					<h3>+1 403 689 9802</h3>
				</div>
				<div className="contact-info">
					<Image
						src={email}
						height={0}
						width={0}
						style={{ width: "80px", height: "80px" }}
						alt="mail"
					/>
					<h2>Email</h2>
					<Link href="mailto:otilesan@student.concordia.ab.ca">
						otilesan@student.concordia.ab.ca
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
