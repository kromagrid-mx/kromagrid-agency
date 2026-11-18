'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Barra de progreso de lectura fluida
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-kg-alabaster/80 dark:bg-kg-obsidian/80 backdrop-blur-xl border-b border-kg-ink/5 dark:border-kg-alabaster/5 py-4 shadow-editorial dark:shadow-editorial-dark' 
          : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Boutique con Emblema Geométrico */}
        <a href="#" className="group flex items-center gap-3.5">
          <motion.div 
            whileHover={{ rotate: 225, scale: 1.15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-3 h-3 border border-kg-champagne bg-kg-champagne/20 rotate-45 transition-colors group-hover:bg-kg-champagne" 
          />
          <span className="font-serif text-2xl tracking-tight text-kg-ink dark:text-kg-alabaster">
            Kroma<span className="italic text-kg-champagne font-normal">Grid</span>
          </span>
        </a>

        {/* Navegación Editorial */}
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-9 text-[11px] font-medium uppercase tracking-[0.22em] text-kg-ink/70 dark:text-kg-alabaster/70">
            {[
              { label: 'Colección', href: '#portafolio' },
              { label: 'Inversión', href: '#cotizador' },
              { label: 'Consultoría', href: '#agendar' },
            ].map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="relative group py-1.5 hover:text-kg-ink dark:hover:text-kg-alabaster transition-colors duration-300"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-kg-champagne transition-all duration-500 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block w-[1px] h-5 bg-kg-ink/10 dark:bg-kg-alabaster/10" />

          {/* Selector de Tema con Rotación Cinematográfica */}
          <button
            onClick={toggleTheme}
            className="relative flex items-center justify-center w-11 h-11 rounded-full border border-kg-ink/10 dark:border-kg-alabaster/10 hover:border-kg-champagne/50 bg-kg-silk/50 dark:bg-kg-onyx/50 hover:shadow-gold-glow transition-all duration-500 overflow-hidden"
            aria-label="Cambiar modo de color"
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.div
                  key="sun"
                  initial={{ y: 20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Sun strokeWidth={1.5} className="w-4 h-4 text-kg-champagne" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ y: -20, opacity: 0, rotate: 90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Moon strokeWidth={1.5} className="w-4 h-4 text-kg-ink" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          
        </div>
      </div>

      {/* Línea de progreso dorada inferior */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-kg-champagne/40 via-kg-champagne to-kg-champagneLight origin-left"
      />
    </motion.nav>
  );
}