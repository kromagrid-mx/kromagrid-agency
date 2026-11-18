import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import './globals.css';

// 1. Fuentes Premium: Playfair para títulos (Elegancia) y Montserrat para lectura (Limpieza)
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  display: 'swap',
});

// 2. SEO y Metadatos enfocados en el nicho High-Ticket
export const metadata: Metadata = {
  title: 'KromaGrid | Presencia Digital para Especialistas Premium',
  description: 'Elevamos tu práctica clínica a la categoría premium. Diseño web a medida, elegante y optimizado para captar pacientes de alto valor.',
  keywords: ['diseño web clínicas', 'agencia web premium', 'marketing médico', 'sitios web elegantes', 'desarrollo web lujo'],
  openGraph: {
    title: 'KromaGrid | Presencia Digital de Alto Valor',
    description: 'Atrae a los pacientes correctos con una imagen digital que refleje tu prestigio.',
    url: 'https://kromagrid.netlify.app',
    siteName: 'KromaGrid',
    locale: 'es_MX',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 'dark' class can be toggled later. We set smooth scrolling and base theme.
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`
          ${playfair.variable} ${montserrat.variable} font-sans 
          bg-kg-cream text-kg-charcoal dark:bg-kg-charcoal dark:text-kg-cream
          antialiased transition-colors duration-500
          selection:bg-kg-gold/30 selection:text-kg-charcoal dark:selection:text-kg-cream
          min-h-screen flex flex-col relative
        `}
      >
        {/* Textura sutil estilo papel/ruido para romper la solidez del color */}
        <div className="fixed inset-0 -z-10 h-full w-full opacity-[0.03] dark:opacity-[0.02] bg-[url('/noise.png')] pointer-events-none"></div>
        
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}