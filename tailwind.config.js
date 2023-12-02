/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#1F2A37',
        secondary: '#E1EFFE'
      },
      fontFamily: {
        'Inter': 'Inter'
      },
      boxShadow: {
        'sm-invert': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md-invert': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg-invert': '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl-invert': '0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl-invert': '0 -25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl-invert': '0 -35px 60px -15px rgba(0, 0, 0, 0.3)'
      },
      containers: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      // backgroundImage: {
      //   'dark-gradient': 'var(--dark-gradient, linear-gradient(132deg, #031953 0%, #031953 0.01%, rgba(0, 45, 164, 0.90) 100%))',
      //   'dark-gradient-disabled': 'var(--gradient-disabled, linear-gradient(180deg, #B6C2E2 0%, #B1BAD1 100%))',
      // },
    }
  },
  // plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries'), require('flowbite/plugin')],
}
