import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/assets/styles/Global.scss";

export const metadata = {
	title: "Fashion Store",
	description: "Shop for all your latest clothes here.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main className="main-content-overall">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
