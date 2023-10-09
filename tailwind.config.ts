import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    plugins: [
        plugin(({ addVariant, config }) => {
            try {
                addVariant("autumn", `:is(.autumn &)`);
                console.log(
                    "\x1b[1m\x1b[32m%s\x1b[0m",
                    "Autumn Theme successfully added!"
                );
            } catch (error) {
                console.log(
                    "\x1b[1m\x1b[31m%s\x1b[0m",
                    "Error while adding Autumn Theme!"
                );
                console.log(error);
            }
        }),
    ],
    theme: {
        extend: {
            textColor: {
                // light theme
                color: "#0c021d",
                primary: "#7417ff",
                secondary: "#eadefc",
                accent: "#7322ec",
                // theme dark
                "color-dark": "#ece2fd",
                "dark-primary": "#7627ec",
                "dark-secondary": "#0f0321",
                "accent-dark": "#6413dd",
                // theme autumn
                "color-autumn": "#0c021d",
                "autumn-primary": "#8C0327",
                "autumn-secondary": "#D85251",
                "accent-autumn": "#D59B6A",
            },
            backgroundColor: {
                // light theme
                "bg-light": "#e1d0fb",
                // theme dark
                "bg-dark": "#15042f",
                // theme autumn
                "bg-autumn": "#f9f3e6",
            },
            accentColor: {
                // light theme
                accent: "#7322ec",
                // theme dark
                "accent-dark": "#6413dd",
                // theme autumn
                "accent-autumn": "#D59B6A",
            },
            borderColor: {
                // light theme
                color: "#0c021d",
                primary: "#7417ff",
                secondary: "#eadefc",
                // theme dark
                "color-dark": "#ece2fd",
                "dark-primary": "#7627ec",
                "dark-secondary": "#8C0327",
                // theme autumn
                "color-autumn": "#0c021d",
                "autumn-primary": "#8C0327",
                "autumn-secondary": "#D85251",
            },
        },
    },
};

export default config;
