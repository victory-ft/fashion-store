"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const login = async (formData) => {
	const email = formData.get("email");
	const password = formData.get("password");

	if (!email || !password) {
		return {
			message: "Please fill all fields",
			success: false,
		};
	}
	const response = await fetch(
		"https://fashion-ecommerce-backend.onrender.com/account/login-user/",
		{
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		},
	);
	const res = await response.json();
	if (response.ok) {
		cookies().set("token", res.access);
		redirect("/");
	}
	if (!response.ok) {
	}

	// cookies().set("token", randomUUID());
};

export const signUp = async (formData) => {
	const email = formData.get("email");
	const fullname = formData.get("fullname");
	const password = formData.get("password");
	const confirm_password = formData.get("confirm_password");

	if (!email || !password || !fullname || !confirm_password) {
		return {
			message: "Please fill all fields",
			success: false,
		};
	}
	const response = await fetch(
		"https://fashion-ecommerce-backend.onrender.com/account/create-user/",
		{
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password, fullname, confirm_password }),
		},
	);
	if (response.ok) {
		redirect("/login");
	}
	if (!response.ok) {
		// console.log(res);
	}

	// cookies().set("token", randomUUID());
};
