'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LUXURY_CAPABILITIES = [
  'INGENIERÍA A LA MEDIDA',
  'ARQUITECTURA ESCALABLE',
  'DISEÑO DE AUTOR',
  'ECOSISTEMAS DIGITALES',
  'AUTOMATIZACIÓN EMPRESARIAL',
  'COMERCIO DE ALTO NIVEL',
  'EXPERIENCIA INMERSIVA',
  'RENDIMIENTO ABSOLUTO',
];

export default function TechMarquee() {
  return (
    <section className="relative w-full py-12 bg-kg-silk/50 dark:bg-kg-onyx/50 border-y border-kg-ink/5 dark:border-kg-alabaster/5 overflow-hidden flex items-center z-10 transition-colors duration-700 group">
      
      {/* Desvanecimiento lateral cinematográfico */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-r from-kg-alabaster dark:from-kg-obsidian to-transparent z-20 pointer-events-none transition-colors duration-700" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-l from-kg-alabaster dark:from-kg-obsidian to-transparent z-20 pointer-events-none transition-colors duration-700" />

      {/* Pista de movimiento infinito con pausa al hacer hover */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] space-x-16 px-8">
        {[...LUXURY_CAPABILITIES, ...LUXURY_CAPABILITIES, ...LUXURY_CAPABILITIES].map((value, index) => (
          <div key={index} className="flex items-center space-x-16">
            <motion.span
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] md:text-xs font-medium tracking-[0.32em] uppercase text-kg-ink/45 dark:text-kg-alabaster/45 hover:text-kg-champagne dark:hover:text-kg-champagne transition-colors duration-500 cursor-default"
            >
              {value}
            </motion.span>
            
            {/* Emblema romboidal en dorado champán */}
            <span className="w-1.5 h-1.5 rotate-45 border border-kg-champagne/60 bg-kg-champagne/20 inline-block" />
          </div>
        ))}
      </div>

      {/* Animación fluida de desplazamiento */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 42s linear infinite;
        }
      `}} />
    </section>
  );
}