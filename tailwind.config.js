/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                brand: {
                    teal: '#1ABC9C', // Original Vibrant Teal
                    dark: '#0F172A',
                    pink: '#FCE7F3',
                    light: '#F0FDFA',
                    primary: '#0ea5e9', // Sky 500
                    secondary: '#6366f1', // Indigo 500
                }
            }
        },
    },
    plugins: [],
}
