'use client';

import { ArrowRight, Diamond } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* Luces volumétricas muy sutiles (Reemplazan los brillos neón) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-kg-gold/5 dark:bg-kg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto mt-16">
        
        {/* Etiqueta de Autoridad Elegante */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-kg-gold/20 bg-kg-gold/5 mb-10 backdrop-blur-sm"
        >
          <Diamond className="w-3.5 h-3.5 text-kg-gold" />
          <span className="text-xs font-medium tracking-[0.2em] text-kg-gold uppercase">
            Diseño Digital de Alto Valor
          </span>
        </motion.div>

        {/* Título Principal (Serif) */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-kg-charcoal dark:text-kg-cream mb-8 leading-[1.1]"
        >
          Proyecta el verdadero <br className="hidden md:block" />
          <span className="italic text-kg-gold">prestigio</span> de tu práctica.
        </motion.h1>

        {/* Subtítulo */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-kg-muted mb-12 max-w-2xl leading-relaxed font-light"
        >
          Construimos sitios web elegantes y persuasivos para clínicas y especialistas que buscan dejar de competir por precio y empezar a destacar por excelencia.
        </motion.p>

        {/* Botones de Acción (CTAs) Estilo Luxury */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Link 
            href="#cotizador"
            className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 bg-kg-charcoal text-kg-cream dark:bg-kg-cream dark:text-kg-charcoal text-sm font-medium tracking-wide uppercase transition-all duration-500 hover:bg-kg-gold dark:hover:bg-kg-gold hover:text-white"
          >
            Agendar diagnóstico
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="#portafolio"
            className="inline-flex items-center justify-center px-9 py-4 border border-kg-charcoal/20 dark:border-kg-cream/20 text-kg-charcoal dark:text-kg-cream text-sm font-medium tracking-wide uppercase hover:border-kg-gold hover:text-kg-gold dark:hover:border-kg-gold dark:hover:text-kg-gold transition-all duration-500"
          >
            Ver portafolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}