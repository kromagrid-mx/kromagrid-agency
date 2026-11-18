'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutTemplate,
  ShoppingCart,
  Code2,
  Sparkles,
  Diamond,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Calculator,
  MessageCircle,
  Check,
} from 'lucide-react';

const TYPE_OPTIONS = [
  {
    id: 'landing',
    title: 'Presencia Corporativa',
    desc: 'Landing page de alta conversión. Ideal para captar clientes calificados, validar propuestas o presentar tu firma con autoridad.',
    price: 3800,
    icon: LayoutTemplate,
  },
  {
    id: 'ecommerce',
    title: 'Comercio Electrónico',
    desc: 'Boutique digital escalable con pasarelas de pago, gestión de inventario y arquitectura optimizada para ventas automáticas.',
    price: 8500,
    icon: ShoppingCart,
  },
  {
    id: 'software',
    title: 'Software a la Medida',
    desc: 'Sistemas internos, plataformas SaaS y automatización de procesos. Ingeniería robusta diseñada para escalar tu operación.',
    price: 18500,
    icon: Code2,
  },
];

const DESIGN_OPTIONS = [
  {
    id: 'components',
    title: 'Diseño Editorial Base',
    desc: 'Interfaz limpia, intuitiva y optimizada para conversión. Estructura refinada lista para operar con excelencia.',
    multiplier: 1,
    label: 'Incluido',
    icon: Sparkles,
  },
  {
    id: 'custom',
    title: 'Dirección de Arte Bespoke',
    desc: 'Experiencia inmersiva diseñada desde cero con animaciones cinematográficas para posicionarte como referente absoluto.',
    multiplier: 1.4,
    label: '+40% al total',
    icon: Diamond,
  },
];

// Animación fluida con física de resorte y ancho fijo tabular para evitar saltos visuales
const AnimatedNumber = ({ value }: { value: number }) => {
  return (
    <span className="inline-flex overflow-hidden align-bottom tabular-nums">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: 24, opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -24, opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
        >
          {new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN',
            maximumFractionDigits: 0,
          }).format(value)}
        </motion.span>
      </AnimatePresence>
    </span>
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
      const WHATSAPP_NUMBER = '525520138173';

      const formatMoney = (amount: number) => {
        return new Intl.NumberFormat('es-MX', {
          style: 'currency',
          currency: 'MXN',
          maximumFractionDigits: 0,
        }).format(amount);
      };

      const message = `Estimado equipo de KromaGrid, me gustaría evaluar la viabilidad de un proyecto digital.

*Datos de Contacto:*
• Empresa / Nombre: ${name}
• Correo Corporativo: ${email}

*Configuración Seleccionada:*
• Arquitectura: ${selectedType.title} (${formatMoney(selectedType.price)})
• Dirección de Arte: ${selectedDesign.title} ${designExtra > 0 ? `(+${formatMoney(designExtra)})` : ''}
• Concierge e Infraestructura: ${wantsMaintenance ? 'Incluido (+$600 MXN/mes)' : 'No por ahora'}

*Proyección Estimada:*
• ${formatMoney(minPrice)} – ${formatMoney(maxPrice)} MXN

Quedo atento para coordinar una sesión estratégica.`;

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
    <section
      id="cotizador"
      className="w-full py-32 px-6 relative z-10 bg-kg-alabaster dark:bg-kg-obsidian transition-colors duration-700 overflow-hidden"
    >
      {/* Luz ambiental sutil de estudio */}
      <div className="absolute top-1/3 right-[-10%] w-[600px] h-[600px] bg-kg-champagne/10 dark:bg-kg-champagne/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabecera Editorial */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-kg-champagne/30 bg-kg-silk/70 dark:bg-kg-onyx/70 mb-8 backdrop-blur-md"
          >
            <Calculator className="w-3.5 h-3.5 text-kg-champagne" />
            <span className="text-[10px] font-medium tracking-[0.28em] text-kg-ink dark:text-kg-alabaster uppercase">
              Simulador de Inversión
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-kg-ink dark:text-kg-alabaster mb-6 tracking-tight leading-[1.08]"
          >
            Tecnología que escala, <br className="md:hidden" />
            <span className="italic text-kg-champagne font-normal">
              claridad absoluta.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-kg-muted text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Configura la arquitectura digital que tu empresa requiere. Obtén una proyección financiera transparente al instante, diseñada sin fricciones ni sorpresas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Panel Izquierdo: Configurador Interactivo */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Paso 01: Arquitectura */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-serif italic text-kg-champagne">01.</span>
                <h3 className="text-sm font-medium tracking-[0.25em] uppercase text-kg-ink dark:text-kg-alabaster">
                  Arquitectura Digital
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {TYPE_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedType.id === opt.id;

                  return (
                    <motion.button
                      key={opt.id}
                      type="button"
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => setSelectedType(opt)}
                      className={`group relative p-7 text-left transition-colors duration-500 flex flex-col h-full border ${
                        isSelected
                          ? 'bg-kg-silk dark:bg-kg-onyx border-transparent shadow-editorial dark:shadow-editorial-dark'
                          : 'bg-kg-silk/40 dark:bg-kg-onyx/40 border-kg-ink/10 dark:border-kg-alabaster/10 hover:border-kg-champagne/40'
                      }`}
                    >
                      {/* Marco deslizante animado con layoutId */}
                      {isSelected && (
                        <motion.div
                          layoutId="activeTypeOutline"
                          transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                          className="absolute inset-0 border border-kg-champagne shadow-gold-glow pointer-events-none"
                        />
                      )}

                      <div className="flex items-center justify-between mb-6 relative z-10">
                        <Icon
                          strokeWidth={1.3}
                          className={`w-7 h-7 transition-colors duration-500 ${
                            isSelected
                              ? 'text-kg-champagne'
                              : 'text-kg-muted group-hover:text-kg-ink dark:group-hover:text-kg-alabaster'
                          }`}
                        />
                        <span
                          className={`w-2 h-2 rotate-45 transition-all duration-500 ${
                            isSelected
                              ? 'bg-kg-champagne scale-110'
                              : 'border border-kg-ink/20 dark:border-kg-alabaster/20 scale-75'
                          }`}
                        />
                      </div>

                      <h4
                        className={`font-serif text-xl mb-3 relative z-10 transition-colors duration-500 ${
                          isSelected
                            ? 'text-kg-ink dark:text-kg-alabaster'
                            : 'text-kg-ink/75 dark:text-kg-alabaster/75'
                        }`}
                      >
                        {opt.title}
                      </h4>
                      <p className="text-xs text-kg-muted leading-relaxed font-light flex-grow relative z-10">
                        {opt.desc}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Paso 02: Dirección de Arte */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-serif italic text-kg-champagne">02.</span>
                <h3 className="text-sm font-medium tracking-[0.25em] uppercase text-kg-ink dark:text-kg-alabaster">
                  Dirección de Arte & UX
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DESIGN_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedDesign.id === opt.id;

                  return (
                    <motion.button
                      key={opt.id}
                      type="button"
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => setSelectedDesign(opt)}
                      className={`group relative p-7 text-left transition-colors duration-500 flex flex-col h-full border ${
                        isSelected
                          ? 'bg-kg-silk dark:bg-kg-onyx border-transparent shadow-editorial dark:shadow-editorial-dark'
                          : 'bg-kg-silk/40 dark:bg-kg-onyx/40 border-kg-ink/10 dark:border-kg-alabaster/10 hover:border-kg-champagne/40'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeDesignOutline"
                          transition={{ type: 'spring', stiffness: 320, damping: 32 }}
                          className="absolute inset-0 border border-kg-champagne shadow-gold-glow pointer-events-none"
                        />
                      )}

                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <Icon
                          strokeWidth={1.3}
                          className={`w-7 h-7 transition-colors duration-500 ${
                            isSelected
                              ? 'text-kg-champagne'
                              : 'text-kg-muted group-hover:text-kg-ink dark:group-hover:text-kg-alabaster'
                          }`}
                        />
                        <span
                          className={`text-[9px] font-medium tracking-[0.22em] uppercase px-3 py-1 border transition-colors duration-500 ${
                            isSelected
                              ? 'border-kg-champagne/50 bg-kg-champagne/10 text-kg-champagne'
                              : 'border-kg-ink/10 dark:border-kg-alabaster/10 text-kg-muted'
                          }`}
                        >
                          {opt.label}
                        </span>
                      </div>

                      <h4
                        className={`font-serif text-xl mb-3 relative z-10 transition-colors duration-500 ${
                          isSelected
                            ? 'text-kg-ink dark:text-kg-alabaster'
                            : 'text-kg-ink/75 dark:text-kg-alabaster/75'
                        }`}
                      >
                        {opt.title}
                      </h4>
                      <p className="text-xs text-kg-muted leading-relaxed font-light flex-grow relative z-10">
                        {opt.desc}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Paso 03: Concierge e Infraestructura */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-serif italic text-kg-champagne">03.</span>
                <h3 className="text-sm font-medium tracking-[0.25em] uppercase text-kg-ink dark:text-kg-alabaster">
                  Continuidad Operativa
                </h3>
              </div>

              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setWantsMaintenance(!wantsMaintenance)}
                role="checkbox"
                aria-checked={wantsMaintenance}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setWantsMaintenance(!wantsMaintenance);
                  }
                }}
                className={`relative flex items-start gap-5 p-7 border cursor-pointer transition-all duration-500 select-none ${
                  wantsMaintenance
                    ? 'border-kg-champagne bg-kg-silk dark:bg-kg-onyx shadow-gold-glow'
                    : 'border-kg-ink/10 dark:border-kg-alabaster/10 bg-kg-silk/40 dark:bg-kg-onyx/40 hover:border-kg-champagne/40'
                }`}
              >
                {/* Checkbox Customizado con Animación de Resorte */}
                <div className="pt-1 relative z-10">
                  <div
                    className={`w-5 h-5 border flex items-center justify-center transition-colors duration-500 ${
                      wantsMaintenance
                        ? 'border-kg-champagne bg-kg-champagne text-kg-obsidian'
                        : 'border-kg-ink/25 dark:border-kg-alabaster/25 bg-transparent'
                    }`}
                  >
                    <AnimatePresence>
                      {wantsMaintenance && (
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 45 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        >
                          <Check strokeWidth={2.5} className="w-3.5 h-3.5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex-1 relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <ShieldCheck
                        strokeWidth={1.3}
                        className={`w-5 h-5 transition-colors duration-500 ${
                          wantsMaintenance ? 'text-kg-champagne' : 'text-kg-muted'
                        }`}
                      />
                      <h4
                        className={`font-serif text-xl transition-colors duration-500 ${
                          wantsMaintenance
                            ? 'text-kg-ink dark:text-kg-alabaster'
                            : 'text-kg-ink/75 dark:text-kg-alabaster/75'
                        }`}
                      >
                        Concierge & Nube Dedicada
                      </h4>
                    </div>
                    <span
                      className={`text-[9px] font-medium tracking-[0.22em] uppercase px-3 py-1 border transition-colors duration-500 ${
                        wantsMaintenance
                          ? 'border-kg-champagne/50 bg-kg-champagne/10 text-kg-champagne'
                          : 'border-kg-ink/10 dark:border-kg-alabaster/10 text-kg-muted'
                      }`}
                    >
                      +$600 / mes
                    </span>
                  </div>
                  <p className="text-xs text-kg-muted leading-relaxed mt-2 font-light">
                    Servidores de alta velocidad, respaldos automatizados, certificados SSL y soporte prioritario. Tú lideras la visión de tu empresa; nosotros blindamos tu infraestructura digital.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Panel Derecho: Dossier de Inversión Sticky */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-28"
            >
              <div className="relative p-10 sm:p-12 bg-kg-silk/90 dark:bg-kg-onyx/90 backdrop-blur-xl border border-kg-ink/10 dark:border-kg-alabaster/10 shadow-editorial dark:shadow-editorial-dark flex flex-col">
                
                {/* Detalle geométrico superior */}
                <div className="flex items-center justify-between mb-8 pb-5 border-b border-kg-ink/10 dark:border-kg-alabaster/10">
                  <span className="text-[10px] font-medium tracking-[0.26em] text-kg-muted uppercase">
                    Proyección de Inversión
                  </span>
                  <span className="w-2 h-2 rotate-45 bg-kg-champagne" />
                </div>

                {/* Visualización del Rango de Inversión */}
                <div className="mb-10">
                  <div className="flex flex-wrap items-baseline gap-2.5 mb-3">
                    <span className="text-3xl sm:text-4xl font-serif text-kg-ink dark:text-kg-alabaster tracking-tight">
                      <AnimatedNumber value={minPrice} />
                    </span>
                    <span className="text-kg-champagne font-serif italic text-xl">—</span>
                    <span className="text-2xl sm:text-3xl font-serif text-kg-ink/70 dark:text-kg-alabaster/70 tracking-tight">
                      <AnimatedNumber value={maxPrice} />
                    </span>
                    <span className="text-[10px] text-kg-champagne tracking-[0.25em] font-medium uppercase ml-1">
                      MXN
                    </span>
                  </div>
                  <p className="text-[10px] text-kg-muted/80 uppercase tracking-[0.18em]">
                    *Estimación preliminar sujeta a alcance ejecutivo.
                  </p>
                </div>

                {/* Desglose Minimalista */}
                <div className="space-y-4 mb-10 text-sm">
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-kg-muted font-light">{selectedType.title}</span>
                    <span className="text-kg-ink dark:text-kg-alabaster font-normal">
                      <AnimatedNumber value={selectedType.price} />
                    </span>
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-kg-muted font-light">{selectedDesign.title}</span>
                    <span className="text-kg-ink dark:text-kg-alabaster font-normal">
                      {designExtra > 0 ? '+' : ''}
                      <AnimatedNumber value={designExtra} />
                    </span>
                  </div>
                  <div className="h-[1px] w-full bg-kg-ink/10 dark:bg-kg-alabaster/10 my-4" />
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-kg-muted font-light">Concierge & Nube</span>
                    <span className="text-kg-champagne text-xs tracking-wider uppercase font-medium">
                      {wantsMaintenance ? '+$600 / mes' : 'Gestión Interna'}
                    </span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-center text-center py-6"
                    >
                      <div className="w-16 h-16 border border-kg-champagne text-kg-champagne rounded-full flex items-center justify-center mb-6 shadow-gold-glow">
                        <CheckCircle2 strokeWidth={1.3} className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-serif text-kg-ink dark:text-kg-alabaster mb-3">
                        Solicitud Preparada
                      </h4>
                      <p className="text-xs text-kg-muted mb-8 leading-relaxed font-light max-w-xs">
                        Si tu ventana de WhatsApp no se abrió automáticamente, utiliza el acceso directo para enviar tu configuración.
                      </p>
                      <a
                        href={`https://wa.me/525520138173?text=${encodeURIComponent(
                          'Estimado equipo de KromaGrid, deseo coordinar una sesión para evaluar mi proyecto digital.'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 w-full py-4 border border-kg-champagne text-kg-ink dark:text-kg-alabaster hover:bg-kg-champagne hover:text-white dark:hover:text-kg-obsidian text-xs tracking-[0.22em] uppercase font-medium transition-all duration-500"
                      >
                        <MessageCircle strokeWidth={1.5} className="w-4 h-4" />
                        Continuar en WhatsApp
                      </a>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-6"
                    >
                      <div className="space-y-5">
                        <input
                          type="text"
                          placeholder="Nombre de la empresa o responsable"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-transparent border-b border-kg-ink/20 dark:border-kg-alabaster/20 px-0 py-3 text-sm text-kg-ink dark:text-kg-alabaster placeholder:text-kg-muted/60 focus:outline-none focus:border-kg-champagne transition-colors duration-500 font-light"
                        />

                        <input
                          type="email"
                          placeholder="Correo electrónico corporativo"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent border-b border-kg-ink/20 dark:border-kg-alabaster/20 px-0 py-3 text-sm text-kg-ink dark:text-kg-alabaster placeholder:text-kg-muted/60 focus:outline-none focus:border-kg-champagne transition-colors duration-500 font-light"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-4 group relative overflow-hidden flex items-center justify-center gap-3 w-full py-5 bg-kg-ink text-kg-alabaster dark:bg-kg-alabaster dark:text-kg-obsidian text-xs tracking-[0.24em] uppercase font-medium transition-all duration-500 hover:shadow-gold-glow disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-white dark:group-hover:text-kg-obsidian">
                          {isSubmitting ? (
                            <span className="animate-pulse">Preparando Dossier...</span>
                          ) : (
                            <>
                              Evaluar Viabilidad
                              <ArrowRight
                                strokeWidth={1.5}
                                className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500"
                              />
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 h-full w-0 bg-kg-champagne transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-full z-0" />
                      </button>

                      <p className="text-[9px] text-kg-muted/75 text-center uppercase tracking-[0.25em]">
                        Enlace Directo & Confidencial
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