/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,mdx}", "./components/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101418",
        graphite: "#232A31",
        cloud: "#F6F8FB",
        line: "#D9E0E8",
        primary: "#9500f2",
        violet: "#6B21A8",
        signal: "#00A6A6",
        cobalt: "#2458A6",
        amber: "#F2A900",
      },
      boxShadow: {
        panel: "0 24px 80px rgba(16, 20, 24, 0.12)",
        soft: "0 16px 40px rgba(16, 20, 24, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
