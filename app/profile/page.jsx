"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "@/assets/styles/Profile.scss";

const ProfilePage = () => {
	const router = useRouter();
	return (
		<div className="profile">
			<h1>Profile</h1>
			<p className="profile-info-header">Name</p>
			<p className="profile-info">John Doe</p>
			<p className="profile-info-header">Address</p>
			<p className="profile-info">12 Lux Lane, Montreal, Canada</p>
			<button
				className="address"
				onClick={() => router.push("/profile/addresses")}
			>
				Edit Addresses
			</button>
			<br />
			<button className="logout">Log Out</button>
		</div>
	);
};

export default ProfilePage;
