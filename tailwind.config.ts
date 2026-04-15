import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-heebo)", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          50: "#f0f5fb",
          100: "#dbe6f3",
          200: "#b8cde8",
          300: "#8aaad6",
          400: "#5b83c0",
          500: "#3b64a8",
          600: "#2c4e8a",
          700: "#253f6f",
          800: "#1e325a",
          900: "#15233f",
          950: "#0b152a",
        },
        gold: {
          50: "#fbf8ef",
          100: "#f5ecd0",
          200: "#ebd79f",
          300: "#dfbc6b",
          400: "#d4a249",
          500: "#c5893a",
          600: "#a76c30",
          700: "#86512c",
          800: "#6f4229",
          900: "#5d3725",
          950: "#351d12",
        },
        emerald: {
          accent: "#2f9f6b",
        },
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 30% 20%, rgba(212,162,73,0.18) 0%, rgba(11,21,42,0) 45%), radial-gradient(circle at 75% 85%, rgba(47,159,107,0.15) 0%, rgba(11,21,42,0) 50%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(212,162,73,0.35)",
        navy: "0 20px 60px -15px rgba(0,0,0,0.6)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
