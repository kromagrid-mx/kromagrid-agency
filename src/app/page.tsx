import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import PortfolioGrid from '@/components/PortfolioGrid';
import DynamicCalculator from '@/components/DynamicCalculator';
import CalendarEmbed from '@/components/CalendarEmbed';

// Metadata optimizada para el nicho premium (fuera lo barato, hola exclusividad)
export const metadata = {
  title: 'KromaGrid | Presencia Digital para Especialistas',
  description: 'Agencia de diseño web premium. Elevamos la percepción de tu clínica o consultorio para atraer pacientes de alto valor.',
  openGraph: {
    title: 'KromaGrid | Presencia Digital de Alto Valor',
    description: 'Atrae a los pacientes correctos con una imagen digital que refleje tu prestigio.',
    url: 'https://kromagrid.netlify.app',
    siteName: 'KromaGrid',
    images: [
      {
        url: '/link-preview.png', 
        width: 1200,
        height: 630,
        alt: 'KromaGrid Premium Design',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
};

export default function Home() {
  return (
    // Reemplazamos los fondos zinc por nuestra paleta luxury (kg-cream y kg-charcoal)
    <main className="flex flex-col w-full min-h-screen bg-kg-cream text-kg-charcoal dark:bg-kg-charcoal dark:text-kg-cream transition-colors duration-500">
      
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

      {/* 6. Footer Editorial Premium */}
      <footer className="w-full border-t border-kg-charcoal/10 dark:border-kg-cream/10 relative z-20 mt-12 bg-kg-cream dark:bg-kg-charcoal transition-colors duration-500">
        
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-3xl font-serif font-medium tracking-tight text-kg-charcoal dark:text-kg-cream mb-2">
              Kroma<span className="text-kg-gold italic">Grid.</span>
            </span>
            <p className="text-kg-muted text-sm font-light max-w-xs">
              Diseño digital de alto perfil para especialistas que exigen excelencia.
            </p>
          </div>
          
          <div className="flex items-center gap-10">
            <a href="https://wa.me/525520138173" target="_blank" rel="noopener noreferrer" className="text-sm font-medium tracking-widest uppercase text-kg-charcoal dark:text-kg-cream hover:text-kg-gold dark:hover:text-kg-gold transition-colors duration-300">
              Contacto
            </a>
            <a href="#" className="text-sm font-medium tracking-widest uppercase text-kg-charcoal dark:text-kg-cream hover:text-kg-gold dark:hover:text-kg-gold transition-colors duration-300">
              Instagram
            </a>
          </div>
        </div>
        
        <div className="w-full border-t border-kg-charcoal/5 dark:border-kg-cream/5 py-8 text-center">
          <p className="text-kg-muted text-xs font-light tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} KromaGrid. Elevando estándares.
          </p>
        </div>
      </footer>
      
    </main>
  );
}