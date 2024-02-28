/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/tasks.html"],
  theme: {
    extend: {
      colors: {
        dashboard: "#1A1531",
        primary: "#0A061E",
        second: "#353147",
        third: "#27223E",
        active: "#FFD88D",
        delete: "#FF5555",
        completed: "#51EC96",
        header: "#DBD8E9",
        paragrap: "#7E7997",
        logo: "#6F4FFF",
        white: "#FEFEFE",
      },
    },
  },
  plugins: [],
};
