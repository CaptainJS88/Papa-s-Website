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
          DEFAULT: "hsl(210, 20%, 35%)", // Slate blue
          foreground: "hsl(210, 20%, 95%)",
        },
        secondary: {
          DEFAULT: "hsl(160, 84%, 39%)", // Emerald
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(210, 25%, 15%)", // Dark sections
          foreground: "hsl(210, 15%, 65%)",
        },
        accent: {
          DEFAULT: "hsl(160, 84%, 39%)", // Emerald
          foreground: "hsl(0, 0%, 100%)",
        },
        border: "hsl(210, 25%, 20%)",
        input: "hsl(210, 25%, 20%)",
        ring: "hsl(160, 84%, 39%)", // Emerald
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

