/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/primereact/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                ui: {
                    '50': 'hsl(337, 87%, 97%)',
                    '100': 'hsl(334, 93%, 95%)',
                    '200': 'hsl(334, 96%, 90%)',
                    '300': 'hsl(335, 100%, 82%)',
                    '400': 'hsl(336, 99%, 69%)',
                    '500': 'hsl(338, 94%, 60%)',
                    '600': 'hsl(341, 83%, 51%)',
                    '700': 'hsl(343, 90%, 42%)',
                    '800': 'hsl(343, 86%, 35%)',
                    '900': 'hsl(343, 79%, 30%)',
                    '950': 'hsl(344, 98%, 17%)',
                },
            },

        },
    },
    plugins: [],
}

