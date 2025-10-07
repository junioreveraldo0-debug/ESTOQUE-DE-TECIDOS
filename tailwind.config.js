/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e6f0ff',   // Azul clarinho
          DEFAULT: '#1e73e8', // Azul principal
          dark: '#0f52ba',    // Azul escuro
        },
        background: '#ffffff',
        surface: '#f8fbff',
        text: '#0f172a',      // Azul marinho escuro
        muted: '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Arial'],
      },
      boxShadow: {
        soft: '0 6px 16px rgba(16,24,40,0.08)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
}
