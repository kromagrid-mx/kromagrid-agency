'use client';

import { motion } from 'framer-motion';
import { Terminal, Cpu, Clock, CalendarDays } from 'lucide-react';

export default function CalendarEmbed() {
  return (
    <section id="agendar" className="w-full py-32 px-6 relative z-10 bg-white dark:bg-zinc-950 transition-colors duration-500">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Cabecera Técnica */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 mb-6 backdrop-blur-md"
          >
            <CalendarDays className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold tracking-[0.15em] text-zinc-800 dark:text-zinc-200 uppercase">
              Discovery Call
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight leading-tight"
          >
            El primer paso hacia la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">escalabilidad.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto font-normal"
          >
            Selecciona el horario de tu preferencia para una auditoría técnica gratuita. Analizaremos la viabilidad, arquitectura y el retorno de inversión de tu proyecto.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Panel Lateral - Dinámica de la sesión B2B */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 p-10 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 shadow-lg"
          >
            <h3 className="text-xs font-bold tracking-[0.2em] text-zinc-500 dark:text-zinc-400 uppercase mb-10 pb-4 border-b border-zinc-200 dark:border-zinc-800">
              Protocolo de Evaluación
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="mt-1">
                  <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-zinc-900 dark:text-white mb-2">1. Análisis de Requerimientos</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Evaluaremos tus cuellos de botella actuales, objetivos comerciales y las lógicas de negocio a digitalizar.</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="mt-1">
                  <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-zinc-900 dark:text-white mb-2">2. Arquitectura de Solución</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Definiremos el stack tecnológico ideal (SaaS, E-commerce, App) para garantizar seguridad y alto rendimiento.</p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="mt-1">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-zinc-900 dark:text-white mb-2">3. Roadmap de Ejecución</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">Estableceremos fases de desarrollo, tiempos de entrega y el modelo de inversión exacto para el despliegue.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <p className="text-[10px] text-zinc-900 dark:text-white uppercase tracking-widest font-bold flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                Videoconferencia Segura (Google Meet)
              </p>
            </div>
          </motion.div>

          {/* El Embed del Calendario adaptado a entorno Dark/Tech */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 p-1 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl"
          >
            <div className="w-full h-[600px] md:h-[700px] bg-zinc-50 dark:bg-zinc-950 relative rounded-xl overflow-hidden">
              
              {/* Overlay de carga tecnológico */}
              <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 text-zinc-500">
                <svg className="w-8 h-8 animate-spin mb-4 text-blue-600 dark:text-blue-500" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase animate-pulse text-blue-600 dark:text-blue-400">Inicializando agenda...</p>
              </div>

              {/* Iframe de Cal.com */}
              <iframe 
                src="https://cal.com/kromagrid-s33qkf/15min?embed=true" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                className="w-full h-full relative z-10 bg-transparent"
                title="Agendar llamada de diagnóstico técnico"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}