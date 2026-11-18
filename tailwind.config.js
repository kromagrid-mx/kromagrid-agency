/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        kg: {
          alabaster: '#FBF9F5',    // Claro principal: Blanco cálido tipo papel de algodón
          silk: '#F2EFE9',         // Claro secundario: Tarjetas y superficies elevadas
          obsidian: '#0B0C0E',     // Oscuro principal: Negro profundo con matiz arquitectónico
          onyx: '#141619',         // Oscuro secundario: Tarjetas en modo oscuro
          champagne: '#C5A059',    // Acento principal: Dorado champán refinado
          champagneLight: '#DFC58E',
          ink: '#18181B',          // Texto principal en modo claro (Carbón suave)
          muted: '#71717A',        // Textos secundarios equilibrados
        }
      },
      backgroundImage: {
        'luxury-gradient': 'radial-gradient(circle at 50% 0%, rgba(197, 160, 89, 0.12) 0%, transparent 70%)',
        'glass-light': 'linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))',
        'glass-dark': 'linear-gradient(135deg, rgba(20, 22, 25, 0.7), rgba(11, 12, 14, 0.4))',
      },
      boxShadow: {
        'editorial': '0 20px 50px -15px rgba(0, 0, 0, 0.05)',
        'editorial-dark': '0 20px 50px -15px rgba(0, 0, 0, 0.5)',
        'gold-glow': '0 0 40px -10px rgba(197, 160, 89, 0.35)',
      }
    },
  },
  plugins: [],
}