'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-zinc-950">
      
      {/* Fondos dinámicos premium (Glows asimétricos) */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      {/* Textura sutil para eliminar lo plano del fondo */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-16">
        
        {/* Etiqueta de Autoridad (Glassmorphism) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
            Talento Emergente, Calidad de Agencia
          </span>
        </motion.div>

        {/* Título Principal con entrada fluida */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-100 mb-6 leading-[1.15]"
        >
          Construimos webs que venden. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500">
            Sin corporativismo.
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed"
        >
          Somos ingenieros en formación. No cobramos por oficinas lujosas ni burocracia. 
          Tu inversión va 100% al código, al diseño y a hacer que tu negocio escale.
        </motion.p>

        {/* Botones de Acción (CTAs) mejorados */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link 
            href="#cotizador"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1"
          >
            Cotizar mi proyecto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="#portafolio"
            className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900/40 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-600 text-zinc-300 font-medium rounded-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
          >
            Ver nuestro trabajo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}