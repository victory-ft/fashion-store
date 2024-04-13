"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import SearchModal from "@/components/SearchModal";
import menu from "@/assets/icons/menu.svg";
import close from "@/assets/icons/close.svg";
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
	const router = useRouter();

	const [prevScrollPos, setPrevScrollPos] = useState(wind);
	const [top, setTop] = useState(0);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	const closeSearchModal = () => {
		setIsSearchOpen(false);
	};

	// useEffect(() => {
	// 	if (!showMenu) {
	// 		// Function to handle scroll events
	// 		const handleScroll = () => {
	// 			const currentScrollPos = window.scrollY;
	// 			if (prevScrollPos > currentScrollPos) {
	// 				setTop(0); // Show navbar
	// 			} else {
	// 				setTop(-100); // Hide navbar
	// 			}
	// 			setPrevScrollPos(currentScrollPos);
	// 		};
	// 		// Add scroll event listener when the component mounts
	// 		window.addEventListener("scroll", handleScroll);
	// 		// Clean up by removing the event listener when the component unmounts
	// 		return () => {
	// 			window.removeEventListener("scroll", handleScroll);
	// 		};
	// 	}
	// }, [prevScrollPos, showMenu]);

	const navbarStyle = {
		top: `${top}px`,
	};

	return (
		<>
			{isSearchOpen && <SearchModal closeSearchModal={closeSearchModal} />}
			<nav style={navbarStyle}>
				<button
					className="menu-btn mobile-only"
					onClick={() => setShowMenu((prev) => !prev)}
				>
					<Image
						src={showMenu ? close : menu}
						height={0}
						width={0}
						alt="menu"
						style={{ width: "30px", height: "30px" }}
					/>
				</button>
				<Link href="/" className="logo-name" onClick={() => setShowMenu(false)}>
					FASHION
				</Link>
				<ul className="links no-mobile">
					<li>
						<Link
							href="/category/clothing"
							className={`${path == "/category/clothing" ? "active" : ""}`}
						>
							Clothing
						</Link>
					</li>
					<li>
						<Link
							href="/category/shoes"
							className={`${path == "/category/shoes" ? "active" : ""}`}
						>
							Shoes
						</Link>
					</li>
					<li>
						<Link
							href="/category/bags"
							className={`${path == "/category/bags" ? "active" : ""}`}
						>
							Bags
						</Link>
					</li>
					<li>
						<Link
							href="/category/men"
							className={`${path == "/category/men" ? "active" : ""}`}
						>
							Men
						</Link>
					</li>
					<li>
						<Link
							href="/category/women"
							className={`${path == "/category/women" ? "active" : ""}`}
						>
							Women
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
					<button
						className="no-mobile"
						onClick={() => {
							router.push("/profile");
						}}
					>
						<Image
							src={profileIcon}
							alt="profile-icon"
							height={0}
							width={0}
							style={{ width: "30px", height: "30px" }}
						/>
					</button>
					<button
						onClick={() => {
							router.push("/cart");
							setShowMenu(false);
						}}
					>
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

			<div className={`mobile-nav mobile-only ${showMenu ? "" : "hide"}`}>
				<ul className="links">
					<li>
						<Link
							href="/category/clothing"
							className={`${path == "/category/clothing" ? "active" : ""}`}
							onClick={() => setShowMenu(false)}
						>
							Clothing
						</Link>
					</li>
					<li>
						<Link
							href="/category/shoes"
							className={`${path == "/category/shoes" ? "active" : ""}`}
							onClick={() => setShowMenu(false)}
						>
							Shoes
						</Link>
					</li>
					<li>
						<Link
							href="/category/bags"
							className={`${path == "/category/bags" ? "active" : ""}`}
							onClick={() => setShowMenu(false)}
						>
							Bags
						</Link>
					</li>
					<li>
						<Link
							href="/category/men"
							className={`${path == "/category/men" ? "active" : ""}`}
							onClick={() => setShowMenu(false)}
						>
							Men
						</Link>
					</li>
					<li>
						<Link
							href="/category/women"
							className={`${path == "/category/women" ? "active" : ""}`}
							onClick={() => setShowMenu(false)}
						>
							Women
						</Link>
					</li>

					<li>
						<Link
							href="/profile"
							className={`${path == "/category/kids" ? "active" : ""}`}
							onClick={() => setShowMenu(false)}
						>
							Profile
						</Link>
					</li>
				</ul>
				{/* <div className="account-nav">
					<Link href="/profile"> Account</Link>
				</div> */}
			</div>
		</>
	);
};

export default Navbar;
