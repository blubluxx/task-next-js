import type { Config } from "tailwindcss";

export default {
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
      },
      screens: {
        xs: "300px",
        sm: "700px",
        md: "1000px",
        lg: "1300px",
        xl: "1600px",
        "2xl": "2000px",
      },
    },
  },
  plugins: [],
} satisfies Config;
