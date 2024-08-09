import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "768px",
        md: "1024px",
        lg: "1218px",
      },
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
