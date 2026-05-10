import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/Componets/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/Home/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/Icons/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
