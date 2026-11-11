'use client';

import { useState } from 'react';

const TYPE_OPTIONS = [
  { id: 'landing', title: 'Landing Page', desc: 'Una página, alta conversión. Ideal para servicios.', price: 6500 },
  { id: 'corporate', title: 'Sitio Corporativo', desc: 'Múltiples secciones. Ideal para PyMEs y portafolios.', price: 14000 },
  { id: 'ecommerce', title: 'E-commerce / App', desc: 'Tienda en línea o sistema a medida complejo.', price: 28000 },
];

const DESIGN_OPTIONS = [
  { id: 'components', title: 'Diseño Basado en Componentes', desc: 'Rápido, limpio y profesional.', multiplier: 1 },
  { id: 'custom', title: 'Diseño UI/UX a Medida', desc: 'Único, animaciones avanzadas, desde cero en Figma.', multiplier: 1.4 },
];

export default function DynamicCalculator() {
  const [selectedType, setSelectedType] = useState(TYPE_OPTIONS[0]);
  const [selectedDesign, setSelectedDesign] = useState(DESIGN_OPTIONS[0]);
  const [wantsMaintenance, setWantsMaintenance] = useState(true);

  // Estados para capturar al prospecto
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const basePrice = selectedType.price * selectedDesign.multiplier;
  const minPrice = Math.round(basePrice * 0.9);
  const maxPrice = Math.round(basePrice * 1.15);

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(amount);
  };

  // Función que dispara toda la automatización
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/webhook-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          projectType: `${selectedType.title} + ${selectedDesign.title}`,
          budgetMin: minPrice,
          budgetMax: maxPrice,
          wantsMaintenance
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Hubo un error, por favor intenta de nuevo.");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cotizador" className="w-full max-w-5xl mx-auto py-24 px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-mono font-bold text-zinc-100 mb-4">
          Transparencia absoluta. <br />
          <span className="text-emerald-500">Calcula tu inversión.</span>
        </h2>
        <p className="text-zinc-400 text-lg">Selecciona lo que necesitas y obtén un estimado inmediato.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Columna Izquierda (Opciones) */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h3 className="text-xl font-medium text-zinc-200 mb-4">1. ¿Qué tipo de plataforma necesitas?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {TYPE_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedType(opt)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                    selectedType.id === opt.id
                      ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                      : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-600'
                  }`}
                >
                  <h4 className={`font-semibold mb-2 ${selectedType.id === opt.id ? 'text-emerald-400' : 'text-zinc-300'}`}>{opt.title}</h4>
                  <p className="text-sm text-zinc-500">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-zinc-200 mb-4">2. Nivel de Personalización Visual</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DESIGN_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedDesign(opt)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                    selectedDesign.id === opt.id
                      ? 'border-emerald-500 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                      : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-600'
                  }`}
                >
                  <h4 className={`font-semibold mb-2 ${selectedDesign.id === opt.id ? 'text-emerald-400' : 'text-zinc-300'}`}>{opt.title}</h4>
                  <p className="text-sm text-zinc-500">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 cursor-pointer hover:border-zinc-600 transition-colors">
              <input
                type="checkbox"
                checked={wantsMaintenance}
                onChange={(e) => setWantsMaintenance(e.target.checked)}
                className="w-6 h-6 rounded border-zinc-700 text-emerald-500 bg-zinc-800"
              />
              <div>
                <h4 className="font-semibold text-zinc-300">Incluir Plan de Mantenimiento (+ {formatMoney(800)}/mes)</h4>
                <p className="text-sm text-zinc-500">Hosting, dominio y soporte. Nosotros nos encargamos de todo.</p>
              </div>
            </label>
          </div>
        </div>

        {/* Columna Derecha (Resultado y Captura de Lead) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 p-8 rounded-2xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-md flex flex-col shadow-2xl">
            <h3 className="text-lg font-medium text-zinc-400 mb-6">Inversión Estimada</h3>
            
            <div className="mb-6">
              <span className="text-3xl font-mono font-bold text-zinc-100">{formatMoney(minPrice)}</span>
              <span className="text-zinc-500 mx-2 text-xl">-</span>
              <span className="text-2xl font-mono font-semibold text-zinc-400">{formatMoney(maxPrice)}</span>
            </div>

            {isSuccess ? (
              <div className="mt-4 p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
                <div className="w-12 h-12 bg-emerald-500 text-zinc-950 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">✓</div>
                <h4 className="text-emerald-400 font-bold mb-2">¡Cotización enviada!</h4>
                <p className="text-sm text-zinc-400">Revisa tu bandeja de entrada. Desliza hacia abajo para agendar tu reunión ahora mismo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
                <p className="text-sm text-zinc-400 mb-2">¿Encaja en tu presupuesto? Déjanos tus datos para enviarte los detalles.</p>
                
                <input 
                  type="text" 
                  placeholder="Tu Nombre o Empresa" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
                
                <input 
                  type="email" 
                  placeholder="tu@correo.com" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                />
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full block text-center py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-lg transition-all duration-200 mt-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mi cotización'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}