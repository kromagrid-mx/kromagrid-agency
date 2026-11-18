'use client';

import React from 'react';

// Cambiamos el enfoque a soluciones de software y arquitectura B2B
const TECH_VALUES = [
  "ARQUITECTURA CLOUD", "AUTOMATIZACIÓN B2B", "SISTEMAS A LA MEDIDA", 
  "ESCALABILIDAD", "ALTO RENDIMIENTO", "SEGURIDAD DE DATOS", 
  "INTEGRACIONES API", "TRANSFORMACIÓN DIGITAL"
];

export default function TechMarquee() {
  return (
    <section className="relative w-full py-8 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800/50 overflow-hidden flex items-center z-10 transition-colors duration-500">
      
      {/* Sombras en los bordes que se adaptan al modo claro/oscuro (tonos zinc) */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-20 pointer-events-none transition-colors duration-500" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-20 pointer-events-none transition-colors duration-500" />

      {/* Pista de movimiento */}
      <div className="flex w-max animate-marquee space-x-16 px-8">
        {/* Duplicamos el arreglo 3 veces para un ciclo infinito fluido */}
        {[...TECH_VALUES, ...TECH_VALUES, ...TECH_VALUES].map((value, index) => (
          <div key={index} className="flex items-center space-x-16">
            <span className="text-[11px] md:text-xs font-bold tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default font-sans">
              {value}
            </span>
            {/* Separador técnico (tipo código) */}
            <span className="text-blue-500/40 text-sm font-mono font-bold">//</span>
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
          /* Velocidad fluida y constante para un entorno tech */
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  );
}