'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 35, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Efecto Parallax vinculado al scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scaleOrb = useTransform(scrollYProgress, [0, 1], [1, 1.35]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-kg-alabaster dark:bg-kg-obsidian transition-colors duration-700"
    >
      {/* Iluminación de estudio con movimiento orgánico */}
      <motion.div
        style={{ scale: scaleOrb }}
        animate={{
          opacity: [0.4, 0.75, 0.4],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] h-[55vh] bg-kg-champagne/15 dark:bg-kg-champagne/10 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Líneas arquitectónicas sutiles de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,160,89,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,160,89,0.04)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Contenedor Principal con Parallax */}
      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto pt-24 pb-12"
      >
        {/* Etiqueta de Posicionamiento */}
        <motion.div
          variants={revealItem}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-kg-champagne/30 bg-kg-silk/70 dark:bg-kg-onyx/70 mb-10 backdrop-blur-md shadow-editorial dark:shadow-editorial-dark"
        >
          <Sparkles className="w-3.5 h-3.5 text-kg-champagne" />
          <span className="text-[10px] font-medium tracking-[0.28em] text-kg-ink dark:text-kg-alabaster uppercase">
            Ingeniería Digital & Software a la Medida
          </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          variants={revealItem}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-serif text-kg-ink dark:text-kg-alabaster mb-8 leading-[1.06] tracking-tight"
        >
          Software con la precisión <br className="hidden md:block" />
          de la{' '}
          <span className="italic text-kg-champagne font-normal">
            alta costura.
          </span>
        </motion.h1>

        {/* Subtítulo Persuasivo */}
        <motion.p
          variants={revealItem}
          className="text-base sm:text-lg md:text-xl text-kg-muted mb-14 max-w-2xl leading-relaxed font-light"
        >
          No construimos simples páginas web. Diseñamos plataformas escalables, tiendas en línea y sistemas a la medida que elevan el estatus de tu marca y automatizan tu crecimiento.
        </motion.p>

        {/* Botones de Acción con Efecto Cortina Dorada */}
        <motion.div
          variants={revealItem}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          <Link
            href="#cotizador"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-4 px-10 py-5 bg-kg-ink text-kg-alabaster dark:bg-kg-alabaster dark:text-kg-obsidian text-xs font-medium tracking-[0.22em] uppercase transition-all duration-500 hover:shadow-gold-glow"
          >
            <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-white dark:group-hover:text-kg-obsidian">
              Proyectar Inversión
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </span>
            <div className="absolute inset-0 h-full w-0 bg-kg-champagne transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-full z-0" />
          </Link>

          <Link
            href="#portafolio"
            className="inline-flex items-center justify-center px-10 py-5 border border-kg-ink/15 dark:border-kg-alabaster/15 bg-kg-silk/40 dark:bg-kg-onyx/40 backdrop-blur-sm text-kg-ink dark:text-kg-alabaster text-xs font-medium tracking-[0.22em] uppercase hover:border-kg-champagne hover:text-kg-champagne dark:hover:border-kg-champagne dark:hover:text-kg-champagne transition-all duration-500"
          >
            Explorar Colección
          </Link>
        </motion.div>

        {/* Pilares de Autoridad */}
        <motion.div
          variants={revealItem}
          className="mt-20 pt-8 border-t border-kg-ink/10 dark:border-kg-alabaster/10 flex flex-col items-center gap-4 w-full max-w-2xl"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-kg-muted/80">
            Estándar de Excelencia
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs tracking-[0.15em] uppercase text-kg-ink/60 dark:text-kg-alabaster/60 font-light">
            <span>Arquitectura Escalable</span>
            <span className="text-kg-champagne text-sm font-serif">✧</span>
            <span>Diseño Persuasivo</span>
            <span className="text-kg-champagne text-sm font-serif">✧</span>
            <span>Alto Rendimiento</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Indicador de Scroll Animado en la parte inferior */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-kg-muted">
          Desliza
        </span>
        <div className="w-[1px] h-10 bg-kg-ink/10 dark:bg-kg-alabaster/10 overflow-hidden">
          <motion.div
            animate={{ y: [-40, 40] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-1/2 bg-kg-champagne"
          />
        </div>
      </motion.div>
    </section>
  );
}