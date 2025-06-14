"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en implementarse una automatización?",
    answer: "El tiempo de implementación varía según la complejidad del proyecto. Para automatizaciones básicas como chatbots o formularios inteligentes, entre 1-2 semanas. Para proyectos más complejos como integraciones completas de sistemas, entre 4-8 semanas. Siempre trabajamos por fases para que puedas ver resultados desde el primer día.",
    category: "Implementación"
  },
  {
    question: "¿Necesito conocimientos técnicos para usar las automatizaciones?",
    answer: "No, para nada. Diseñamos todas nuestras soluciones para que sean intuitivas y fáciles de usar. Proporcionamos formación completa a tu equipo y documentación clara. Además, ofrecemos soporte técnico continuo para resolver cualquier duda que pueda surgir.",
    category: "Usabilidad"
  },
  {
    question: "¿Qué pasa si mi negocio crece y necesito más automatizaciones?",
    answer: "Todas nuestras soluciones están diseñadas para ser escalables. Podemos añadir nuevas funcionalidades, integrar más sistemas o aumentar la capacidad según crezca tu negocio. Mantenemos una relación a largo plazo con nuestros clientes para acompañarlos en su crecimiento.",
    category: "Escalabilidad"
  },
  {
    question: "¿Mis datos están seguros con las automatizaciones?",
    answer: "La seguridad es nuestra prioridad. Cumplimos con el RGPD y utilizamos las mejores prácticas de seguridad en el desarrollo. Todos los datos se cifran y almacenan de forma segura. Además, realizamos auditorías de seguridad regulares y mantenemos copias de seguridad automáticas.",
    category: "Seguridad"
  },
  {
    question: "¿Pueden integrar las automatizaciones con mis sistemas actuales?",
    answer: "Absolutamente. Somos especialistas en integraciones. Podemos conectar prácticamente cualquier sistema: CRM, ERP, e-commerce, herramientas de marketing, contabilidad, etc. Utilizamos APIs nativas y desarrollamos conectores personalizados cuando es necesario.",
    category: "Integraciones"
  },
  {
    question: "¿Qué diferencia a SynergyLabs de otras empresas de automatización?",
    answer: "Nos especializamos exclusivamente en PYMEs españolas y entendemos sus desafíos únicos. Combinamos expertise técnico con conocimiento de marketing, ofrecemos precios transparentes, garantías reales y actuamos como extensión de tu equipo. No somos una consultora grande, somos tu departamento técnico externo.",
    category: "Diferenciación"
  }
];

const FAQItem = ({ faq, index, isOpen, onToggle }: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-muted rounded-xl bg-gradient-to-br from-synergy-blue/5 to-synergy-purple/5 backdrop-blur-sm"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors rounded-xl"
      >
        <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-white/70" />
        </motion.div>
      </button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4">
          <p className="text-white/70 leading-relaxed">{faq.answer}</p>
          <span className="inline-block mt-3 px-3 py-1 text-xs font-medium bg-gradient-to-r from-synergy-blue to-synergy-purple text-white rounded-full">
            {faq.category}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestras automatizaciones para PYMEs
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 mb-4">¿No encuentras la respuesta que buscas?</p>
          <a
            href="#contacto"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-synergy-blue to-synergy-purple text-white font-medium rounded-lg hover:shadow-lg hover:shadow-synergy-blue/25 transition-all duration-300"
          >
            Contacta con nosotros
          </a>
        </motion.div>
      </div>
    </section>
  );
} 