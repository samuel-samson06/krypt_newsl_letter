/** @type {import('tailwindcss').Config} */
export default {
  // Use a more concise way to specify content files
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  // Use a more organized theme structure
  theme: {
    extend: {
      animation: {
        bounceNew: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },

  // No plugins are being used, so this can be removed
  // plugins: [],
}