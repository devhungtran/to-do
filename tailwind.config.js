
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "-webkit-linear-gradient(50deg, #5e2ced 0%, #9749f8 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "bg-head": "url('/public/img/bg.png')",
        "footer-shapte": "url('/public/before-footer.png')",
        "footer-shapte": "url('/public/before-footer.png')",

      },
      spacing: {
        "1r": "1.2rem", 
        "2r": "2rem",
        "3r": "3rem",
        "4r": "4rem",
      },
      boxShadow: {
        "box-shadow-light": "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        "box-shadow-2": "rgba(190, 205, 226, 0.35) 0px 5px 15px;",
      },
      colors: {
        "light": "#eef4ff",
        "light-elm": "#fff",
        "dark": "#0f172a",
        "dark-elm": "#1e293b",
        "waring": "#ff5c88",
        "dark-color": "#D8E2EF",
        "green-o": "#00c9a7",
        "dark-border": "#cbd5e11a",
        "dark-text": "#e0e0e0",
        "primary": "#00c9a7",
        "blue": "#377dff",
        "green": "#00c9a7",
        "bcolor": "rgba(0,201,167,.15)",
        "bg-opa": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};

export default config;