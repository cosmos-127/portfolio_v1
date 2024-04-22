import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Part2 = () => {
	const headingRef = useRef(null);
	const textRef = useRef(null);
	const hrRef = useRef(null);

	useEffect(() => {
		const headingElement = headingRef.current;
		const textElement = textRef.current;
		const hrElement = hrRef.current;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: headingElement,
				start: "top 70%",
				end: "bottom 30%",
				scrub: true,
			},
		});

		tl.fromTo(
			[headingElement, textElement],
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, stagger: 0.5 }
		).fromTo(hrElement, { scaleX: 0 }, { scaleX: 1, duration: 1 }, "-=0.5");
	}, []);

	return (
		<div
			className="h-auto w-full pb-24 "
			style={{ backgroundColor: "#EDE8F5" }}
		>
			<div className="mx-20 text-4xl font-thin">
				<h2
					ref={headingRef}
					style={{ fontFamily: "headline", color: "#3D52A0" }}
				>
					About Me
				</h2>
			</div>
			<hr
				ref={hrRef}
				className="block mx-20 bg-black border-none"
				style={{ height: "1px" }}
			/>
			<div
				ref={textRef}
				className="mx-20 pt-8 text-6xl"
				style={{ fontFamily: "content", color: "#3D52A0" }}
			>
				&emsp;Hi There! I'm Gagan Parashar. A Full Stack Web Developer
				based in India. <br /> I have frontend skills in JavaScript,
				ReactJS, TailwindCSS/CSS, GSAP, and Figma UI/UX prototype
				designing. I also have backend skills in JavaScript, NodeJS,
				Express, and SQL/NoSQL databases.
			</div>
		</div>
	);
};

export default Part2;
