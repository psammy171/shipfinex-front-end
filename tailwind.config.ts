import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#eaf2e9",
          100: "#cbe0ca",
          200: "#accdaa",
          300: "#8dbb8b",
          400: "#6ea86b",
          500: "#4f964c",
          600: "#30832c",
          700: "#11710d",
          800: "#0f620b",
          900: "#0d540a",
        },
        error: "#B00020",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
