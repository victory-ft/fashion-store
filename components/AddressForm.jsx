import React, { useState } from "react";
import "@/assets/styles/components/AddressForm.scss";
import Loading from "./Loading";

const AddressForm = ({
	toggleEditAddressForm,
	updateProfile,
	updateLoading,
}) => {
	const [fullname, setFullname] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [province, setProvince] = useState("");
	const [phone_number, setPhoneNumber] = useState("");

	return (
		<div className="address-form-container">
			<h2>Change address</h2>
			<form action="#">
				<div className="form-row">
					<div className="input-data">
						<input
							type="text"
							name="full-name"
							id="full-name"
							value={fullname || ""}
							onChange={(e) => setFullname(e.target.value)}
						/>
						<div className="underline"></div>
						<label htmlFor="full-name">Full Name</label>
					</div>
				</div>
				<div className="form-row">
					<div className="input-data">
						<input
							type="text"
							name="adr1"
							id="adr1"
							value={address || ""}
							onChange={(e) => setAddress(e.target.value)}
						/>
						<div className="underline"></div>
						<label htmlFor="adr1">Address Line 1</label>
					</div>
				</div>
				<div className="form-row">
					<div className="input-data">
						<input
							type="text"
							name="city"
							id="city"
							value={city || ""}
							onChange={(e) => setCity(e.target.value)}
						/>
						<div className="underline"></div>
						<label htmlFor="city">City</label>
					</div>
				</div>
				<div className="form-row">
					<div className="input-data">
						<input
							type="text"
							name="province"
							id="province"
							value={province || ""}
							onChange={(e) => setProvince(e.target.value)}
						/>
						<div className="underline"></div>
						<label htmlFor="province">Province</label>
					</div>
				</div>
				{/* <div className="form-row">
					<div className="input-data">
						<input type="text" name="zip-code" id="zip-code" required />
						<div className="underline"></div>
						<label htmlFor="zip-code">Zip/Postal Code</label>
					</div>
				</div> */}
				<div className="form-row">
					<div className="input-data">
						<input
							type="text"
							name="phone"
							id="phone"
							value={phone_number || ""}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
						<div className="underline"></div>
						<label htmlFor="phone">Phone Number</label>
					</div>
				</div>
				<button
					type="submit"
					className="address-btn"
					onClick={(event) => {
						updateProfile(
							fullname,
							address,
							city,
							province,
							phone_number,
							event,
						);
					}}
				>
					{updateLoading ? <Loading /> : "Update Address"}
				</button>
			</form>
			<button className="logout" onClick={toggleEditAddressForm}>
				Cancel
			</button>
		</div>
	);
};

export default AddressForm;
