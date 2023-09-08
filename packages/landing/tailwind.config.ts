import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      neutral: {
        DEFAULT: "#444444",
        light: "#F3F3F3",
        dark: "#252526",
      },
      main: {
        DEFAULT: "#0065A9",
        dark: "#007ACC",
        light: "#0098FF",
      },
    },
  },
  plugins: [],
};
export default config;
