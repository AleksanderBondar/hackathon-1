import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: "0px 0px 1px rgba(255, 255, 255, 0.01);",
      },
      boxShadow: {
        button: "0px 4px 4px 0px rgba(0, 0, 0, 0.30)",
        tiles: "0px 5.7677px 5.7677px 0px rgba(0, 0, 0, 0.30)",
      },
      backgroundImage: {
        mainBg:
          "linear-gradient(180deg, rgba(14,19,47,1) 0%, rgba(12,11,32,1) 30%, rgba(6,2,15,1) 80%, rgba(14,13,27,1) 100%);",

        buttonNav:
          "linear-gradient(180deg, rgba(206, 206, 206, 0.06) 0%, rgba(128, 116, 166, 0.08) 100%)",
        buttonSection: "linear-gradient(41deg, #0065A9 0%, #0098FF 100%)",

        tilesSecondSection:
          "linear-gradient(180deg, rgba(206, 206, 206, 0.12) 0%, rgba(128, 116, 166, 0.12) 100%);",

        thirdSectionTiles:
          "linear-gradient(180deg, rgba(206, 206, 206, 0.06) 0%, rgba(128, 116, 166, 0.08) 100%);",

        textFirstSection:
          "linear-gradient(272deg, #0065A9 -7.86%, #FFF 43.19%, #0065A9 98.67%)",
        textSection:
          "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.75) 100%);",
      },
      colors: {
        neutral: {
          DEFAULT: "#B5BFCA",
          light: "#ffffff80",
          dark: "#232A2F",
        },
        main: {
          DEFAULT: "#0065A9",
          dark: "#007ACC",
          light: "#0098FF",
        },
        dividers: { DEFAULT: "#232A2F" },
        background: {
          DEFAULT: "#05010D",
          navigation: "rgba(255, 255, 255, 0.02)",
        },
      },
    },
  },
  plugins: [
    //@ts-ignore
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          //@ts-ignore
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
