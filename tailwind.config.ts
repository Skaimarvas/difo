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
  },
  plugins: [],
};
export default config;
