'use client';

import { motion } from 'framer-motion';
import { Compass, Layers, Clock, Calendar } from 'lucide-react';

const headerStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const PROTOCOL_STEPS = [
  {
    number: '01',
    title: 'Diagnóstico de Visión',
    desc: 'Analizamos los objetivos de tu empresa, tu audiencia clave y los procesos operativos que deseas elevar o automatizar.',
    icon: Compass,
  },
  {
    number: '02',
    title: 'Arquitectura & Diseño',
    desc: 'Definimos la estructura tecnológica y dirección de arte ideal (SaaS, E-Commerce o Plataforma Corporativa) para proyectar liderazgo.',
    icon: Layers,
  },
  {
    number: '03',
    title: 'Hoja de Ruta & Inversión',
    desc: 'Establecemos tiempos de entrega, hitos transparentes y el modelo de inversión exacto para iniciar la ejecución.',
    icon: Clock,
  },
];

export default function CalendarEmbed() {
  return (
    <section
      id="agendar"
      className="w-full py-32 px-6 relative z-10 bg-kg-alabaster dark:bg-kg-obsidian transition-colors duration-700 overflow-hidden"
    >
      {/* Luz volumétrica ambiental */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[85vw] max-w-[1000px] h-[45vh] bg-kg-champagne/10 dark:bg-kg-champagne/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabecera Editorial */}
        <motion.div
          variants={headerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-24"
        >
          <motion.div
            variants={revealItem}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-kg-champagne/30 bg-kg-silk/70 dark:bg-kg-onyx/70 mb-8 backdrop-blur-md"
          >
            <Calendar className="w-3.5 h-3.5 text-kg-champagne" />
            <span className="text-[10px] font-medium tracking-[0.28em] text-kg-ink dark:text-kg-alabaster uppercase">
              Consultoría Estratégica
            </span>
          </motion.div>

          <motion.h2
            variants={revealItem}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-kg-ink dark:text-kg-alabaster mb-6 tracking-tight leading-[1.08]"
          >
            El primer paso hacia la{' '}
            <span className="italic text-kg-champagne font-normal">
              distinción digital.
            </span>
          </motion.h2>

          <motion.p
            variants={revealItem}
            className="text-kg-muted text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Selecciona el horario de tu preferencia para una sesión ejecutiva privada. Evaluaremos la viabilidad, arquitectura y retorno de inversión de tu próximo ecosistema digital.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Panel Lateral: Protocolo de Consultoría */}
          <motion.div
            initial={{ opacity: 0, x: -35, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-4 p-10 sm:p-12 border border-kg-ink/10 dark:border-kg-alabaster/10 bg-kg-silk/80 dark:bg-kg-onyx/80 backdrop-blur-xl shadow-editorial dark:shadow-editorial-dark"
          >
            <div className="flex items-center justify-between mb-10 pb-5 border-b border-kg-ink/10 dark:border-kg-alabaster/10">
              <h3 className="text-[10px] font-medium tracking-[0.26em] text-kg-muted uppercase">
                Protocolo de Sesión
              </h3>
              <span className="w-2 h-2 rotate-45 bg-kg-champagne" />
            </div>

            <div className="space-y-9">
              {PROTOCOL_STEPS.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15 * index,
                      ease: [0.16, 1, 0.3, 1] as const,
                    }}
                    whileHover={{ x: 6 }}
                    className="group flex gap-5 transition-transform duration-500"
                  >
                    <div className="mt-1 shrink-0 w-9 h-9 border border-kg-champagne/30 bg-kg-alabaster/60 dark:bg-kg-obsidian/60 flex items-center justify-center group-hover:border-kg-champagne group-hover:shadow-gold-glow transition-all duration-500">
                      <Icon
                        strokeWidth={1.3}
                        className="w-4 h-4 text-kg-champagne group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2.5 mb-2">
                        <span className="font-serif italic text-sm text-kg-champagne">
                          {step.number}.
                        </span>
                        <h4 className="font-serif text-xl text-kg-ink dark:text-kg-alabaster group-hover:text-kg-champagne transition-colors duration-300">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xs text-kg-muted font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 pt-6 border-t border-kg-ink/10 dark:border-kg-alabaster/10">
              <p className="text-[10px] text-kg-ink/80 dark:text-kg-alabaster/80 uppercase tracking-[0.22em] font-medium flex items-center gap-3.5">
                <span className="w-2 h-2 rotate-45 bg-kg-champagne animate-pulse shadow-gold-glow" />
                Videoconferencia Privada (Google Meet)
              </p>
            </div>
          </motion.div>

          {/* Contenedor Arquitectónico del Calendario */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-8 relative p-1.5 border border-kg-ink/10 dark:border-kg-alabaster/10 hover:border-kg-champagne/40 bg-kg-silk/60 dark:bg-kg-onyx/60 backdrop-blur-xl shadow-editorial dark:shadow-editorial-dark hover:shadow-gold-glow transition-all duration-700"
          >
            {/* Esquinas decorativas en dorado champán */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-kg-champagne pointer-events-none z-20" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-kg-champagne pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-kg-champagne pointer-events-none z-20" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-kg-champagne pointer-events-none z-20" />

            <div className="w-full h-[620px] md:h-[700px] bg-kg-alabaster dark:bg-kg-obsidian relative overflow-hidden">
              
              {/* Estado de carga cinematográfico mientras sincroniza Cal.com */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-0 text-kg-muted">
                <div className="relative w-12 h-12 flex items-center justify-center mb-5">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 border border-kg-champagne/40 rotate-45"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    className="w-6 h-6 border border-kg-champagne"
                  />
                </div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-kg-champagne animate-pulse">
                  Sincronizando Disponibilidad...
                </p>
              </div>

              {/* Iframe de Cal.com */}
              <iframe
                src="https://cal.com/kromagrid-s33qkf/15min?embed=true"
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full h-full relative z-10 bg-transparent"
                title="Agendar sesión de consultoría estratégica"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}