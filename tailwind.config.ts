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
        divine: {
          saffron: "#FF6B35",
          "saffron-light": "#FF8C5A",
          "saffron-dark": "#E55A2B",
          gold: "#FFD700",
          "gold-light": "#FFE44D",
          "gold-dark": "#CCAA00",
          cream: "#FFF8E7",
          white: "#FFFFFF",
          "off-white": "#FDFCF8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

