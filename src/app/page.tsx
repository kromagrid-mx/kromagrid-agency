import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import PortfolioGrid from '@/components/PortfolioGrid';
import DynamicCalculator from '@/components/DynamicCalculator';
import CalendarEmbed from '@/components/CalendarEmbed';

export const metadata = {
  title: 'KromaGrid | Talento Emergente en Código y Diseño',
  description: 'Agencia de desarrollo web y diseño. Creamos páginas de ventas, sitios corporativos y tiendas en línea diseñadas para escalar.',
  openGraph: {
    title: 'KromaGrid | Talento Emergente en Código y Diseño',
    description: 'Agencia de desarrollo web y diseño. Creamos páginas de ventas, sitios corporativos y tiendas en línea.',
    url: 'https://kromagrid.netlify.app',
    siteName: 'KromaGrid',
    images: [
      {
        url: '/link-preview.png', // Guarda tu imagen de 1200x630 en la carpeta 'public' con este nombre exacto
        width: 1200,
        height: 630,
        alt: 'KromaGrid - Agencia de Desarrollo Web',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KromaGrid | Talento Emergente en Código y Diseño',
    description: 'Creamos páginas de ventas, sitios corporativos y tiendas en línea diseñadas para escalar.',
    images: ['/link-preview.png'],
  },
};

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-zinc-950 text-zinc-50 relative selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Fondo Premium: Gradiente radial sutil que le da profundidad a toda la página */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950" />
      
      <div className="relative z-10 flex flex-col w-full">
        {/* 1. El Gancho */}
        <HeroSection />

        {/* 2. La Cinta de Autoridad */}
        <TechMarquee />

        {/* 3. La Prueba de Autoridad */}
        <PortfolioGrid />

        {/* 4. La Transparencia Absoluta (Cotizador) */}
        <DynamicCalculator />

        {/* 5. El Cierre Automático (Calendario) */}
        <CalendarEmbed />
      </div>

      {/* 6. Footer Premium Mejorado */}
      <footer className="w-full border-t border-zinc-900 bg-zinc-950 relative z-20 overflow-hidden mt-12">
        {/* Línea decorativa superior con gradiente */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold tracking-tighter text-zinc-100 mb-1">
              Kroma<span className="text-emerald-500">Grid</span>
            </span>
            <p className="text-zinc-500 text-sm">
              Talento emergente. Resultados de clase mundial.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="https://wa.me/525520138173" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors">
              WhatsApp
            </a>
            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors">
              Instagram
            </a>
          </div>
        </div>
        
        <div className="w-full border-t border-zinc-900/50 py-6 text-center bg-zinc-950/50">
          <p className="text-zinc-600 text-xs font-mono tracking-wider uppercase">
            © {new Date().getFullYear()} KromaGrid. Diseñado para escalar.
          </p>
        </div>
      </footer>
      
    </main>
  );
}