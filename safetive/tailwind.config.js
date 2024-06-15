/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            navbar: "#1985A1",
            link: "#FFFFFF",
        },
        fontFamily: {
            comic: "Comic Neue, sans-serif",
        },
        extend: {},
    },
    plugins: [],
};
