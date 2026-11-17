'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Monitor, ShoppingCart, 
  LayoutTemplate, Sparkles, ShieldCheck, 
  CheckCircle2, ArrowRight, Calculator, MessageCircle
} from 'lucide-react';

const TYPE_OPTIONS = [
  { id: 'landing', title: 'Página de Ventas (Landing)', desc: 'Una sola página directa al grano. Ideal para captar clientes en WhatsApp.', price: 3800, icon: Smartphone },
  { id: 'corporate', title: 'Sitio Web Completo', desc: 'Varias secciones (Inicio, Servicios, Nosotros). Ideal para generar confianza.', price: 7500, icon: Monitor },
  { id: 'ecommerce', title: 'Tienda en Línea', desc: 'Catálogo de productos, carrito de compras y pagos en línea.', price: 14500, icon: ShoppingCart },
];

const DESIGN_OPTIONS = [
  { id: 'components', title: 'Diseño Estándar', desc: 'Estructura rápida, limpia y económica. Perfecta para empezar ya.', multiplier: 1, label: 'Incluido', icon: LayoutTemplate },
  { id: 'custom', title: 'Diseño 100% a Medida', desc: 'Creado desde cero y a tu gusto para destacar por encima de tu competencia.', multiplier: 1.4, label: '+40% al total', icon: Sparkles },
];

// Componente para animar los números de forma fluida
const AnimatedNumber = ({ value }: { value: number }) => {
  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.3, type: 'spring', bounce: 0.4 }}
      className="inline-block"
    >
      {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(value)}
    </motion.span>
  );
};

export default function DynamicCalculator() {
  const [selectedType, setSelectedType] = useState(TYPE_OPTIONS[0]);
  const [selectedDesign, setSelectedDesign] = useState(DESIGN_OPTIONS[0]);
  const [wantsMaintenance, setWantsMaintenance] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const basePrice = selectedType.price * selectedDesign.multiplier;
  const designExtra = basePrice - selectedType.price;
  const minPrice = Math.round(basePrice * 0.9);
  const maxPrice = Math.round(basePrice * 1.15);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);

    try {
      const WHATSAPP_NUMBER = "525520138173";

      const formatMoney = (amount: number) => {
        return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(amount);
      };

      const message = `¡Hola KromaGrid! Vengo de su página web y quiero cotizar mi proyecto. 🚀

*Mis Datos:*
👤 Nombre: ${name}
✉️ Correo: ${email}

*Detalles de lo que necesito:*
🛠️ Tipo: ${selectedType.title} (${formatMoney(selectedType.price)})
✨ Diseño: ${selectedDesign.title} ${designExtra > 0 ? `(+${formatMoney(designExtra)})` : ''}
🛡️ Mantenimiento: ${wantsMaintenance ? 'Sí (+ $600 MXN/mes)' : 'No por ahora'}

*Inversión estimada:*
💰 ${formatMoney(minPrice)} a ${formatMoney(maxPrice)} MXN

¿Podemos platicar para afinar los detalles?`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

      const newWindow = window.open(whatsappUrl, '_blank');
      
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = whatsappUrl;
      }

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cotizador" className="w-full py-32 px-6 relative z-10 bg-zinc-950 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[30vw] h-[30vw] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-6 backdrop-blur-sm shadow-xl shadow-emerald-500/5"
          >
            <Calculator className="w-4 h-4 text-emerald-400" />
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
            Selecciona lo que necesitas y descubre cuánto cuesta en tiempo real. Sin sorpresas, ni letras chiquitas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Panel Izquierdo: Opciones */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Paso 1 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 font-mono text-sm shadow-inner shadow-emerald-500/10">1</div>
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
                      className={`group relative p-6 rounded-2xl border text-left transition-all duration-300 overflow-hidden flex flex-col h-full ${
                        isSelected
                          ? 'border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/30'
                          : 'border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60'
                      }`}
                    >
                      {isSelected && <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />}
                      <Icon className={`w-8 h-8 mb-4 transition-colors ${isSelected ? 'text-emerald-400' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                      <h4 className={`font-bold mb-2 transition-colors ${isSelected ? 'text-zinc-100' : 'text-zinc-300'}`}>{opt.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed flex-grow">{opt.desc}</p>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Paso 2 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 font-mono text-sm shadow-inner shadow-emerald-500/10">2</div>
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
                      className={`group relative p-6 rounded-2xl border text-left transition-all duration-300 overflow-hidden flex flex-col h-full ${
                        isSelected
                          ? 'border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/30'
                          : 'border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60'
                      }`}
                    >
                      {isSelected && <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />}
                      <div className="flex justify-between items-start mb-4">
                        <Icon className={`w-8 h-8 transition-colors ${isSelected ? 'text-emerald-400' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                        <span className={`text-xs font-mono px-2 py-1 rounded-md border ${isSelected ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-zinc-800 bg-zinc-900 text-zinc-500'}`}>{opt.label}</span>
                      </div>
                      <h4 className={`font-bold mb-2 transition-colors ${isSelected ? 'text-zinc-100' : 'text-zinc-300'}`}>{opt.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed flex-grow">{opt.desc}</p>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Paso 3 (Mantenimiento) */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
               <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 font-mono text-sm shadow-inner shadow-emerald-500/10">3</div>
                <h3 className="text-2xl font-semibold text-zinc-100">Cuidado a largo plazo</h3>
              </div>
              <label className={`relative flex items-start gap-5 p-6 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden ${wantsMaintenance ? 'border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/30' : 'border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700'}`}>
                {wantsMaintenance && <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />}
                <div className="pt-1 relative z-10">
                  <input
                    type="checkbox"
                    checked={wantsMaintenance}
                    onChange={(e) => setWantsMaintenance(e.target.checked)}
                    className="w-5 h-5 rounded border-zinc-700 text-emerald-500 bg-zinc-950 focus:ring-emerald-500/50 focus:ring-offset-zinc-950 cursor-pointer transition-all"
                  />
                </div>
                <div className="flex-1 relative z-10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className={`w-5 h-5 ${wantsMaintenance ? 'text-emerald-400' : 'text-zinc-500'}`} />
                      <h4 className={`font-bold ${wantsMaintenance ? 'text-zinc-100' : 'text-zinc-300'}`}>Mantenimiento Proactivo</h4>
                    </div>
                    <span className={`text-xs font-mono px-2 py-1 rounded-md border ${wantsMaintenance ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-zinc-800 bg-zinc-900 text-zinc-500'}`}>+$600/mes</span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-2">Respaldos diarios, actualizaciones de seguridad, alojamiento premium y soporte técnico. Tú solo te enfocas en vender, nosotros cuidamos que tu web nunca falle.</p>
                </div>
              </label>
            </motion.div>
          </div>

          {/* Panel Derecho: Recibo / Resumen Flotante */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-24 p-1 rounded-[2rem] bg-gradient-to-b from-zinc-800 to-zinc-900/50 shadow-2xl"
            >
              <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="relative p-8 rounded-[1.8rem] bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/50 flex flex-col">
                <h3 className="text-sm font-medium tracking-widest text-zinc-400 uppercase mb-6 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-emerald-500" />
                  Tu Inversión Estimada
                </h3>
                
                {/* Visualización del precio interactiva */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-zinc-100 font-mono tracking-tight">
                      <AnimatedNumber value={minPrice} />
                    </span>
                    <span className="text-zinc-500 font-mono text-2xl">-</span>
                    <span className="text-2xl font-bold text-zinc-400 font-mono tracking-tight">
                      <AnimatedNumber value={maxPrice} />
                    </span>
                    <span className="text-sm text-emerald-500 font-bold ml-1">MXN</span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-2">*Rango estimado sujeto a la complejidad final del proyecto.</p>
                </div>

                {/* Desglose en tiempo real */}
                <div className="bg-zinc-900/50 rounded-xl p-4 mb-8 border border-zinc-800/80 space-y-3">
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-400 flex items-center gap-2">
                        <selectedType.icon className="w-4 h-4" />
                        {selectedType.title}
                      </span>
                      <span className="text-zinc-200 font-mono"><AnimatedNumber value={selectedType.price} /></span>
                   </div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-400 flex items-center gap-2">
                        <selectedDesign.icon className="w-4 h-4" />
                        Diseño: {selectedDesign.title}
                      </span>
                      <span className="text-zinc-200 font-mono">{designExtra > 0 ? '+' : ''}<AnimatedNumber value={designExtra} /></span>
                   </div>
                   <div className="h-[1px] w-full bg-zinc-800 my-2" />
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-400 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        Mantenimiento
                      </span>
                      <span className="text-zinc-200 font-mono">{wantsMaintenance ? '+$600/mes' : 'No incluido'}</span>
                   </div>
                </div>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-4"
                    >
                      <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-zinc-100 mb-2">¡Redirigiendo a WhatsApp!</h4>
                      <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                        Si no se abrió automáticamente, presiona el botón abajo para mandarnos un mensaje y agendar nuestra llamada de 15 minutos.
                      </p>
                       <a 
                        href={`https://wa.me/525520138173?text=${encodeURIComponent('¡Hola KromaGrid! Vengo de su página web y quiero platicar sobre mi cotización. 🚀')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center gap-2 w-full py-4 bg-zinc-100 hover:bg-white text-zinc-950 font-bold rounded-xl transition-all duration-300"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Abrir chat manualmente
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
                      <div className="space-y-3 mb-2">
                        <input 
                          type="text" 
                          placeholder="¿Cómo te llamas o cómo se llama tu empresa?" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                        />
                        
                        <input 
                          type="email" 
                          placeholder="tu@correo.com" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                        />
                      </div>
                      
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="group relative flex items-center justify-center gap-2 w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                      >
                        {isSubmitting ? (
                          <span className="animate-pulse">Conectando...</span>
                        ) : (
                          <>
                            <MessageCircle className="w-5 h-5" />
                            Enviar y platicar por WhatsApp
                          </>
                        )}
                      </button>
                      <p className="text-[11px] text-zinc-500 text-center px-4">
                        Al presionar, se abrirá tu WhatsApp para que nos mandes esta cotización directamente y podamos platicar.
                      </p>
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