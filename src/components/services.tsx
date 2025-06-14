"use client"

import { motion } from "framer-motion";
import { Bot, Link2, ShoppingBag, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Automatizaciones Inteligentes",
    subtitle: "Chatbots y flujos de trabajo que trabajan 24/7",
    description: "Desarrollamos chatbots inteligentes, formularios automatizados y flujos de trabajo que gestionan tareas repetitivas por ti. Desde atención al cliente hasta seguimiento de leads, nuestras automatizaciones liberan tiempo para que te centres en hacer crecer tu negocio.",
    features: [
      "Chatbots para WhatsApp Business y web",
      "Formularios inteligentes con lógica condicional", 
      "Automatización de seguimiento de leads",
      "Flujos de trabajo personalizados",
      "Respuestas automáticas inteligentes"
    ],
    benefits: "Ahorra hasta 20 horas semanales en tareas repetitivas",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Link2,
    title: "Integraciones de Sistemas",
    subtitle: "Conecta todas tus herramientas sin complicaciones",
    description: "Integramos tus sistemas existentes para que hablen entre sí: CRM, e-commerce, contabilidad, marketing y más. Elimina la entrada manual de datos y asegura que toda la información fluya automáticamente donde la necesitas.",
    features: [
      "Integración CRM con herramientas de marketing",
      "Conexión e-commerce con contabilidad",
      "Sincronización de datos entre plataformas",
      "APIs personalizadas cuando sea necesario",
      "Webhooks y automatizaciones en tiempo real"
    ],
    benefits: "Reduce errores manuales en un 95% y mejora la precisión de datos",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: ShoppingBag,
    title: "Desarrollo y Optimización Shopify",
    subtitle: "Tiendas online que convierten y automatizan ventas",
    description: "Creamos y optimizamos tiendas Shopify que no solo se ven increíbles, sino que automatizan todo el proceso de ventas. Desde el marketing hasta el fulfillment, tu tienda trabajará de forma inteligente para maximizar conversiones.",
    features: [
      "Desarrollo de tiendas Shopify optimizadas",
      "Automatización de marketing por email",
      "Integración con sistemas de inventario",
      "Optimización de conversión (CRO)",
      "Apps personalizadas para Shopify"
    ],
    benefits: "Incrementa las conversiones hasta un 40% con automatización inteligente",
    color: "from-green-500 to-teal-600"
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital Estratégico",
    subtitle: "Campañas automatizadas que generan resultados",
    description: "Diseñamos y automatizamos campañas de marketing digital que nutren leads y convierten clientes automáticamente. Desde email marketing hasta campañas en redes sociales, todo funciona en piloto automático.",
    features: [
      "Email marketing automatizado",
      "Secuencias de nurturing de leads",
      "Automatización de redes sociales",
      "Análisis y reporting automático",
      "Optimización continua basada en datos"
    ],
    benefits: "Genera 3x más leads cualificados con 50% menos tiempo invertido",
    color: "from-orange-500 to-red-600"
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gradient-to-br from-synergy-blue/5 to-synergy-purple/5 border border-muted rounded-2xl p-8 hover:border-synergy-blue/30 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="mb-6">
        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-synergy-blue font-medium">{service.subtitle}</p>
      </div>

      {/* Description */}
      <p className="text-white/70 leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">Qué incluye:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-synergy-blue flex-shrink-0 mt-0.5" />
              <span className="text-white/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-r from-synergy-blue/10 to-synergy-purple/10 rounded-lg p-4 mb-6">
        <p className="text-white/90 text-sm font-medium text-center">
          💡 {service.benefits}
        </p>
      </div>

      {/* CTA */}
      <button className="w-full py-3 px-6 bg-gradient-to-r from-synergy-blue to-synergy-purple text-white font-medium rounded-lg hover:shadow-lg hover:shadow-synergy-blue/25 transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2">
        Más información
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            Desde automatizaciones simples hasta integraciones complejas. Somos tu departamento técnico externo especializado en hacer que tu PYME funcione de forma más inteligente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-synergy-blue/10 to-synergy-purple/10 border border-muted rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Nuestro Proceso de Trabajo
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Análisis",
                description: "Analizamos tus procesos actuales y identificamos oportunidades de automatización"
              },
              {
                step: "02", 
                title: "Diseño",
                description: "Diseñamos la solución perfecta para tu negocio con un enfoque en la usabilidad"
              },
              {
                step: "03",
                title: "Desarrollo",
                description: "Desarrollamos e implementamos la automatización con las mejores prácticas"
              },
              {
                step: "04",
                title: "Soporte",
                description: "Te acompañamos en la puesta en marcha y brindamos soporte continuo"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{phase.title}</h4>
                <p className="text-white/70 text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 