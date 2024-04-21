import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Part3 = () => {
	const headingRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		const headingElement = headingRef.current;
		const textElement = textRef.current;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: headingElement,
				start: "top 70%",
				end: "bottom 30%",
				scrub: true,
				markers: true,
			},
		});

		tl.fromTo(
			headingElement,
			{ y: -50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1 }
		).fromTo(
			textElement,
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1 },
			"-=0.5"
		);
	}, []);

	return (
		<div
			className="h-screen w-full flex flex-col items-center justify-center"
			style={{ backgroundColor: "#EDE8F5" }}
		>
			<h1
				ref={headingRef}
				className="text-bold text-6xl mb-2"
				style={{ fontFamily: "headline" }}
			>
				ashdvsddhjsvdhjv
			</h1>
			<p
				ref={textRef}
				className="text-2xl mx-64 py-4 px-32"
				style={{ fontFamily: "content" }}
			>
				Hi There! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquid quae ut impedit similique velit iure fuga commodi asperiores possimus rerum vel, magni repudiandae tempora vero atque voluptatibus, corporis natus?
			</p>
		</div>
	);
};

export default Part3;
