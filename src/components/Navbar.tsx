'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, TerminalSquare } from 'lucide-react';

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
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo de la Agencia Tech */}
        <a href="#" className="group flex items-center gap-2">
          <TerminalSquare className="w-5 h-5 text-blue-600 dark:text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-extrabold text-xl tracking-tight text-zinc-900 dark:text-white">
            Kroma<span className="text-blue-600 dark:text-blue-500">Grid</span>
          </span>
        </a>

        {/* Enlaces Corporativos y Botón de Tema */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-600 dark:text-zinc-400">
            <a href="#portafolio" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Casos de Éxito</a>
            <a href="#cotizador" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Simulador</a>
            {/* CTA secundario directo en el Navbar */}
            <a href="#agendar" className="text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
              Auditoría
            </a>
          </div>

          {/* Línea divisoria */}
          <div className="hidden md:block w-[1px] h-4 bg-zinc-300 dark:bg-zinc-700" />

          {/* Toggle de Dark Mode Tecnológico */}
          <button
            onClick={toggleTheme}
            className="relative flex items-center justify-center w-10 h-10 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-zinc-700 dark:text-zinc-300 group"
            aria-label="Alternar modo oscuro"
          >
            {isDarkMode ? (
              <Sun strokeWidth={2} className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
            ) : (
              <Moon strokeWidth={2} className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
            )}
          </button>
          
        </div>
      </div>
    </motion.nav>
  );
}