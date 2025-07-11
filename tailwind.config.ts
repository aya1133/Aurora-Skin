import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aurora: {
          light: "#FFF8F9",
          pink: "#FCDDEC",
          dark: "#A91B60",
          gray: "#6B7280",
        },
      },
    },
  },
  plugins: [],
};

export default config;
