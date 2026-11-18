'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Monitor, ShoppingCart, 
  LayoutTemplate, Diamond, ShieldCheck, 
  CheckCircle2, ArrowRight, Calculator, MessageCircle
} from 'lucide-react';

const TYPE_OPTIONS = [
  { id: 'landing', title: 'Presencia Esencial (Landing)', desc: 'Una página directa y persuasiva. Ideal para captar pacientes de un tratamiento específico.', price: 3800, icon: Smartphone },
  { id: 'corporate', title: 'Clínica Digital (Sitio Completo)', desc: 'Múltiples secciones (Especialistas, Instalaciones, Servicios). Proyecta máxima autoridad.', price: 7500, icon: Monitor },
  { id: 'ecommerce', title: 'Plataforma Premium', desc: 'Ideal para venta de productos dentales o cobro de consultas/procedimientos en línea.', price: 14500, icon: ShoppingCart },
];

const DESIGN_OPTIONS = [
  { id: 'components', title: 'Diseño Editorial Base', desc: 'Estructura elegante, limpia y optimizada. Lista para lanzar tu presencia.', multiplier: 1, label: 'Incluido', icon: LayoutTemplate },
  { id: 'custom', title: 'Boutique a Medida', desc: 'Dirección de arte exclusiva. Diseñado desde cero para ser la referencia en tu sector.', multiplier: 1.4, label: '+40% al total', icon: Diamond },
];

// Componente para animar los números de forma fluida y elegante
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

      const message = `¡Hola KromaGrid! Vengo de su página web y me gustaría evaluar mi proyecto digital. 🥂

*Mis Datos:*
👤 Nombre/Clínica: ${name}
✉️ Correo: ${email}

*Selección de Concierge:*
🛠️ Estructura: ${selectedType.title} (${formatMoney(selectedType.price)})
✨ Arte: ${selectedDesign.title} ${designExtra > 0 ? `(+${formatMoney(designExtra)})` : ''}
🛡️ Concierge: ${wantsMaintenance ? 'Sí (+ $600 MXN/mes)' : 'No por ahora'}

*Inversión estimada:*
💰 ${formatMoney(minPrice)} a ${formatMoney(maxPrice)} MXN

Me gustaría agendar una breve llamada para afinar detalles.`;

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
    <section id="cotizador" className="w-full py-32 px-6 relative z-10">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Cabecera Editorial */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-kg-gold/30 bg-kg-gold/5 mb-8 backdrop-blur-sm"
          >
            <Calculator className="w-3.5 h-3.5 text-kg-gold" />
            <span className="text-xs font-medium tracking-[0.2em] text-kg-gold uppercase">Evaluación de Proyecto</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium text-kg-charcoal dark:text-kg-cream mb-6 tracking-tight"
          >
            Transparencia desde el <span className="italic text-kg-gold">primer paso.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-kg-muted text-lg max-w-2xl mx-auto font-light"
          >
            Diseña la estructura de tu nueva presencia digital. Conoce la inversión estimada al instante, sin sorpresas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Panel Izquierdo: Opciones Elegantes */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Paso 1 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-serif italic text-kg-gold">01.</span>
                <h3 className="text-xl font-medium tracking-wide uppercase text-kg-charcoal dark:text-kg-cream">Estructura Digital</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TYPE_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedType.id === opt.id;
                  
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedType(opt)}
                      className={`group relative p-6 text-left transition-all duration-500 flex flex-col h-full ${
                        isSelected
                          ? 'border border-kg-gold bg-kg-gold/5 shadow-sm'
                          : 'border border-kg-charcoal/10 dark:border-kg-cream/10 hover:border-kg-gold/50 hover:bg-kg-charcoal/5 dark:hover:bg-kg-cream/5'
                      }`}
                    >
                      <Icon strokeWidth={1.5} className={`w-8 h-8 mb-5 transition-colors ${isSelected ? 'text-kg-gold' : 'text-kg-muted group-hover:text-kg-charcoal dark:group-hover:text-kg-cream'}`} />
                      <h4 className={`font-serif text-lg mb-2 transition-colors ${isSelected ? 'text-kg-charcoal dark:text-kg-cream' : 'text-kg-charcoal/70 dark:text-kg-cream/70'}`}>{opt.title}</h4>
                      <p className="text-xs text-kg-muted leading-relaxed font-light flex-grow">{opt.desc}</p>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Paso 2 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-serif italic text-kg-gold">02.</span>
                <h3 className="text-xl font-medium tracking-wide uppercase text-kg-charcoal dark:text-kg-cream">Dirección de Arte</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DESIGN_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedDesign.id === opt.id;
                  
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedDesign(opt)}
                      className={`group relative p-6 text-left transition-all duration-500 flex flex-col h-full ${
                        isSelected
                          ? 'border border-kg-gold bg-kg-gold/5 shadow-sm'
                          : 'border border-kg-charcoal/10 dark:border-kg-cream/10 hover:border-kg-gold/50 hover:bg-kg-charcoal/5 dark:hover:bg-kg-cream/5'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-5">
                        <Icon strokeWidth={1.5} className={`w-8 h-8 transition-colors ${isSelected ? 'text-kg-gold' : 'text-kg-muted group-hover:text-kg-charcoal dark:group-hover:text-kg-cream'}`} />
                        <span className={`text-[10px] tracking-widest uppercase px-3 py-1 border ${isSelected ? 'border-kg-gold/50 bg-kg-gold/10 text-kg-gold' : 'border-kg-charcoal/10 dark:border-kg-cream/10 text-kg-muted'}`}>{opt.label}</span>
                      </div>
                      <h4 className={`font-serif text-lg mb-2 transition-colors ${isSelected ? 'text-kg-charcoal dark:text-kg-cream' : 'text-kg-charcoal/70 dark:text-kg-cream/70'}`}>{opt.title}</h4>
                      <p className="text-xs text-kg-muted leading-relaxed font-light flex-grow">{opt.desc}</p>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Paso 3 (Concierge) */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
               <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-serif italic text-kg-gold">03.</span>
                <h3 className="text-xl font-medium tracking-wide uppercase text-kg-charcoal dark:text-kg-cream">Cuidado a Largo Plazo</h3>
              </div>
              <label className={`relative flex items-start gap-5 p-6 border cursor-pointer transition-all duration-500 ${wantsMaintenance ? 'border-kg-gold bg-kg-gold/5 shadow-sm' : 'border-kg-charcoal/10 dark:border-kg-cream/10 hover:border-kg-gold/50'}`}>
                <div className="pt-1 relative z-10">
                  <input
                    type="checkbox"
                    checked={wantsMaintenance}
                    onChange={(e) => setWantsMaintenance(e.target.checked)}
                    className="w-5 h-5 rounded-none border-kg-charcoal/20 text-kg-gold bg-transparent focus:ring-kg-gold/50 focus:ring-offset-kg-cream cursor-pointer transition-all"
                  />
                </div>
                <div className="flex-1 relative z-10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <ShieldCheck strokeWidth={1.5} className={`w-5 h-5 ${wantsMaintenance ? 'text-kg-gold' : 'text-kg-muted'}`} />
                      <h4 className={`font-serif text-lg ${wantsMaintenance ? 'text-kg-charcoal dark:text-kg-cream' : 'text-kg-charcoal/70 dark:text-kg-cream/70'}`}>Concierge Digital</h4>
                    </div>
                    <span className={`text-[10px] tracking-widest uppercase px-3 py-1 border ${wantsMaintenance ? 'border-kg-gold/50 bg-kg-gold/10 text-kg-gold' : 'border-kg-charcoal/10 dark:border-kg-cream/10 text-kg-muted'}`}>+$600/mes</span>
                  </div>
                  <p className="text-xs text-kg-muted leading-relaxed mt-3 font-light">Respaldos diarios, seguridad, y soporte técnico prioritario. Tú te enfocas en atender a tus pacientes, nosotros cuidamos tu prestigio digital.</p>
                </div>
              </label>
            </motion.div>
          </div>

          {/* Panel Derecho: Ticket Concierge */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-24"
            >
              
              <div className="relative p-10 bg-white dark:bg-[#1A1C1F] border border-kg-charcoal/10 dark:border-kg-cream/10 shadow-2xl flex flex-col">
                
                <h3 className="text-[10px] font-medium tracking-[0.2em] text-kg-muted uppercase mb-8 pb-4 border-b border-kg-charcoal/10 dark:border-kg-cream/10 flex items-center gap-2">
                  <Calculator className="w-3.5 h-3.5" />
                  Resumen de Inversión
                </h3>
                
                {/* Visualización del precio */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl font-serif text-kg-charcoal dark:text-kg-cream tracking-tight">
                      <AnimatedNumber value={minPrice} />
                    </span>
                    <span className="text-kg-muted font-light text-2xl">-</span>
                    <span className="text-2xl font-serif text-kg-muted tracking-tight">
                      <AnimatedNumber value={maxPrice} />
                    </span>
                    <span className="text-xs text-kg-gold tracking-widest font-medium ml-1">MXN</span>
                  </div>
                  <p className="text-[11px] text-kg-muted/70 uppercase tracking-wider mt-2">*Estimación sujeta a revisión final de alcances.</p>
                </div>

                {/* Desglose Minimalista */}
                <div className="space-y-4 mb-10">
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-kg-muted font-light">{selectedType.title}</span>
                      <span className="text-kg-charcoal dark:text-kg-cream"><AnimatedNumber value={selectedType.price} /></span>
                   </div>
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-kg-muted font-light">Diseño: {selectedDesign.title}</span>
                      <span className="text-kg-charcoal dark:text-kg-cream">{designExtra > 0 ? '+' : ''}<AnimatedNumber value={designExtra} /></span>
                   </div>
                   <div className="h-[1px] w-full bg-kg-charcoal/10 dark:bg-kg-cream/10 my-4" />
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-kg-muted font-light">Servicio Concierge</span>
                      <span className="text-kg-charcoal dark:text-kg-cream">{wantsMaintenance ? '+$600/mes' : 'No incluido'}</span>
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
                      <div className="w-16 h-16 border border-kg-gold text-kg-gold rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 strokeWidth={1.5} className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-serif text-kg-charcoal dark:text-kg-cream mb-2">Conectando...</h4>
                      <p className="text-sm text-kg-muted mb-8 leading-relaxed font-light">
                        Si tu WhatsApp no se abrió de forma automática, presiona el botón para enviar tu solicitud.
                      </p>
                       <a 
                        href={`https://wa.me/525520138173?text=${encodeURIComponent('¡Hola KromaGrid! Me gustaría agendar mi llamada de diagnóstico. 🥂')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-2 w-full py-4 border border-kg-charcoal dark:border-kg-cream hover:bg-kg-charcoal hover:text-kg-cream dark:hover:bg-kg-cream dark:hover:text-kg-charcoal text-kg-charcoal dark:text-kg-cream text-xs tracking-widest uppercase font-medium transition-all duration-500"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Abrir WhatsApp
                      </a>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit} 
                      className="flex flex-col gap-5"
                    >
                      <div className="space-y-4 mb-2">
                        <input 
                          type="text" 
                          placeholder="Tu nombre o clínica" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-transparent border-b border-kg-charcoal/20 dark:border-kg-cream/20 px-0 py-3 text-kg-charcoal dark:text-kg-cream placeholder:text-kg-muted/50 focus:outline-none focus:border-kg-gold transition-colors font-light"
                        />
                        
                        <input 
                          type="email" 
                          placeholder="Correo de contacto" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent border-b border-kg-charcoal/20 dark:border-kg-cream/20 px-0 py-3 text-kg-charcoal dark:text-kg-cream placeholder:text-kg-muted/50 focus:outline-none focus:border-kg-gold transition-colors font-light"
                        />
                      </div>
                      
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="mt-4 group relative flex items-center justify-center gap-3 w-full py-4 bg-kg-charcoal text-kg-cream dark:bg-kg-cream dark:text-kg-charcoal text-xs tracking-widest uppercase font-medium hover:bg-kg-gold dark:hover:bg-kg-gold hover:text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="animate-pulse">Procesando...</span>
                        ) : (
                          <>
                            Agendar Diagnóstico
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                      <p className="text-[10px] text-kg-muted/70 text-center px-4 uppercase tracking-widest mt-2">
                        Vía WhatsApp Seguro
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