import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import closeIcon from "@/assets/icons/close.svg";
import "@/assets/styles/components/SearchModal.scss";
import Image from "next/image";

const SearchModal = ({ closeSearchModal }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const ref = useRef();
	const router = useRouter();

	useEffect(() => {
		let closeModal = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				closeSearchModal();
			}
		};
		document.addEventListener("mousedown", closeModal);
		return () => {
			document.removeEventListener("mousedown", closeModal);
		};
	}, []);

	function handleKeyDown(e) {
		if (e.key === "Enter") {
			runSearch();
		}
	}

	function runSearch() {
		router.push(`/search?q=${searchTerm}`);
		closeSearchModal();
	}

	return (
		<div className="search-modal-container">
			{/* <h2>Search</h2> */}
			<div className="search-modal" ref={ref}>
				<input
					type="search"
					name="search"
					id="search"
					placeholder="Search..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<button onClick={() => closeSearchModal()}>
					<Image
						src={closeIcon}
						height={0}
						width={0}
						style={{ width: "35px", height: "35px" }}
						alt="close"
						priority
					/>
				</button>
			</div>
		</div>
	);
};

export default SearchModal;
