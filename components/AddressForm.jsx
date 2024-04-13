import React from "react";
import "@/assets/styles/components/AddressForm.scss";

const AddressForm = ({ toggleEditAddressForm }) => {
	return (
		<div className="address-form-container">
			<h2>Edit address</h2>
			<form action="#">
				<div className="form-row">
					{/* <div className="input-data">
						<input type="text" name="first-name" id="first-name" required />
						<div className="underline"></div>
						<label htmlFor="first-name">First Name</label>
					</div> */}
					<div className="input-data">
						<input type="text" name="full-name" id="full-name" required />
						<div className="underline"></div>
						<label htmlFor="full-name">Full Name</label>
					</div>
				</div>
				<div className="form-row">
					<div className="input-data">
						<input type="text" name="adr1" id="adr1" required />
						<div className="underline"></div>
						<label htmlFor="adr1">Address Line 1</label>
					</div>
				</div>
				{/* <div className="form-row">
					<div className="input-data">
						<input type="text" name="adr2" id="adr2" />
						<div className="underline"></div>
						<label htmlFor="adr2">Address Line 2</label>
					</div>
				</div> */}
				<div className="form-row">
					<div className="input-data">
						<input type="text" name="city" id="city" required />
						<div className="underline"></div>
						<label htmlFor="city">City</label>
					</div>
				</div>
				<div className="form-row">
					<div className="input-data">
						<input type="text" name="province" id="province" required />
						<div className="underline"></div>
						<label htmlFor="province">Province</label>
					</div>
				</div>
				<div className="form-row">
					<div className="input-data">
						<input type="text" name="zip-code" id="zip-code" required />
						<div className="underline"></div>
						<label htmlFor="zip-code">Zip/Postal Code</label>
					</div>
				</div>
				<div className="form-row">
					<div className="input-data">
						<input type="text" name="phone" id="phone" required />
						<div className="underline"></div>
						<label htmlFor="phone">Phone Number</label>
					</div>
				</div>
				<button type="submit" className="address-btn">
					Update Address
				</button>
			</form>
			<button className="logout" onClick={toggleEditAddressForm}>
				Cancel
			</button>
		</div>
	);
};

export default AddressForm;
