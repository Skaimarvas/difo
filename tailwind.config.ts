import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purpleTransparent: "rgba(171, 0, 255, 0)",
        purpleOpaque: "rgba(171, 0, 255, 1)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1440px" },

      lg: { max: "1024px" },

      md: { max: "768px" },

      sm: { max: "642px" },
    },
  },
  plugins: [],
};
export default config;
