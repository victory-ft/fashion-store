"use client";
import React, { useState } from "react";
import AddressForm from "@/components/AddressForm";
import "@/assets/styles/Profile.scss";

const AddressPage = () => {
	const [showAddressForm, setShowAddressForm] = useState(false);
	const [editAddressForm, showEditAddressForm] = useState(false);

	const toggleAddressForm = () => {
		setShowAddressForm((prev) => !prev);
	};
	const toggleEditAddressForm = () => {
		showEditAddressForm((prev) => !prev);
	};
	return (
		<div className="profile">
			<h1>Addresses</h1>
			<div className="address-container">
				<div className="address">
					<h2>Address 1</h2>
					<p className="address-name">John Doe</p>
					<p className="address-name">12 Lux Lane, Montreal, Canada</p>
					<div className="buttons">
						<button className="address-btn" onClick={toggleEditAddressForm}>
							Edit
						</button>
						<button className="logout">Delete</button>
					</div>
				</div>
				{editAddressForm && (
					<AddressForm
						edit={true}
						toggleEditAddressForm={toggleEditAddressForm}
					/>
				)}
				<br />
				<br />
				<br />
				<button className="address-btn" onClick={toggleAddressForm}>
					Add a new address
				</button>
				{showAddressForm && (
					<AddressForm edit={false} toggleAddressForm={toggleAddressForm} />
				)}
			</div>
		</div>
	);
};

export default AddressPage;
