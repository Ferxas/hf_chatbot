/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',      // Color principal (morado)
        secondary: '#22C55E',    // Color secundario (verde)
        background: '#F9FAFB',   // Fondo claro (corregido el typo)
        textPrimary: '#1F2937',  // Texto principal oscuro
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',        // Entrada suave
        slideIn: 'slideIn 0.5s ease-in-out',    // Entrada lateral
        fadeInUp: 'fadeInUp 1s ease-in-out',    // Subida suave
        slideOut: 'slideOut 0.5s ease-in-out',  // Salida lateral
        bounceIn: 'bounceIn 0.6s ease-in-out',  // Rebote al entrar
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '50%': { transform: 'scale(1.1)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      transitionProperty: {
        'sidebar': 'transform, opacity', // Transiciones específicas para el Sidebar
      },
    },
  },
  plugins: [],
};