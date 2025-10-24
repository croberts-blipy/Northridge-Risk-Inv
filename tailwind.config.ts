import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#0f172a",
          foreground: "#f8fafc",
          muted: "#1e293b",
        },
        surface: {
          DEFAULT: "#111827",
          foreground: "#e2e8f0",
          muted: "#1f2937",
          border: "#1e293b",
        },
        accent: {
          DEFAULT: "#38bdf8",
          foreground: "#0f172a",
        },
        success: {
          DEFAULT: "#22c55e",
          foreground: "#052e16",
        },
        warning: {
          DEFAULT: "#facc15",
          foreground: "#3f2f02",
        },
        danger: {
          DEFAULT: "#f87171",
          foreground: "#450a0a",
        },
        border: "#1f2937",
        input: "#1f2937",
        ring: "#38bdf8",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        soft: "0 10px 30px -15px rgba(15, 23, 42, 0.6)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
