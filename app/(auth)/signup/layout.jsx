"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
	const cookieStore = cookies();
	const token = cookieStore.get("token");
	if (token) {
		redirect("/");
	}
	return <>{children}</>;
}
