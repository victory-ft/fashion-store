"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import "@/assets/styles/Profile.scss";
import LoadingPage from "@/components/PageLoading";
import Link from "next/link";

const ProfilePage = () => {
	const router = useRouter();

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);
	const [profile, setProfile] = useState(true);
	const [error, setError] = useState("");

	async function getProfile() {
		const token = Cookies.get("token");
		if (token) {
			setIsLoggedIn(true);
			try {
				const response = await fetch(
					"https://fashion-ecommerce-backend.onrender.com/account/user-data/",
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);

				if (response.ok) {
					const res = await response.json();
					console.log(res);
					setProfile(res);
				}
			} catch (error) {
				setError("An error occurred, please try again.");
			} finally {
				setLoading(false);
			}
		} else {
			setLoading(false);
			return;
		}
	}

	function logout() {
		Cookies.remove("token");
		router.push("/");
	}

	useEffect(() => {
		getProfile();
	}, []);

	return (
		<div className="profile">
			{loading ? (
				<LoadingPage />
			) : !isLoggedIn ? (
				<>
					<h1>
						Please <Link href="/login">Login</Link> to view Profile
					</h1>
				</>
			) : (
				<>
					{error ? (
						<p className="error-big">{error}</p>
					) : (
						<>
							<h1>Profile</h1>
							<p className="profile-info-header">Name</p>
							<p className="profile-info">{profile.fullname}</p>
							<p className="profile-info-header">Address</p>
							<p className="profile-info">
								{profile.address ? (
									profile.address
								) : (
									<span className="no-address">No address added</span>
								)}
							</p>
							<button
								className="address-btn"
								onClick={() => router.push("/profile/address")}
							>
								Edit Address
							</button>
							<p className="profile-info-header">Account Balance</p>

							<p className="profile-info">
								<span className="no-address">
									${profile.account_balance} CAD
								</span>
							</p>
							<button
								className="address-btn"
								onClick={() => router.push("/profile/topup")}
							>
								Top Up Account
							</button>
							<br />
							<h2>Order History</h2>
							<button
								className="address-btn"
								onClick={() => router.push("/profile/orders")}
							>
								View Orders
							</button>
							<br />
							<br />
							<button className="logout" onClick={logout}>
								Log Out
							</button>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default ProfilePage;
