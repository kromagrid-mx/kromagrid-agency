'use client'; // Necesario si en el futuro agregas hooks para escuchar cuando se agende

export default function CalendarEmbed() {
  return (
    <section id="agendar" className="w-full max-w-4xl mx-auto py-24 px-6 relative z-10">
      
      {/* Elemento de diseño: Brillo sutil de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span className="text-xs text-zinc-300 font-medium uppercase tracking-wider">Paso Final</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-mono font-bold text-zinc-100 mb-4">
          Hablemos de tu proyecto.
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Agenda una asesoría técnica gratuita de 15 minutos. Sin presiones, sin tácticas de venta agresivas. Solo tú, nosotros y tu idea de negocio.
        </p>
      </div>

      {/* Contenedor del Calendario (Glassmorphism) */}
      <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl p-2 md:p-4 shadow-2xl overflow-hidden min-h-[600px] flex items-center justify-center">
        
        {/* Placeholder de carga mientras responde el iframe */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-0 text-zinc-500">
          <svg className="w-8 h-8 animate-spin mb-4 text-emerald-500" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-sm animate-pulse">Cargando disponibilidad...</p>
        </div>

        {/* IFRAME DE CAL.COM CON TU URL REAL */}
        <iframe 
          src="https://cal.com/moises-perez-rico-tymhle/llamada-estrategica?theme=dark" 
          className="w-full h-full min-h-[600px] rounded-xl border-none relative z-10 bg-transparent"
          title="Agendar llamada con DevStudio"
          loading="lazy"
        ></iframe>

      </div>
    </section>
  );
}