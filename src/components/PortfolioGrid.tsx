import React from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'Clínica Dental Sonrisa',
    category: 'Landing Page de Alta Conversión',
    tech: ['UI/UX', 'Diseño Limpio', 'Captación'],
    link: 'https://mprz18.github.io/clinica-dental-sonrisa/',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop', 
  },
  {
    id: 2,
    title: 'Óptica Premium',
    category: 'Catálogo Visual',
    tech: ['Diseño Responsivo', 'Exhibición', 'Frontend'],
    link: 'https://mprz18.github.io/Borrador-Optica/',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'APEX Studio',
    category: 'Agencia Creativa',
    tech: ['Dark Mode', 'Branding', 'Animaciones'],
    link: 'https://mprz18.github.io/APEX-STUDIO/',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
  },
];

export default function PortfolioGrid() {
  return (
    <section id="portafolio" className="w-full max-w-7xl mx-auto py-32 px-6 relative z-10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-zinc-100 mb-4 tracking-tight">
            No te pedimos que confíes.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Te pedimos que veas.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Proyectos reales desarrollados con los más altos estándares de rendimiento, diseño responsivo y enfoque en conversión.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <a 
            key={project.id} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 cursor-pointer h-[450px] block"
          >
            <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-90 z-10"></div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
              
              <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700 text-emerald-400">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-zinc-300 text-sm font-medium mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold text-zinc-100 font-mono mb-2 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
              
              <div className="w-10 h-10 rounded-full border border-zinc-500 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-emerald-500 group-hover:bg-emerald-500/10 transition-all duration-300 mt-4">
                <svg className="w-5 h-5 text-emerald-400 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </div>
            
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500/30 rounded-2xl transition-colors duration-500 z-30 pointer-events-none"></div>
          </a>
        ))}
      </div>
      
    </section>
  );
}