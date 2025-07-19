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
            fontSize: {
                //--- Hero Section ---
                hero_title: "clamp(2.5rem, 5vw, 4.5rem)",
                hero_text: "clamp(1.5rem, 1vw, 3rem)",
                hero_subText: "clamp(1.125rem, .5vw, 2rem)",

                //--- Sizes ---
                regular: "clamp(1.5rem, 1vw, 3rem)",
                smaller: "clamp(1.125rem, .5vw, 2rem)",
                small: "clamp(.875rem, 1vw, 1rem)",
                large: "clamp(2.5rem, 5vw, 4.5rem)",
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
            spacing: {
                vNav_to_r_viewPort: "clamp(12rem, 15vw, 100rem)",
                // vNav_to_r_viewPort: "clamp(5rem, 10vw, 100rem)",
            },
            width: {
                section: "clamp(32rem, 60vw, 64rem)",
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
        screens: {
            bp1200_min: { min: "1200px" },
            bp1200_max: { max: "1200px" },
            bp940_max: { max: "940px" },
        },
    },
    plugins: [],
};
