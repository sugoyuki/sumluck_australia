import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Using standard Tailwind v4 emerald color palette
      // emerald-50: #ecfdf5, emerald-500: #10b981, emerald-600: #059669
      // These are already built into Tailwind, no need to override
    },
  },
  plugins: [],
};

export default config;