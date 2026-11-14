'use client';

import { motion } from 'framer-motion';
import { Video, Clock, Target } from 'lucide-react';

export default function CalendarEmbed() {
  return (
    <section id="agendar" className="w-full py-32 px-6 relative z-10 bg-zinc-950">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Cabecera del Calendario */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6"
          >
            Hagamos que suceda.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Elige el horario que mejor te quede para una llamada rápida de exploración. Cero compromisos, 100% claridad.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Panel Lateral: Qué esperar de la llamada */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 p-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-zinc-100 mb-8">¿Qué pasará en esta sesión?</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200 mb-1">1. Análisis de tu negocio</h4>
                  <p className="text-sm text-zinc-500">Entenderemos qué vendes y quién es tu cliente ideal.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200 mb-1">2. Propuesta de estructura</h4>
                  <p className="text-sm text-zinc-500">Te diremos exactamente qué secciones necesita tu web para convertir visitas en clientes.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200 mb-1">3. Tiempos y siguientes pasos</h4>
                  <p className="text-sm text-zinc-500">Definiremos fechas de entrega realistas si decidimos trabajar juntos.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-zinc-950 border border-zinc-800">
              <p className="text-sm text-zinc-400 font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Llamada por Google Meet
              </p>
            </div>
          </motion.div>

          {/* El Embed del Calendario (Iframe de Cal.com) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 p-2 rounded-3xl bg-gradient-to-b from-zinc-800 to-zinc-900/50"
          >
            <div className="w-full h-[600px] md:h-[700px] rounded-[20px] overflow-hidden bg-zinc-950 relative">
              
              {/* Overlay de carga para suavizar la entrada del iframe */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 -z-10 text-zinc-500">
                <svg className="w-8 h-8 animate-spin mb-4 text-emerald-500" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-sm animate-pulse">Cargando disponibilidad...</p>
              </div>

              {/* Iframe configurado con tu URL actual */}
              <iframe 
                src="https://cal.com/kromagrid-s33qkf/15min?embed=true&theme=dark" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                className="w-full h-full relative z-10 bg-transparent"
                title="Agendar llamada con KromaGrid"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}