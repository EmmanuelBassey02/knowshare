/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '300px',
        'md': '900px',
        'lg': '1024px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

