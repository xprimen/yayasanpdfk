import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css,scss}",
  ],
  daisyui: {
    themes: [
      {
        emerald: {
          ...require("daisyui/src/theming/themes")["emerald"],
          primary: "#ce041c",
          secondary: "#f5d961",
          "--rounded-box": "0.5rem",
        },
      },
      // "dark",
      // "emerald",
      // "nord",
      // "winter",
      // "fantasy",
      // "lemonade",
      // "wireframe",
      // "luxury",
    ],
  },
  theme: {
    // container: {
    //   center: true,
    // },

    extend: {
      // colors: {
      //   primary: { ...colors.emerald, DEFAULT: colors.emerald[600] },
      // },
      keyframes: {
        "intro-y-animation": {
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        introY: "intro-y-animation .4s ease-in-out .33333s",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "14px" },
      });
    }),
  ],
};
export default config;
