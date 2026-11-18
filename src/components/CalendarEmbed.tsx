'use client';

import { motion } from 'framer-motion';
import { Video, Clock, Diamond } from 'lucide-react';

export default function CalendarEmbed() {
  return (
    <section id="agendar" className="w-full py-32 px-6 relative z-10">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Cabecera Editorial */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="w-8 h-[1px] bg-kg-gold"></span>
            <span className="text-xs font-medium tracking-[0.2em] text-kg-gold uppercase">Llamada de Diagnóstico</span>
            <span className="w-8 h-[1px] bg-kg-gold"></span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-kg-charcoal dark:text-kg-cream mb-6 tracking-tight"
          >
            El primer paso hacia la <span className="italic text-kg-gold">excelencia.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-kg-muted text-lg max-w-2xl mx-auto font-light"
          >
            Selecciona el horario de tu preferencia para una sesión de evaluación. Claridad absoluta y total discreción para tu proyecto.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Panel Lateral Editorial */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 p-10 border border-kg-charcoal/10 dark:border-kg-cream/10 bg-kg-gold/5"
          >
            <h3 className="text-[10px] font-medium tracking-[0.2em] text-kg-charcoal dark:text-kg-cream uppercase mb-10 pb-4 border-b border-kg-charcoal/10 dark:border-kg-cream/10">
              Dinámica de la Sesión
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="mt-1">
                  <Diamond strokeWidth={1.5} className="w-5 h-5 text-kg-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-kg-charcoal dark:text-kg-cream mb-2">1. Evaluación de Práctica</h4>
                  <p className="text-xs text-kg-muted font-light leading-relaxed">Analizaremos el perfil de tus pacientes y tus objetivos de posicionamiento a nivel clínica.</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="mt-1">
                  <Video strokeWidth={1.5} className="w-5 h-5 text-kg-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-kg-charcoal dark:text-kg-cream mb-2">2. Arquitectura Digital</h4>
                  <p className="text-xs text-kg-muted font-light leading-relaxed">Definiremos la estructura ideal para proyectar tu prestigio y filtrar prospectos no calificados.</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="mt-1">
                  <Clock strokeWidth={1.5} className="w-5 h-5 text-kg-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-kg-charcoal dark:text-kg-cream mb-2">3. Ruta de Ejecución</h4>
                  <p className="text-xs text-kg-muted font-light leading-relaxed">Estableceremos tiempos, alcances y el modelo de inversión exacto si decidimos colaborar.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-kg-charcoal/10 dark:border-kg-cream/10">
              <p className="text-[10px] text-kg-charcoal dark:text-kg-cream uppercase tracking-widest font-medium flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-kg-gold animate-pulse" />
                Llamada Ejecutiva (Google Meet)
              </p>
            </div>
          </motion.div>

          {/* El Embed del Calendario */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 p-1 border border-kg-charcoal/10 dark:border-kg-cream/10 bg-white dark:bg-[#1A1C1F] shadow-2xl"
          >
            <div className="w-full h-[600px] md:h-[700px] bg-kg-cream dark:bg-kg-charcoal relative">
              
              {/* Overlay de carga elegante */}
              <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 text-kg-muted">
                <svg className="w-6 h-6 animate-spin mb-4 text-kg-gold" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-[10px] tracking-[0.2em] uppercase animate-pulse">Sincronizando agenda...</p>
              </div>

              {/* Iframe de Cal.com sin forzar el theme=dark para que se adapte o se vea más limpio */}
              <iframe 
                src="https://cal.com/kromagrid-s33qkf/15min?embed=true" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                className="w-full h-full relative z-10 bg-transparent"
                title="Agendar llamada de diagnóstico"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}