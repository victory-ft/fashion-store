"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import LoadingPage from "@/components/PageLoading";
import AddressForm from "@/components/AddressForm";
import "@/assets/styles/Profile.scss";
import Loading from "@/components/Loading";

const AddressPage = () => {
	const [editAddressForm, showEditAddressForm] = useState(false);

	const toggleEditAddressForm = () => {
		showEditAddressForm((prev) => !prev);
		setUpdateError("");
	};

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
					// console.log(res);
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

	const [updateLoading, setUpdateLoading] = useState(false);
	const [updateError, setUpdateError] = useState("");

	async function updateProfile(
		fullname,
		address,
		city,
		province,
		phone_number,
		event,
	) {
		event.preventDefault();
		const token = Cookies.get("token");
		setUpdateError("");
		try {
			const requestBody = {};

			// Conditionally add parameters only if they are not empty
			if (address) requestBody.address = address;
			if (fullname) requestBody.fullname = fullname;
			if (city) requestBody.city = city;
			if (province) requestBody.province = province;
			if (phone_number) requestBody.phone_number = phone_number;

			setUpdateLoading(true);
			const response = await fetch(
				"https://fashion-ecommerce-backend.onrender.com/account/update-profile/",
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify(requestBody),
				},
			);
			// const res = response.json();
			if (response.ok) {
				router.push("/profile");
			}
			if (!response.ok) {
				setUpdateError("An error occurred, please try again.");
			}
		} catch (error) {
			setUpdateError("An error occurred, please try again.");
		} finally {
			setUpdateLoading(false);
		}
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
							<div className="address-container">
								<h1>Address</h1>
								<div className="address">
									<p className="address-name">{profile.fullname}</p>
									<p className="address-name">
										{profile.address || "No address"}
									</p>
									<div className="buttons">
										<button
											className="address-btn"
											onClick={toggleEditAddressForm}
										>
											Change
										</button>
									</div>
								</div>
								{editAddressForm && (
									<AddressForm
										toggleEditAddressForm={toggleEditAddressForm}
										updateProfile={updateProfile}
										updateLoading={updateLoading}
									/>
								)}
								{updateError && <p className="error-big">{updateError}</p>}
								<br />
							</div>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default AddressPage;
