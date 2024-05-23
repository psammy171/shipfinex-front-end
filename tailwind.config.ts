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
          50: "#fafcff",
          100: "#d6e7ff",
          200: "#b3d2ff",
          300: "#8fbdff",
          400: "#6ba7ff",
          500: "#4792ff",
          600: "#247dff",
          700: "#0068ff",
          800: "#0059db",
          900: "#004bb8",
        },
        error: "#B00020",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
