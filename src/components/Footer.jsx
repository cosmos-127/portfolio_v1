import React from "react";
import gitHubSvg from "../images/svg/github.svg";
import linkedinSvg from "../images/svg/linkedin.svg";
import twitterSvg from "../images/svg/twitter.svg";

const Footer = () => {
	return (
		<footer
			className="p-12 pb-8"
			style={{ backgroundColor: "#EDE8F5", color: "#3D52A0" }}
		>
			<div className=" mx-auto px-4 flex flex-col md:flex-row md:justify-between">
				<div className="md:w-2/3 md:mr-8">
					<h2 className="text-3xl font-bold mb-4">Contact Me</h2>
					<p className="mb-2">Email: cosmos.dev.127@gmail.com</p>
					<p className="mb-2">Phone: +91 9119375927</p>
					<div className="flex space-x-4 mt-4">
						<a
							href="https://github.com/cosmos-127"
							className="text-xl hover:text-gray-500 transition duration-300"
						>
							<img
								src={gitHubSvg}
								alt=""
								width="25"
								height="25"
							/>
						</a>
						<a
							href="https://linkedin.com/in/gagan-parashar"
							className="text-xl hover:text-gray-500 transition duration-300"
						>
							<img
								src={linkedinSvg}
								alt=""
								width="25"
								height="25"
							/>
						</a>
						<a
							href="https://twitter.com/@127_cosmos"
							className="text-xl hover:text-gray-500 transition duration-300"
						>
							<img
								src={twitterSvg}
								alt=""
								width="25"
								height="25"
							/>
						</a>
					</div>
				</div>
				<div className="mt-8 md:mt-0">
					<h2 className="text-3xl font-bold mb-4 ">Quick Links</h2>
					<ul className="space-y-2">
						<li>
							<a
								href="#about"
								className="hover:text-gray-500 transition duration-300"
							>
								About Me
							</a>
						</li>
						<li>
							<a
								href="#projects"
								className="hover:text-gray-500 transition duration-300"
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="hover:text-gray-500 transition duration-300"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
