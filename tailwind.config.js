/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			spacing: {
				// Define custom classes for vw units
				"vw-1.5": "1.5vw",
				"vw-2.5": "2.55vw",
				"vw-5": "5vw",
			},
		},
	},
	plugins: [],
};
