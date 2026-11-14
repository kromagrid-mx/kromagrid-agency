'use client';

import React from 'react';

const TECH_STACK = [
  "NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS", 
  "STRIPE", "FIGMA", "VERCEL", "FRAMER MOTION"
];

export default function TechMarquee() {
  return (
    <section className="relative w-full py-8 bg-zinc-950/50 border-y border-zinc-900/50 overflow-hidden flex items-center z-10 backdrop-blur-sm">
      
      {/* Sombras en los bordes para ocultar el inicio y fin del texto */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

      {/* Pista de movimiento */}
      <div className="flex w-max animate-marquee space-x-12 px-6">
        {/* Duplicamos el arreglo 3 veces para que el ciclo nunca se rompa */}
        {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, index) => (
          <div key={index} className="flex items-center space-x-12">
            <span className="text-xl md:text-2xl font-mono font-bold text-zinc-700 uppercase tracking-widest hover:text-zinc-400 transition-colors cursor-default">
              {tech}
            </span>
            <span className="text-emerald-500/40 text-xl">✦</span>
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
          animation: marquee 25s linear infinite;
        }
      `}} />
    </section>
  );
}