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
			textColor: {
				light: "#120a17",
				dark: "#f1eaf6"
			},
			backgroundColor: {
				light: "#fdfbfe",
				dark: "#030104"
			},
			colors: {
				primary: {
					light: "#9042cd",
					dark: "#8132bd"
				},
				secondary: {
					light: "#be88e7",
					dark: "#4e1877"
				},
				accent: {
					light: "#ad5de9",
					dark: "#6516a2"
				}
			}
		}
	},
	plugins: [addVariablesForColors]
};
