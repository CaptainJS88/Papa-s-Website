import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(0, 0%, 100%)", // White
          foreground: "hsl(0, 0%, 0%)",
        },
        secondary: {
          DEFAULT: "hsl(0, 0%, 100%)", // White
          foreground: "hsl(0, 0%, 0%)",
        },
        muted: {
          DEFAULT: "hsl(0, 0%, 5%)", // Very dark
          foreground: "hsl(0, 0%, 80%)",
        },
        accent: {
          DEFAULT: "hsl(0, 0%, 100%)", // White
          foreground: "hsl(0, 0%, 0%)",
        },
        border: "hsl(0, 0%, 100%)", // White
        input: "hsl(0, 0%, 100%)",
        ring: "hsl(0, 0%, 100%)", // White
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-fade": "slideFade 8s ease-in-out infinite",
        "zoom-in": "zoomIn 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideFade: {
          "0%, 100%": { opacity: "0" },
          "10%, 90%": { opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

