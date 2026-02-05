/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        "light-navy": "#112240",
        "lightest-navy": "#233554",
        slate: "#8892b0",
        "light-slate": "#a8b2d1",
        "lightest-slate": "#ccd6f6",
        white: "#e6f1ff",
        green: "#64ffda",
      },
      fontFamily: {
        // RESTORED ORIGINAL FONTS
        mono: ['"SF Mono"', '"Fira Code"', '"Fira Mono"', '"Roboto Mono"', 'monospace'],
        sans: ['"Calibre"', '"Inter"', '"San Francisco"', '"SF Pro Text"', '-apple-system', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};