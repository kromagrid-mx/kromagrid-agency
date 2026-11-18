'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar scroll para cambiar el fondo de la barra
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejo básico de Dark Mode de Tailwind
  useEffect(() => {
    // Revisar preferencia guardada o del sistema
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-kg-cream/80 dark:bg-kg-charcoal/80 backdrop-blur-md border-b border-kg-charcoal/5 dark:border-kg-cream/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo / Nombre de la Agencia */}
        <a href="#" className="group flex items-center gap-2">
          <div className="w-2 h-2 bg-kg-gold rounded-full group-hover:scale-150 transition-transform duration-500" />
          <span className="font-serif text-xl tracking-tight text-kg-charcoal dark:text-kg-cream">
            Kroma<span className="italic text-kg-gold">Grid</span>
          </span>
        </a>

        {/* Enlaces y Botón de Tema */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-medium text-kg-charcoal/60 dark:text-kg-cream/60">
            <a href="#portafolio" className="hover:text-kg-gold transition-colors">Portafolio</a>
            <a href="#cotizador" className="hover:text-kg-gold transition-colors">Inversión</a>
          </div>

          {/* Línea divisoria */}
          <div className="hidden md:block w-[1px] h-4 bg-kg-charcoal/20 dark:bg-kg-cream/20" />

          {/* Toggle de Dark Mode Elegante */}
          <button
            onClick={toggleTheme}
            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-kg-charcoal/10 dark:border-kg-cream/10 hover:border-kg-gold/50 hover:bg-kg-gold/5 transition-all duration-500 text-kg-charcoal dark:text-kg-cream"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <Sun strokeWidth={1.5} className="w-4 h-4 text-kg-gold" />
            ) : (
              <Moon strokeWidth={1.5} className="w-4 h-4" />
            )}
          </button>
          
        </div>
      </div>
    </motion.nav>
  );
}