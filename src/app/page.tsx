import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import PortfolioGrid from '@/components/PortfolioGrid';
import DynamicCalculator from '@/components/DynamicCalculator';
import CalendarEmbed from '@/components/CalendarEmbed';

// Metadata optimizada para el sector B2B / Desarrollo de Software
export const metadata = {
  title: 'KromaGrid | Agencia de Software & Desarrollo a la Medida',
  description: 'Desarrollamos plataformas escalables, sistemas web y ecosistemas digitales de alto rendimiento para corporativos y startups.',
  openGraph: {
    title: 'KromaGrid | Ingeniería Digital y Arquitectura de Software',
    description: 'Automatiza procesos y escala tu negocio con tecnología diseñada a la medida.',
    url: 'https://kromagrid.netlify.app',
    siteName: 'KromaGrid',
    images: [
      {
        url: '/link-preview.png', 
        width: 1200,
        height: 630,
        alt: 'KromaGrid Software Agency',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
};

export default function Home() {
  return (
    // Reemplazamos los fondos luxury por nuestra paleta tecnológica (zinc y blue)
    <main className="flex flex-col w-full min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-500">
      
      <div className="relative z-10 flex flex-col w-full">
        {/* 1. El Gancho (Hero B2B) */}
        <HeroSection />

        {/* 2. La Cinta Técnica */}
        <TechMarquee />

        {/* 3. La Prueba (Casos de Éxito UI) */}
        <PortfolioGrid />

        {/* 4. El Simulador de Inversión */}
        <DynamicCalculator />

        {/* 5. Auditoría (Calendario Discovery) */}
        <CalendarEmbed />
      </div>

      {/* 6. Footer Tecnológico Corporativo */}
      <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 relative z-20 mt-12 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
        
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-2">
              Kroma<span className="text-blue-600 dark:text-blue-500">Grid</span>
            </span>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium max-w-xs">
              Ingeniería de software y ecosistemas digitales escalables para el sector B2B.
            </p>
          </div>
          
          <div className="flex items-center gap-10">
            <a href="https://wa.me/525520138173" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-widest uppercase text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Contacto
            </a>
            {/* Cambiamos Instagram por LinkedIn, más acorde al B2B */}
            <a href="#" className="text-xs font-bold tracking-widest uppercase text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="w-full border-t border-zinc-200 dark:border-zinc-800 py-8 text-center">
          <p className="text-zinc-500 dark:text-zinc-600 text-[10px] font-bold tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} KromaGrid. Código que escala.
          </p>
        </div>
      </footer>
      
    </main>
  );
}