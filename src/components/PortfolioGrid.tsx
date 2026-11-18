'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';

const PROJECTS = [
  {
    id: '01',
    title: 'NexLogistics Enterprise',
    category: 'Plataforma SaaS & Automatización',
    tech: ['Software a la Medida', 'Arquitectura Cloud', 'Analítica en Tiempo Real'],
    link: 'https://mprz18.github.io/APEX-STUDIO/',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop',
    size: 'md:col-span-2',
  },
  {
    id: '02',
    title: 'Maison Aura',
    category: 'E-Commerce & Catálogo Interactivo',
    tech: ['Pasarela de Pagos', 'Experiencia UI/UX', 'Alta Conversión'],
    link: 'https://mprz18.github.io/Borrador-Optica/',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
    size: 'md:col-span-1',
  },
  {
    id: '03',
    title: 'Apex & Asociados',
    category: 'Ecosistema Corporativo & Reservas',
    tech: ['Ingeniería Web', 'Posicionamiento de Marca', 'Rendimiento Óptimo'],
    link: 'https://mprz18.github.io/clinica-dental-sonrisa/',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    size: 'md:col-span-3',
  },
];

const headerStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PortfolioGrid() {
  return (
    <section
      id="portafolio"
      className="w-full py-32 px-6 relative z-10 bg-kg-alabaster dark:bg-kg-obsidian transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera Editorial */}
        <motion.div
          variants={headerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <motion.div
              variants={headerItem}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-kg-champagne/30 bg-kg-silk/70 dark:bg-kg-onyx/70 mb-6 backdrop-blur-md"
            >
              <Layers className="w-3.5 h-3.5 text-kg-champagne" />
              <span className="text-[10px] font-medium tracking-[0.28em] text-kg-ink dark:text-kg-alabaster uppercase">
                Colección Selecta
              </span>
            </motion.div>

            <motion.h2
              variants={headerItem}
              className="text-4xl sm:text-5xl md:text-6xl font-serif text-kg-ink dark:text-kg-alabaster tracking-tight leading-[1.08]"
            >
              Ingeniería que proyecta{' '}
              <span className="italic text-kg-champagne font-normal">
                autoridad.
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={headerItem}
            className="text-kg-muted text-base md:text-lg font-light max-w-md leading-relaxed"
          >
            Desde plataformas SaaS y tiendas en línea hasta portales corporativos. Cada desarrollo está diseñado para seducir visualmente y multiplicar resultados.
          </motion.p>
        </motion.div>

        {/* Cuadrícula Asimétrica de Exhibición */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[440px]">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 1.1,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative overflow-hidden bg-kg-obsidian border border-kg-ink/10 dark:border-kg-alabaster/10 hover:border-kg-champagne/60 shadow-editorial dark:shadow-editorial-dark hover:shadow-gold-glow transition-all duration-700 block ${project.size}`}
            >
              {/* Imagen con zoom cinematográfico continuo al pasar el cursor */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:opacity-40 group-hover:scale-105 transition-all duration-[1.6s] ease-[0.16,1,0.3,1]"
              />

              {/* Degradado arquitectónico para máxima legibilidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-kg-obsidian via-kg-obsidian/45 to-transparent opacity-95 transition-opacity duration-700 z-10" />

              {/* Índice Editorial Superior */}
              <div className="absolute top-8 left-8 right-8 flex items-center justify-between z-20">
                <span className="font-serif italic text-xl text-kg-champagne/80 group-hover:text-kg-champagne transition-colors duration-500">
                  {project.id}.
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-kg-alabaster/60 border border-kg-alabaster/15 px-3 py-1 backdrop-blur-md">
                  Caso de Estudio
                </span>
              </div>

              {/* Contenido Inferior con Elevación Fluida */}
              <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end z-20">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                  
                  {/* Etiquetas de Capacidades */}
                  <div className="flex flex-wrap gap-2 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-75">
                    {project.tech.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] uppercase tracking-[0.2em] font-medium px-3 py-1 border border-kg-champagne/30 bg-kg-obsidian/60 text-kg-alabaster/90 backdrop-blur-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="text-kg-champagne text-xs font-medium mb-2.5 uppercase tracking-[0.22em]">
                    {project.category}
                  </p>

                  <div className="flex items-end justify-between gap-4">
                    <h3 className="text-2xl sm:text-3xl font-serif text-kg-alabaster tracking-tight">
                      {project.title}
                    </h3>

                    {/* Botón Circular Magnético */}
                    <div className="w-12 h-12 shrink-0 rounded-full border border-kg-champagne/40 bg-kg-obsidian/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-kg-champagne group-hover:border-kg-champagne transition-all duration-500 transform group-hover:scale-110">
                      <ArrowUpRight
                        strokeWidth={1.5}
                        className="w-5 h-5 text-kg-champagne group-hover:text-kg-obsidian group-hover:rotate-45 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Marco interior luminoso al hacer hover */}
              <div className="absolute inset-0 border border-kg-champagne/0 group-hover:border-kg-champagne/30 transition-colors duration-700 z-30 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}