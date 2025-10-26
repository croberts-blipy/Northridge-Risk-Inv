import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx,js,jsx}", "./src/components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F67FF",
        background: "#0D0F12",
        surface: "#1A1D21",
        border: "#23272e",
      },
    },
  },
  plugins: [],
};
export default config;
