/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "luxury-gold": "#D4AF37",
                "luxury-black": "#1A1A1A",
                cream: "#F5F5F0",
                "deep-black": "#121212",
                "soft-black": "#1E1E1E",
                "matte-black": "#232323",
            },
            fontFamily: {
                sans: ["Cormorant Garamond", "serif"],
                serif: ["Playfair Display", "serif"],
                display: ["Cinzel", "serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            letterSpacing: {
                widest: "0.2em",
            },
            boxShadow: {
                elegant: "0 0 60px -10px rgba(0, 0, 0, 0.75)",
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};
