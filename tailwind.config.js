import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const addVariablesForColors = ({ addBase, theme }) => {
	let allColors = flattenColorPalette(theme("colors"));
	  let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	  );
	  addBase({
		":root": newVars,
	  });
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#ede7f6",
					100: "#d1c4e9",
					200: "#b39ddb",
					300: "#9575cd",
					400: "#7e57c2",
					500: "#673ab7",
					600: "#5e35b1",
					700: "#512da8",
					800: "#4527a0",
					900: "#311b92"
				},
				accent: {
					50: "#e0f2f1",
					100: "#b2dfdb",
					200: "#80cbc4",
					300: "#4db6ac",
					400: "#26a69a",
					500: "#009688",
					600: "#00897b",
					700: "#00796b",
					800: "#00695c",
					900: "#004d40"
				}
			}
		}
	},
	plugins: [addVariablesForColors]
};
