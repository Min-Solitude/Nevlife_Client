/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'outline-gray': '0 0 0 3px rgba(59, 130, 246, 0.5)',
                base: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;'
            },
            colors: {
                primary: '#8BC6EC'
            }
        }
    },
    plugins: []
}
