'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MonitorPlay } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'NexLogistics B2B',
    category: 'Plataforma SaaS & Tracking',
    tech: ['Next.js', 'Arquitectura Cloud', 'Dashboard UI'],
    link: 'https://mprz18.github.io/APEX-STUDIO/',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', // Imagen de un dashboard moderno
    size: 'md:col-span-2', // Ocupa dos columnas
  },
  {
    id: 2,
    title: 'Aura Commerce',
    category: 'E-Commerce Escalable',
    tech: ['Pagos Stripe', 'Optimización CR', 'API'],
    link: 'https://mprz18.github.io/Borrador-Optica/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', // Imagen de analíticas de ventas
    size: 'md:col-span-1', // Ocupa una columna
  },
  {
    id: 3,
    title: 'Fintech Nova',
    category: 'Sitio Corporativo Institucional',
    tech: ['Seguridad', 'Alto Rendimiento', 'UI/UX'],
    link: 'https://mprz18.github.io/clinica-dental-sonrisa/',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop', // Imagen de tech/finanzas
    size: 'md:col-span-3', // Ocupa todo el ancho en formato banner
  },
];

export default function PortfolioGrid() {
  return (
    <section id="portafolio" className="w-full max-w-7xl mx-auto py-32 px-6 relative z-10 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      
      {/* Cabecera Tech / Corporativa */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 mb-6 backdrop-blur-md shadow-sm"
          >
            <MonitorPlay className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold tracking-[0.15em] text-zinc-800 dark:text-zinc-200 uppercase">
              Casos de Éxito
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight"
          >
            Ingeniería que genera <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">resultados reales.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-lg"
          >
            Explora plataformas corporativas, sistemas a la medida y ecosistemas de e-commerce diseñados con arquitectura escalable y un enfoque absoluto en conversión B2B.
          </motion.p>
        </div>
      </div>

      {/* Grid Asimétrico (Estilo Dashboard UI) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[400px]">
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
            className={`group relative overflow-hidden rounded-2xl bg-zinc-900 block border border-zinc-800 hover:border-blue-500/50 transition-all duration-500 shadow-xl ${project.size}`}
          >
            {/* Imagen con zoom moderno */}
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-[1s] ease-out mix-blend-overlay"
            />
            
            {/* Overlay técnico para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-transparent opacity-90 transition-opacity duration-500 z-10" />

            {/* Contenido interactivo */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                {/* Etiquetas Tech (Stack Tecnológico) */}
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-md bg-zinc-800/80 border border-zinc-700 text-cyan-400 backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-blue-400 text-xs font-bold mb-2 uppercase tracking-widest">{project.category}</p>
                
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-extrabold tracking-tight text-white transition-colors">{project.title}</h3>
                  
                  {/* Botón Flotante Tech */}
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-blue-600 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Resplandor exterior al hacer hover (Glow effect) */}
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(59,130,246,0)] group-hover:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.5)] transition-all duration-500 z-30 pointer-events-none" />
          </motion.a>
        ))}
      </div>
      
    </section>
  );
}