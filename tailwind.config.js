export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        primaryHover: "#1D4ED8",

        bg: "#F1F5F9",
        surface: "#FFFFFF",
        sidebar: "#1E293B",

        border: "#E2E8F0",
        text: "#0F172A",

        success: "#16A34A",
        error: "#DC2626",
      }
    }
  },
  plugins: [],
}