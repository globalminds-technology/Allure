import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Exact color palette from Redesign specification:
          burgundy: "#702C3B",
          ivory: "#F8F3EA",
          gold: "#C5A46D",
          cream: "#FCFAF6",
          charcoal: "#292525",

          // Harmonized accents
          burgundyDark: "#581F2B",
          burgundyLight: "#8A3B4C",
          goldLight: "#DFCA9F",
          goldDark: "#A88349",
          slate: "#292525",
          sand: "#F8F3EA",
          border: "#EADFCF",
          muted: "#786E67",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "'Playfair Display'", "Georgia", "serif"],
        sans: ["var(--font-inter)", "'Inter'", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(41, 37, 37, 0.04)",
        card: "0 6px 24px rgba(112, 44, 59, 0.07)",
        dropdown: "0 12px 36px rgba(112, 44, 59, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
