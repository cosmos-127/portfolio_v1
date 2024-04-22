import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import proj1image from "../images/upay/homepage.png";
import proj2image from "../images/esdap/esdap.png";
import proj3image from "../images/portfolio/landing.png";

gsap.registerPlugin(ScrollTrigger);

const Part3 = () => {
	const headingRef = useRef(null);
	const projRef = useRef(null);

	useEffect(() => {
		const headingElement = headingRef.current;
		const projElement = projRef.current;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: headingElement,
				start: "top 70%",
				end: "bottom 30%",
				scrub: true,
				stagger: 0.2,
				// markers: true,
			},
		});

		tl.fromTo(
			headingElement,
			{ y: -50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: "power2.out" }
		).fromTo(
			projElement,
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
			"-=0.5"
		);
	}, []);

	return (
		<div
			id="projects"
			className="min-h-screen w-full relative text-center px-16 pt-4"
			style={{ backgroundColor: "#EDE8F5", fontFamily: "content" }}
		>
			<div ref={headingRef}>
				<h4 className="text-xl pb-4">
					My{" "}
					<span className="text-white bg-black rounded-full py-2 px-4 ">
						# Creations
					</span>
				</h4>

				<h2
					className="text-7xl font-medium pb-4"
					style={{ fontFamily: "headline" }}
				>
					Explore Projects
				</h2>
			</div>
			{/* for Projects */}
			<div
				ref={projRef}
				className="flex h-4/5 w-full items-center justify-between"
			>
				<a
					href="https://github.com/cosmos-127/Upay"
					className="w-1/3 h-full mx-2 relative cursor-pointer"
					style={{ height: "550px" }}
				>
					<img
						className="h-full w-full object-cover rounded-2xl  "
						src={proj1image}
						alt="Project 1"
					/>
					<div className="flex flex-col justify-center absolute inset-0 bg-black opacity-0 hover:opacity-100  transition-opacity duration-700 rounded-2xl text-white p-12">
						<h1
							className="text-3xl pb-4"
							style={{ fontFamily: "headline" }}
						>
							Upay
						</h1>
						<h2
							className="text-xl"
							style={{ fontFamily: "content" }}
						>
							Upay is a straightforward payment gateway
							application developed using the MERN stack.
						</h2>
					</div>
				</a>
				<a
					href="https://github.com/cosmos-127"
					className="w-1/3 h-full mx-2  relative cursor-pointer"
					style={{ height: "550px" }}
				>
					<img
						className="h-full w-full object-cover rounded-2xl "
						src={proj2image}
						alt="Project 2"
					/>
					<div className="flex flex-col justify-center absolute inset-0 bg-black opacity-0 hover:opacity-100  transition-opacity duration-700 rounded-2xl text-white p-12 ">
						<h1
							className="text-3xl pb-4"
							style={{ fontFamily: "headline" }}
						>
							ESDAP
						</h1>
						<h2
							className="text-xl"
							style={{ fontFamily: "content" }}
						>
							Encrypted Student Data Analytics Platform (ESDAP),
							which uses a special technique called homomorphic
							encryption. Homomorphic encryption allows us to
							perform computations directly on encrypted data,
							eliminating the need to decrypt it.
						</h2>
					</div>
				</a>
				<a
					href="https://github.com/cosmos-127/portfolio_v1"
					className="w-1/3 h-full mx-2 relative cursor-pointer"
					style={{ height: "550px" }}
				>
					<img
						className="h-full w-full object-cover rounded-2xl "
						src={proj3image}
						alt="Project 3"
					/>
					<div className="flex flex-col justify-center absolute inset-0 bg-black opacity-0 hover:opacity-100  transition-opacity duration-700 rounded-2xl text-white p-12">
						<h1
							className="text-3xl pb-4"
							style={{ fontFamily: "headline" }}
						>
							Portfolio_v1
						</h1>
						<h2
							className="text-xl"
							style={{ fontFamily: "content" }}
						>
							Minimalistic Porfolio created using some cool js
							libraries like: GSAP, SwiperJS, LocomotiveJS,
							ReactJS.
						</h2>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Part3;
