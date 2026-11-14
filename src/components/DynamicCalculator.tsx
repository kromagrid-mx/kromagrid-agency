'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Monitor, ShoppingCart, 
  LayoutTemplate, Sparkles, ShieldCheck, 
  CheckCircle2, ArrowRight, Calculator
} from 'lucide-react';

const TYPE_OPTIONS = [
  { id: 'landing', title: 'Página de Ventas (Landing)', desc: 'Una sola página directa al grano. Ideal para captar clientes en WhatsApp.', price: 3800, icon: Smartphone },
  { id: 'corporate', title: 'Sitio Web Completo', desc: 'Varias secciones (Inicio, Servicios, Nosotros). Ideal para generar confianza.', price: 7500, icon: Monitor },
  { id: 'ecommerce', title: 'Tienda en Línea', desc: 'Catálogo de productos, carrito de compras y pagos con tarjeta.', price: 14500, icon: ShoppingCart },
];

const DESIGN_OPTIONS = [
  { id: 'components', title: 'Diseño Estándar', desc: 'Estructura rápida, limpia y económica. Perfecta para empezar ya.', multiplier: 1, icon: LayoutTemplate },
  { id: 'custom', title: 'Diseño 100% a Medida', desc: 'Creado desde cero y a tu gusto para destacar por encima de tu competencia.', multiplier: 1.4, icon: Sparkles },
];

export default function DynamicCalculator() {
  const [selectedType, setSelectedType] = useState(TYPE_OPTIONS[0]);
  const [selectedDesign, setSelectedDesign] = useState(DESIGN_OPTIONS[0]);
  const [wantsMaintenance, setWantsMaintenance] = useState(true);

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
    <section id="cotizador" className="w-full py-32 px-6 relative z-10 bg-zinc-950 overflow-hidden">
      
      {/* Glow de fondo para la sección */}
      <div className="absolute top-1/2 left-0 w-[30vw] h-[30vw] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Cabecera */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6 backdrop-blur-sm"
          >
            <Calculator className="w-4 h-4 text-zinc-400" />
            <span className="text-xs font-medium tracking-widest text-zinc-300 uppercase">Cotizador Interactivo</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-zinc-100 mb-6 tracking-tight"
          >
            Transparencia absoluta. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Calcula tu inversión.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Selecciona lo que necesitas y descubre cuánto cuesta en tiempo real, sin sorpresas ni letras chiquitas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Panel Izquierdo: Opciones */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-12">
            
            {/* Paso 1 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 font-mono text-sm">1</div>
                <h3 className="text-2xl font-semibold text-zinc-100">¿Qué quieres lograr con tu web?</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TYPE_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedType.id === opt.id;
                  
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedType(opt)}
                      className={`group relative p-6 rounded-2xl border text-left transition-all duration-300 overflow-hidden ${
                        isSelected
                          ? 'border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                          : 'border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60'
                      }`}
                    >
                      {isSelected && <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />}
                      <Icon className={`w-8 h-8 mb-4 transition-colors ${isSelected ? 'text-emerald-400' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                      <h4 className={`font-bold mb-2 transition-colors ${isSelected ? 'text-zinc-100' : 'text-zinc-300'}`}>{opt.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">{opt.desc}</p>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Paso 2 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 font-mono text-sm">2</div>
                <h3 className="text-2xl font-semibold text-zinc-100">Nivel de diseño e impacto visual</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DESIGN_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedDesign.id === opt.id;
                  
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedDesign(opt)}
                      className={`group relative p-6 rounded-2xl border text-left transition-all duration-300 overflow-hidden ${
                        isSelected
                          ? 'border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                          : 'border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60'
                      }`}
                    >
                      {isSelected && <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />}
                      <Icon className={`w-8 h-8 mb-4 transition-colors ${isSelected ? 'text-emerald-400' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                      <h4 className={`font-bold mb-2 transition-colors ${isSelected ? 'text-zinc-100' : 'text-zinc-300'}`}>{opt.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed">{opt.desc}</p>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Paso 3 (Mantenimiento) */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <label className={`relative flex items-start gap-5 p-6 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden ${wantsMaintenance ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700'}`}>
                <div className="pt-1">
                  <input
                    type="checkbox"
                    checked={wantsMaintenance}
                    onChange={(e) => setWantsMaintenance(e.target.checked)}
                    className="w-5 h-5 rounded border-zinc-700 text-emerald-500 bg-zinc-950 focus:ring-emerald-500/50 focus:ring-offset-zinc-950 cursor-pointer transition-all"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className={`w-5 h-5 ${wantsMaintenance ? 'text-emerald-400' : 'text-zinc-500'}`} />
                    <h4 className={`font-bold ${wantsMaintenance ? 'text-zinc-100' : 'text-zinc-300'}`}>Plan de Cuidado Mensual (+ {formatMoney(600)}/mes)</h4>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">Mantenemos tu página en línea, hacemos respaldos y nos encargamos de las actualizaciones de seguridad. Tú solo te enfocas en vender.</p>
                </div>
              </label>
            </motion.div>
          </div>

          {/* Panel Derecho: Recibo / Resumen Flotante */}
          <div className="lg:col-span-5 xl:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-24 relative p-1 rounded-3xl bg-gradient-to-b from-zinc-800 to-zinc-900/50 shadow-2xl"
            >
              <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="relative p-8 rounded-[22px] bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/50 flex flex-col">
                <h3 className="text-sm font-medium tracking-widest text-zinc-500 uppercase mb-6 flex items-center justify-between">
                  Resumen de Inversión
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </h3>
                
                {/* Visualización del precio interactiva */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <motion.span 
                      key={minPrice}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl font-bold text-zinc-100 font-mono tracking-tight"
                    >
                      {formatMoney(minPrice)}
                    </motion.span>
                    <span className="text-zinc-500 font-mono text-2xl">-</span>
                    <motion.span 
                      key={maxPrice}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl font-bold text-zinc-400 font-mono tracking-tight"
                    >
                      {formatMoney(maxPrice)}
                    </motion.span>
                    <span className="text-sm text-emerald-500 font-bold ml-1">MXN</span>
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-zinc-800 via-zinc-800 to-transparent mt-4" />
                </div>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-zinc-100 mb-2">¡Cotización registrada!</h4>
                      <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                        Hemos guardado tu configuración. El siguiente paso es agendar una sesión rápida de 15 minutos para afinar los detalles de tu proyecto.
                      </p>
                      <a 
                        href="https://cal.com/kromagrid-s33qkf/15min" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center gap-2 w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                      >
                        Agendar videollamada
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit} 
                      className="flex flex-col gap-4"
                    >
                      <p className="text-sm text-zinc-400 mb-2">Déjanos tus datos para enviarte el desglose oficial y el plan de trabajo por correo.</p>
                      
                      <div className="space-y-3">
                        <input 
                          type="text" 
                          placeholder="Tu Nombre o Empresa" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                        />
                        
                        <input 
                          type="email" 
                          placeholder="tu@correo.com" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                        />
                      </div>
                      
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="group relative flex items-center justify-center gap-2 w-full py-4 bg-zinc-100 hover:bg-white text-zinc-950 font-bold rounded-xl transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="animate-pulse">Procesando...</span>
                        ) : (
                          <>
                            Enviar mi cotización
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}