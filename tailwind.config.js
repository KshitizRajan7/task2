// tailwind.config.ts or tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // if using Next.js App Router
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
      },
      fontFamily: {
        nohemi: ['"Nohemi"', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
    },
    plugins: [],
  }
};

export default config;
