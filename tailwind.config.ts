import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '8': '2rem'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fadeUp: "fadeUp .4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            transform: "translateY(.875rem)",
            opacity: "0",
            visibility: "hidden",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
            visibility: "visible",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
