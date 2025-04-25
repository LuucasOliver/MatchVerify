/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffa500',
          light: '#ffb733',
          dark: '#cc8400',
        },
        secondary: {
          DEFAULT: '#004080',
          light: '#0060bf',
          dark: '#002b57',
        },
        background: '#f8f8f8',
        surface: '#ffffff',
        success: '#22c55e',
        warning: '#facc15',
        error: '#ef4444',
      },
      fontFamily: {
        sans: [
          'SF Pro Display', 
          'Inter', 
          'system-ui', 
          'sans-serif'
        ],
      },
      boxShadow: {
        card: '0 4px 8px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 16px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}