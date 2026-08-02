/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E0F13",
        orange: {
          DEFAULT: "#FF6A1A",
          from: "#FF8A33",
          to: "#F4511E",
        },
        muted: "#9AA0A6",
      },
      backgroundImage: {
        "orange-gradient": "linear-gradient(135deg, #FF8A33 0%, #F4511E 100%)",
      },
      fontFamily: {
        heading: ["Poppins", "Montserrat", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
