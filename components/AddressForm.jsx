import React from "react";
import "@/assets/styles/components/AddressForm.scss";

const AddressForm = ({ edit, toggleAddressForm, toggleEditAddressForm }) => {
	return (
		<div className="address-form-container">
			{edit ? <h2>Edit address</h2> : <h2>Add a new address</h2>}
			<form action="#">
				<div className="form-row">
					<div class="input-data">
						<input type="text" name="first-name" id="first-name" required />
						<div class="underline"></div>
						<label htmlFor="first-name">First Name</label>
					</div>
					<div class="input-data">
						<input type="text" name="last-name" id="last-name" required />
						<div class="underline"></div>
						<label htmlFor="last-name">Last Name</label>
					</div>
				</div>
				<div className="form-row">
					<div class="input-data">
						<input type="text" name="adr1" id="adr1" required />
						<div class="underline"></div>
						<label htmlFor="adr1">Address Line 1</label>
					</div>
				</div>
				{/* <div className="form-row">
					<div class="input-data">
						<input type="text" name="adr2" id="adr2" />
						<div class="underline"></div>
						<label htmlFor="adr2">Address Line 2</label>
					</div>
				</div> */}
				<div className="form-row">
					<div class="input-data">
						<input type="text" name="city" id="city" required />
						<div class="underline"></div>
						<label htmlFor="city">City</label>
					</div>
				</div>
				<div className="form-row">
					<div class="input-data">
						<input type="text" name="province" id="province" required />
						<div class="underline"></div>
						<label htmlFor="province">Province</label>
					</div>
				</div>
				<div className="form-row">
					<div class="input-data">
						<input type="text" name="zip-code" id="zip-code" required />
						<div class="underline"></div>
						<label htmlFor="zip-code">Zip/Postal Code</label>
					</div>
				</div>
				<div className="form-row">
					<div class="input-data">
						<input type="text" name="phone" id="phone" required />
						<div class="underline"></div>
						<label htmlFor="phone">Phone Number</label>
					</div>
				</div>
				<button type="submit" className="address-btn">
					{edit ? "Update Address" : "Add address"}
				</button>
			</form>
			<button
				className="logout"
				onClick={edit ? toggleEditAddressForm : toggleAddressForm}
			>
				Cancel
			</button>
		</div>
	);
};

export default AddressForm;
