'use client';

import React from 'react';

// Cambiamos el stack técnico por los valores que busca una clínica premium
const PREMIUM_VALUES = [
  "DISEÑO BOUTIQUE", "PRESTIGIO DIGITAL", "CAPTACIÓN PREMIUM", "AUTORIDAD MÉDICA", 
  "POSICIONAMIENTO", "EXCLUSIVIDAD", "PACIENTES DE ALTO VALOR", "ESTÉTICA EDITORIAL"
];

export default function TechMarquee() {
  return (
    <section className="relative w-full py-10 bg-kg-cream dark:bg-kg-charcoal border-y border-kg-charcoal/5 dark:border-kg-cream/5 overflow-hidden flex items-center z-10 transition-colors duration-500">
      
      {/* Sombras en los bordes que se adaptan al modo claro/oscuro */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-kg-cream dark:from-kg-charcoal to-transparent z-20 pointer-events-none transition-colors duration-500" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-kg-cream dark:from-kg-charcoal to-transparent z-20 pointer-events-none transition-colors duration-500" />

      {/* Pista de movimiento */}
      <div className="flex w-max animate-marquee space-x-16 px-8">
        {/* Duplicamos el arreglo 3 veces para que el ciclo nunca se rompa */}
        {[...PREMIUM_VALUES, ...PREMIUM_VALUES, ...PREMIUM_VALUES].map((value, index) => (
          <div key={index} className="flex items-center space-x-16">
            <span className="text-[11px] md:text-xs font-medium tracking-[0.3em] uppercase text-kg-charcoal/40 dark:text-kg-cream/40 hover:text-kg-gold dark:hover:text-kg-gold transition-colors cursor-default">
              {value}
            </span>
            {/* Un separador más sutil y elegante */}
            <span className="text-kg-gold/40 text-lg font-serif">✧</span>
          </div>
        ))}
      </div>

      {/* Inyección de la animación */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          /* Animación un poco más lenta para dar esa sensación de calma y lujo */
          animation: marquee 35s linear infinite;
        }
      `}} />
    </section>
  );
}