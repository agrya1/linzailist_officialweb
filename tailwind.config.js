/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#689137',
          light: '#B2DFDB',
        },
        secondary: {
          DEFAULT: '#D1C4E9',
          light: 'rgba(209, 196, 233, 0.1)',
        },
        accent: {
          DEFAULT: '#FCE17C',
          dark: '#F6D365',
          orange: '#FF9A8B',
          blue: '#A1C4FD',
          mint: '#84FAB0',
        },
        gray: {
          DEFAULT: '#4B5563',
          dark: '#1F2937',
          light: '#9CA3AF',
          lighter: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['PingFang SC', 'Noto Sans SC', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      boxShadow: {
        'card': '0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'btn': '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'feature': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'cta': '0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'input': '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '30px',
      },
    },
  },
  plugins: [],
} 