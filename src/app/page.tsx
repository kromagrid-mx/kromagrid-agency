import HeroSection from '@/components/HeroSection';
import PortfolioGrid from '@/components/PortfolioGrid';
import DynamicCalculator from '@/components/DynamicCalculator';
import CalendarEmbed from '@/components/CalendarEmbed';

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-zinc-950">
      
      {/* 1. El Gancho */}
      <HeroSection />

      {/* 2. La Prueba de Autoridad */}
      <PortfolioGrid />

      {/* 3. La Transparencia Absoluta (Cotizador) */}
      <DynamicCalculator />

      {/* 4. El Cierre Automático (Calendario) */}
      <CalendarEmbed />

      {/* 5. Footer Minimalista */}
      <footer className="w-full border-t border-zinc-900 py-8 text-center relative z-10">
        <p className="text-zinc-600 text-sm font-mono">
          © {new Date().getFullYear()} KromaGrid. Diseñado para escalar.
        </p>
      </footer>
      
    </main>
  );
}