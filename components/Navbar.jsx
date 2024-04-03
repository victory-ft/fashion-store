"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SearchModal from "@/components/SearchModal";
import searchIcon from "@/assets/icons/search.svg";
import profileIcon from "@/assets/icons/user.svg";
import cart from "@/assets/icons/shopping-cart.svg";
import "@/assets/styles/components/Navbar.scss";

const Navbar = () => {
	let wind = 0;
	if (typeof window !== "undefined") {
		wind = window.scrollY;
	}

	const path = usePathname();

	const [prevScrollPos, setPrevScrollPos] = useState(wind);
	const [top, setTop] = useState(0);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const closeSearchModal = () => {
		setIsSearchOpen(false);
	};

	useEffect(() => {
		// Function to handle scroll events
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			if (prevScrollPos > currentScrollPos) {
				setTop(0); // Show navbar
			} else {
				setTop(-100); // Hide navbar
			}
			setPrevScrollPos(currentScrollPos);
		};
		// Add scroll event listener when the component mounts
		window.addEventListener("scroll", handleScroll);
		// Clean up by removing the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollPos]);

	const navbarStyle = {
		top: `${top}px`,
	};

	return (
		<>
			{isSearchOpen && <SearchModal closeSearchModal={closeSearchModal} />}
			<nav style={navbarStyle}>
				<Link href="/" className="logo-name">
					FASHION
				</Link>
				<ul className="links">
					<li>
						<Link
							href={`/category/men ${path == "/category/men" ? "active" : ""}`}
						>
							Men
						</Link>
					</li>
					<li>
						<Link
							href={`/category/women ${
								path == "/category/women" ? "active" : ""
							}`}
						>
							Women
						</Link>
					</li>
					<li>
						<Link
							href={`/category/kids ${
								path == "/category/kids" ? "active" : ""
							}`}
						>
							Kids
						</Link>
					</li>
				</ul>

				<div className="profile-actions">
					<button onClick={() => setIsSearchOpen((prev) => !prev)}>
						<Image
							src={searchIcon}
							alt="search"
							height={0}
							width={0}
							style={{ width: "30px", height: "30px" }}
						/>
					</button>
					<button>
						<Image
							src={profileIcon}
							alt="profile-icon"
							height={0}
							width={0}
							style={{ width: "30px", height: "30px" }}
						/>
					</button>
					<button>
						<Image
							src={cart}
							alt="cart"
							height={0}
							width={0}
							style={{ width: "30px", height: "30px" }}
						/>
					</button>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
