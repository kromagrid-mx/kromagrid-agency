export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 text-center z-10">
      
      {/* Efecto de luz de fondo (Glow) - Da un toque muy premium de tecnología */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-emerald-500/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>
      
      {/* Etiqueta superior de confianza */}
      <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs md:text-sm text-zinc-300 font-medium tracking-wide uppercase">
          Talento emergente, calidad de agencia
        </span>
      </div>

      {/* Título Principal (H1) - Optimizado para SEO y conversión */}
      <h1 className="max-w-5xl text-5xl md:text-7xl font-bold tracking-tighter text-zinc-100 font-mono mb-6 leading-[1.1]">
        Construimos webs que venden. <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
          Sin corporativismo.
        </span>
      </h1>

      {/* Subtítulo - El argumento de venta */}
      <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
        Somos ingenieros en formación. No cobramos por oficinas lujosas ni burocracia. Tu inversión va 100% al código, al diseño y a hacer que tu negocio escale.
      </p>

      {/* Botones de Acción (CTAs) */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
        <a 
          href="#cotizador" 
          className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] flex justify-center items-center gap-2"
        >
          Cotizar mi proyecto
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
        
        <a 
          href="#portafolio" 
          className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 hover:border-zinc-400 hover:bg-zinc-800/50 text-zinc-200 font-medium rounded-lg transition-all duration-300 flex justify-center items-center"
        >
          Ver nuestro trabajo
        </a>
      </div>
      
    </section>
  );
}