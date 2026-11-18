/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Habilita el modo oscuro por clase
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        // Paleta Old Money / Quiet Luxury
        kg: {
          cream: '#FBF9F6',      // Fondo claro cálido (Alabastro)
          charcoal: '#121417',   // Fondo oscuro premium (Casi negro, muy elegante)
          gold: '#B59A6D',       // Dorado viejo/Bronce (Acentos)
          goldLight: '#D4C09E',
          muted: '#8A867D',      // Textos secundarios
        }
      },
    },
  },
  plugins: [],
}