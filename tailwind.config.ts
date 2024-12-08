import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        secondary:"var(--secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"var(--primary)",
        third:"var(--third)",
      },
    },
  },
  plugins: [
  ],
};
export default config;
