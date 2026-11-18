import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import PortfolioGrid from '@/components/PortfolioGrid';
import DynamicCalculator from '@/components/DynamicCalculator';
import CalendarEmbed from '@/components/CalendarEmbed';
import { ArrowUpRight } from 'lucide-react';

// Metadata optimizada para posicionamiento de firma digital de alto perfil
export const metadata = {
  title: 'KromaGrid | Ingeniería Digital & Software a la Medida',
  description:
    'Diseñamos plataformas escalables, comercio electrónico y software a la medida con la precisión de la alta costura.',
  openGraph: {
    title: 'KromaGrid | Ingeniería Digital & Diseño de Autor',
    description:
      'Elevamos el estatus digital de tu empresa con plataformas escalables y experiencias web inolvidables.',
    url: 'https://kromagrid.netlify.app',
    siteName: 'KromaGrid',
    images: [
      {
        url: '/link-preview.png',
        width: 1200,
        height: 630,
        alt: 'KromaGrid Digital Boutique',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-kg-alabaster text-kg-ink dark:bg-kg-obsidian dark:text-kg-alabaster selection:bg-kg-champagne/30 transition-colors duration-700 overflow-x-hidden">
      
      {/* Flujo Principal de Secciones */}
      <div className="relative z-10 flex flex-col w-full">
        {/* 1. Portada Cinematográfica con Parallax */}
        <HeroSection />

        {/* 2. Cinta Continua de Capacidades */}
        <TechMarquee />

        {/* 3. Galería Editorial Asimétrica */}
        <PortfolioGrid />

        {/* 4. Configurador Interactivo de Inversión */}
        <DynamicCalculator />

        {/* 5. Salón de Consultoría Privada */}
        <CalendarEmbed />
      </div>

      {/* 6. Footer Editorial Monumental */}
      <footer className="relative w-full border-t border-kg-ink/10 dark:border-kg-alabaster/10 z-20 mt-16 bg-kg-silk/60 dark:bg-kg-onyx/60 backdrop-blur-xl transition-colors duration-700">
        
        {/* Emblema romboidal centrado sobre la línea arquitectónica superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rotate-45 border border-kg-champagne bg-kg-alabaster dark:bg-kg-obsidian shadow-gold-glow" />

        {/* Iluminación ambiental dorada sutil */}
        <div className="absolute inset-0 bg-luxury-gradient pointer-events-none opacity-60" />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-14 pb-16 border-b border-kg-ink/10 dark:border-kg-alabaster/10">
            
            {/* Identidad de Marca */}
            <div className="max-w-md">
              <a href="#" className="group inline-flex items-center gap-3.5 mb-5">
                <span className="w-2.5 h-2.5 rotate-45 border border-kg-champagne bg-kg-champagne/20 group-hover:rotate-[225deg] group-hover:bg-kg-champagne transition-all duration-700" />
                <span className="text-3xl sm:text-4xl font-serif tracking-tight text-kg-ink dark:text-kg-alabaster">
                  Kroma<span className="text-kg-champagne italic font-normal">Grid.</span>
                </span>
              </a>
              <p className="text-kg-muted text-sm sm:text-base font-light leading-relaxed">
                Ingeniería de software y dirección de arte digital para empresas que exigen precisión, elegancia y resultados medibles.
              </p>
            </div>

            {/* Navegación Rápida & Canales Directos */}
            <div className="flex flex-wrap gap-12 sm:gap-20">
              
              {/* Columna Secciones */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-medium tracking-[0.28em] uppercase text-kg-champagne mb-1">
                  Explorar
                </span>
                {[
                  { label: 'Colección', href: '#portafolio' },
                  { label: 'Inversión', href: '#cotizador' },
                  { label: 'Consultoría', href: '#agendar' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group relative w-fit text-xs uppercase tracking-[0.2em] text-kg-ink/75 dark:text-kg-alabaster/75 hover:text-kg-champagne dark:hover:text-kg-champagne transition-colors duration-300 py-0.5"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-kg-champagne transition-all duration-500 group-hover:w-full" />
                  </a>
                ))}
              </div>

              {/* Columna Contacto */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-medium tracking-[0.28em] uppercase text-kg-champagne mb-1">
                  Contacto Directo
                </span>
                <a
                  href="https://wa.me/525520138173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-kg-ink/75 dark:text-kg-alabaster/75 hover:text-kg-champagne dark:hover:text-kg-champagne transition-colors duration-300 py-0.5"
                >
                  <span>WhatsApp Ejecutivo</span>
                  <ArrowUpRight
                    strokeWidth={1.5}
                    className="w-3.5 h-3.5 text-kg-champagne group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </a>
                <a
                  href="#agendar"
                  className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-kg-ink/75 dark:text-kg-alabaster/75 hover:text-kg-champagne dark:hover:text-kg-champagne transition-colors duration-300 py-0.5"
                >
                  <span>Agendar Sesión</span>
                  <ArrowUpRight
                    strokeWidth={1.5}
                    className="w-3.5 h-3.5 text-kg-champagne group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </a>
              </div>

            </div>
          </div>

          {/* Barra Inferior de Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-kg-muted text-[10px] font-light tracking-[0.25em] uppercase">
              © {new Date().getFullYear()} KromaGrid. Todos los derechos reservados.
            </p>
            <p className="text-kg-muted/75 text-[10px] font-light tracking-[0.25em] uppercase flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rotate-45 bg-kg-champagne/70 inline-block" />
              Precisión & Distinción Digital
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}