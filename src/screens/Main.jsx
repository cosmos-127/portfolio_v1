import LocomotiveScroll from "locomotive-scroll";
import Part1 from "../components/Part1";
import Part2 from "../components/Part2";
import Part3 from "../components/Part3";
import { useEffect, useRef } from "react";

const Main = () => {
	const scrollRef = useRef(null);

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: scrollRef.current,
			smooth: true,
			// Add other options as needed
		});

		// Cleanup function to destroy the instance
		return () => {
			scroll.destroy();
		};
	}, []);
	return (
		<div ref={scrollRef}>
			<Part1 />
			<Part2 />
			<Part3 />
		</div>
	);
};

export default Main;
