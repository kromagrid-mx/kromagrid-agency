'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'Clínica Luminous',
    category: 'Diseño Boutique & Captación',
    tech: ['Identidad Visual', 'Conversión', 'Prestigio'],
    link: 'https://mprz18.github.io/clinica-dental-sonrisa/',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop', 
    size: 'md:col-span-2', // Ocupa dos columnas
  },
  {
    id: 2,
    title: 'Visionary Eye Care',
    category: 'Catálogo Visual Premium',
    tech: ['Dirección de Arte', 'Exhibición'],
    link: 'https://mprz18.github.io/Borrador-Optica/',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
    size: 'md:col-span-1', // Ocupa una columna
  },
  {
    id: 3,
    title: 'Dr. Arisendi | Estética',
    category: 'Sitio Web de Autoridad',
    tech: ['Marca Personal', 'Minimalismo', 'Confianza'],
    link: 'https://mprz18.github.io/APEX-STUDIO/',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    size: 'md:col-span-3', // Ocupa todo el ancho en formato banner
  },
];

export default function PortfolioGrid() {
  return (
    <section id="portafolio" className="w-full max-w-7xl mx-auto py-32 px-6 relative z-10">
      
      {/* Cabecera Editorial */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-8 h-[1px] bg-kg-gold"></span>
            <span className="text-xs font-medium tracking-[0.2em] text-kg-gold uppercase">Colección Selecta</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-kg-charcoal dark:text-kg-cream mb-6 tracking-tight leading-tight"
          >
            Diseño que proyecta <span className="italic text-kg-gold">autoridad.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-kg-muted text-lg font-light"
          >
            Proyectos reales desarrollados con un enfoque absoluto en la elegancia, el rendimiento y la captación de pacientes de alto valor.
          </motion.p>
        </div>
      </div>

      {/* Grid Asimétrico (Estilo Revista) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 auto-rows-[450px]">
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
            className={`group relative overflow-hidden bg-kg-charcoal block ${project.size}`}
          >
            {/* Imagen con zoom ultra-lento */}
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
            />
            
            {/* Overlay para garantizar legibilidad (siempre oscuro para que el texto blanco/crema resalte) */}
            <div className="absolute inset-0 bg-gradient-to-t from-kg-charcoal via-kg-charcoal/20 to-transparent opacity-90 transition-opacity duration-700 z-10" />

            {/* Contenido interactivo */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
              
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                {/* Etiquetas (Dirección de Arte) */}
                <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[9px] uppercase tracking-[0.2em] font-medium px-3 py-1 border border-kg-cream/30 text-kg-cream backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-kg-gold text-xs font-medium mb-3 uppercase tracking-widest">{project.category}</p>
                
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-serif text-kg-cream transition-colors">{project.title}</h3>
                  
                  {/* Botón Flotante Minimalista */}
                  <div className="w-12 h-12 rounded-full border border-kg-gold/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-kg-gold transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight strokeWidth={1.5} className="w-5 h-5 text-kg-gold group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Borde exterior sutil iluminado al hacer hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-kg-gold/30 transition-colors duration-700 z-30 pointer-events-none" />
          </motion.a>
        ))}
      </div>
      
    </section>
  );
}