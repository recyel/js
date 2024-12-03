import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          trustGreen: '#48FF91',
        },
        fontFamily: {
          bold: ['var(--font-bold)'],
          extrabold: ['var(--font-extrabold)'],
          regular: ['var(--font-regular)'],
          medium: ['vard(--font-medium)'],
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
