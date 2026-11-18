'use client';

import { ArrowRight, Code2, Cpu, Rocket } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      
      {/* Fondo dinámico elegante */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-200 via-zinc-50 to-zinc-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950 -z-10" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto mt-16">
        
        {/* Etiqueta de Autoridad Tecnológica */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 mb-8 backdrop-blur-md shadow-sm"
        >
          <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-xs font-semibold tracking-[0.15em] text-zinc-800 dark:text-zinc-200 uppercase">
            Ingeniería Digital & Desarrollo a la Medida
          </span>
        </motion.div>

        {/* Título Principal - Copy Persuasivo */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-8 leading-[1.1]"
        >
          Tecnología diseñada para <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            escalar tu negocio.
          </span>
        </motion.h1>

        {/* Subtítulo - Ampliación de Servicios */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl leading-relaxed"
        >
          No solo hacemos páginas web. Desarrollamos plataformas interactivas, sistemas a la medida y ecosistemas digitales de alto rendimiento que automatizan procesos y multiplican tus ventas.
        </motion.p>

        {/* Botones de Acción (CTAs) Orientados a Conversión */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link 
            href="#cotizador"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-bold tracking-wide rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-1"
          >
            <Rocket className="w-4 h-4" />
            Cotizar mi Proyecto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="#portafolio"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white text-sm font-bold tracking-wide rounded-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
          >
            <Cpu className="w-4 h-4 mr-2" />
            Explorar Soluciones
          </Link>
        </motion.div>
        
        {/* Social Proof Rápido */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col items-center gap-4 w-full max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Diseñado para la excelencia</p>
          <div className="flex gap-8 text-zinc-400 dark:text-zinc-600">
            <span className="font-medium">Alto Rendimiento</span>
            <span className="font-medium">•</span>
            <span className="font-medium">UX Persuasivo</span>
            <span className="font-medium">•</span>
            <span className="font-medium">Código Escalable</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}