import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

import imageSrc from "../images/krystal-ng-PrQqQVPzmlw-unsplash.jpg";
import Navbar from "./Navbar";

const Part1 = () => {
	const mouse = useRef({ x: 0, y: 0 });
	const circle = useRef();
	const textHeading = useRef();
	const image = useRef();

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

		const textHeadingElement = textHeading.current;
		const imageElement = image.current;

		gsap.fromTo(
			textHeadingElement,
			{ x: -200, opacity: 0 },
			{ x: 0, opacity: 1, duration: 2, ease: "bounce" }
		);

		gsap.fromTo(
			imageElement,
			{ x: +200, opacity: 0 },
			{ x: 0, opacity: 1, duration: 2, ease: "bounce" }
		);

		// Add ScrollTrigger to the image for enlarging effect on scroll down
		ScrollTrigger.create({
			trigger: textHeadingElement,
			start: "top 35%",
			stagger: 1,
			onEnter: () => {
				gsap.to(imageElement, { scale: 0.5, duration: 1 });
			},
			onLeaveBack: () => {
				gsap.to(imageElement, { scale: 1, duration: 1 });
			},
		});
	}, []);

	const handleMouseMove = (event) => {
		const { clientX, clientY } = event;
		mouse.current = { x: clientX, y: clientY };
		moveCircle(mouse.current.x, mouse.current.y);
	};

	const moveCircle = (x, y) => {
		gsap.to(circle.current, {
			x,
			y,
			ease: "power1.out",
		});
	};

	const handleEnter = () => {
		gsap.to(circle.current, {
			scale: 1,
			opacity: 1,
		});
	};

	const handleLeave = () => {
		gsap.to(circle.current, {
			scale: 0,
			opacity: 0,
		});
	};

	const goToProjects = () => {
		scrollToComponent("projects");
	};

	const scrollToComponent = (componentId) => {
		const component = document.getElementById(componentId);
		component.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div
			className="h-screen w-full"
			style={{ position: "relative", backgroundColor: "#EDE8F5" }}
		>
			<div
				ref={circle}
				className="flex items-center justify-center rounded-full z fixed"
				style={{
					height: "5.5vw",
					width: "5.5vw",
					backgroundColor: "#DDA9D0",
					top: mouse.y,
					left: mouse.x,
					transform: "translate(-50%, -50%)",
				}}
			>
				<div className="text-5xl font-semibold">😎</div>
			</div>
			<div
				className="h-full w-full relative z-20 flex flex-col items-center justify-between"
				onMouseMove={handleMouseMove}
				onMouseLeave={handleLeave}
				onMouseEnter={handleEnter}
			>
				<Navbar />
				<div className="flex items-center justify-center">
					<div
						ref={textHeading}
						className=" font-black text-8xl relative z-20 backdrop-blur-sm rounded-sm"
					>
						<span
							style={{ fontFamily: "headline", color: "#7091E6" }}
						>
							Innovating wit
							<span
								style={{
									fontFamily: "headline",
									color: "#adbbda",
								}}
							>
								h
							</span>{" "}
							<br /> Code and De
						</span>
						<span
							style={{ fontFamily: "headline", color: "#adbbda" }}
						>
							sign
						</span>
						<br />
						<button
							onClick={goToProjects}
							className="text-white bg-black rounded-full py-3 px-4 text-lg transition-colors duration-500 ease-in-out hover:bg-white hover:text-black "
						>
							My Projects
						</button>
					</div>
					<div ref={image}>
						<img
							className="relative z-9 rounded-full h-screen rotate-90"
							src={imageSrc}
							alt="Description"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Part1;
