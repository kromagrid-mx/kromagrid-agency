import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

// Fuentes de Alta Costura: Playfair Display para títulos y Montserrat para lectura limpia
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

// SEO y Metadatos alineados con nuestra boutique de ingeniería digital
export const metadata: Metadata = {
  title: 'KromaGrid | Ingeniería Digital & Software a la Medida',
  description: 'Diseñamos plataformas escalables, comercio electrónico y software a la medida con la precisión de la alta costura.',
  keywords: [
    'desarrollo de software a la medida',
    'agencia digital premium',
    'diseño web de lujo',
    'plataformas escalables',
    'comercio electrónico empresarial',
  ],
  openGraph: {
    title: 'KromaGrid | Ingeniería Digital & Diseño de Autor',
    description: 'Elevamos el estatus digital de tu empresa con plataformas escalables y experiencias web inolvidables.',
    url: 'https://kromagrid.netlify.app',
    siteName: 'KromaGrid',
    locale: 'es_MX',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`
          ${playfair.variable} ${montserrat.variable} font-sans 
          bg-kg-alabaster text-kg-ink dark:bg-kg-obsidian dark:text-kg-alabaster
          antialiased transition-colors duration-700
          selection:bg-kg-champagne/30 selection:text-kg-ink dark:selection:text-kg-alabaster
          min-h-screen flex flex-col relative
        `}
      >
        {/* Textura táctil sutil estilo papel de algodón */}
        <div className="fixed inset-0 -z-10 h-full w-full opacity-[0.03] dark:opacity-[0.025] bg-[url('/noise.png')] pointer-events-none" />
        
        {/* Navegación Editorial Flotante */}
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}