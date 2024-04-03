import React, { useRef, useEffect } from "react";
import closeIcon from "@/assets/icons/close.svg";
import "@/assets/styles/components/SearchModal.scss";
import Image from "next/image";

const SearchModal = ({ closeSearchModal }) => {
	const ref = useRef();

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
	return (
		<div className="search-modal-container">
			{/* <h2>Search</h2> */}
			<div className="search-modal" ref={ref}>
				<input
					type="search"
					name="search"
					id="search"
					placeholder="Search..."
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
