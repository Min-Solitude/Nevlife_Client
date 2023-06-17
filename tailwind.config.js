/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            screens: {
                md: '768px',
                lg: '1024px',
                xl: '1280px'
            },
            width: {
                'wd-primary': '100%',
                'wd-secondary': '90%',
                'wd-tertiary': '80%'
            },
            height: {
                35: '35rem'
            },
            colors: {
                primary: '#8EC5FC',
                secondary: '#E0C3FC'
            },
            fontFamily: {
                logo: ['Montserrat', 'sans-serif'],
                popin: ['Poppins', 'sans-serif']
            },
            fontSize: {
                'tx-primary': '1rem',
                'tx-secondary': '1.5rem',
                'tx-tertiary': '2rem',
                'tx-quaternary': '2.5rem'
            },
            boxShadow: {
                'sd-primary': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
            },
            backgroundColor: {
                'gradient-primary': ' linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'
            },
            flex: {
                1: '1'
            },
            minHeight: {
                'min-h-screen': '100vh',
                30: '30rem'
            }
        }
    },
    plugins: []
}
