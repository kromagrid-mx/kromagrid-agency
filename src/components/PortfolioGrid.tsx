'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'Clínica Dental Sonrisa',
    category: 'Landing Page de Alta Conversión',
    tech: ['UI/UX', 'Diseño Limpio', 'Captación'],
    link: 'https://mprz18.github.io/clinica-dental-sonrisa/',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop', 
    size: 'md:col-span-2', // Ocupa dos columnas
  },
  {
    id: 2,
    title: 'Óptica Premium',
    category: 'Catálogo Visual',
    tech: ['Diseño Responsivo', 'Exhibición', 'Frontend'],
    link: 'https://mprz18.github.io/Borrador-Optica/',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
    size: 'md:col-span-1', // Ocupa una columna
  },
  {
    id: 3,
    title: 'APEX Studio',
    category: 'Agencia Creativa',
    tech: ['Dark Mode', 'Branding', 'Animaciones'],
    link: 'https://mprz18.github.io/APEX-STUDIO/',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    size: 'md:col-span-3', // Ocupa todo el ancho en formato banner
  },
];

export default function PortfolioGrid() {
  return (
    <section id="portafolio" className="w-full max-w-7xl mx-auto py-32 px-6 relative z-10">
      
      {/* Cabecera de sección animada */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-mono font-bold text-zinc-100 mb-4 tracking-tight"
          >
            No te pedimos que confíes.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Te pedimos que veas.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg"
          >
            Proyectos reales desarrollados con los más altos estándares de rendimiento, diseño responsivo y enfoque en conversión.
          </motion.p>
        </div>
      </div>

      {/* Grid Asimétrico (Bento Box) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
        {PROJECTS.map((project, index) => (
          <motion.a 
            key={project.id} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className={`group relative rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-900/30 cursor-pointer block backdrop-blur-sm ${project.size}`}
          >
            {/* Imagen con zoom lento */}
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            
            {/* Gradientes para legibilidad y efecto premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            {/* Contenido interactivo */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {/* Etiquetas Tech (Glassmorphism) */}
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] sm:text-xs uppercase tracking-wider font-bold px-3 py-1.5 rounded-full bg-zinc-900/60 backdrop-blur-md border border-zinc-700/50 text-emerald-400">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-emerald-400 text-xs sm:text-sm font-semibold mb-2 uppercase tracking-wider">{project.category}</p>
                
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-mono group-hover:text-white transition-colors">{project.title}</h3>
                  
                  {/* Botón flotante */}
                  <div className="w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-emerald-500 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 backdrop-blur-sm">
                    <ArrowUpRight className="w-6 h-6 text-emerald-400 group-hover:text-zinc-950 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Borde exterior iluminado al hacer hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/20 rounded-3xl transition-colors duration-500 z-30 pointer-events-none" />
          </motion.a>
        ))}
      </div>
      
    </section>
  );
}