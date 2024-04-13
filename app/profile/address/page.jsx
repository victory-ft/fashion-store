"use client";
import React, { useState } from "react";
import AddressForm from "@/components/AddressForm";
import "@/assets/styles/Profile.scss";

const AddressPage = () => {
	const [editAddressForm, showEditAddressForm] = useState(false);

	const toggleEditAddressForm = () => {
		showEditAddressForm((prev) => !prev);
	};
	return (
		<div className="profile">
			<div className="address-container">
				<h1>Address</h1>
				<div className="address">
					<p className="address-name">John Doe</p>
					<p className="address-name">12 Lux Lane, Montreal, Canada</p>
					<div className="buttons">
						<button className="address-btn" onClick={toggleEditAddressForm}>
							Edit
						</button>
					</div>
				</div>
				{editAddressForm && (
					<AddressForm
						edit={true}
						toggleEditAddressForm={toggleEditAddressForm}
					/>
				)}
				<br />
			</div>
		</div>
	);
};

export default AddressPage;
