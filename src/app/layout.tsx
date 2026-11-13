import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

// 1. Configuración de fuentes de Google (Optimizadas, sin parpadeos de carga)
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space',
  display: 'swap',
});

// 2. SEO y Metadatos (Esto hace que vendas antes de que abran la página)
export const metadata: Metadata = {
  title: 'KromaGrid | Desarrollo Web a Medida para Negocios',
  description: 'Soluciones digitales de alto nivel, desarrolladas por talento emergente. Código fresco, diseño a medida y automatización de ventas sin costos corporativos.',
  keywords: ['desarrollo web', 'agencia web méxico', 'landing pages', 'tiendas en línea', 'diseño web pymes', 'creación de páginas web'],
  openGraph: {
    title: 'KromaGrid | Talento Emergente en Código y Diseño',
    description: 'No pagues oficinas de agencia grande. Invierte 100% en tu producto digital.',
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
    // 'scroll-smooth' hace que los anclajes de menú deslicen elegantemente.
    // 'suppressHydrationWarning' evita errores causados por extensiones del navegador.
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable} ${spaceGrotesk.variable} font-sans 
          bg-zinc-950 text-zinc-50 antialiased 
          selection:bg-emerald-500 selection:text-zinc-950 
          min-h-screen flex flex-col relative
        `}
      >
        {/* 3. Diseño: Fondo de cuadrícula tecnológica sutil (Modo Oscuro Premium) */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-zinc-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Contenedor principal que se expande */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}