"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Building, Users, DollarSign, MessageSquare } from "lucide-react";

const sectores = [
  "E-commerce",
  "Servicios Profesionales",
  "Inmobiliaria",
  "Consultoría",
  "Educación",
  "Salud y Bienestar",
  "Hostelería",
  "Manufactura",
  "Tecnología",
  "Otro"
];

const tamanosEmpresa = [
  "1-10 empleados",
  "11-50 empleados", 
  "51-200 empleados",
  "200+ empleados"
];

const presupuestos = [
  "< 5.000€",
  "5.000€ - 15.000€",
  "15.000€ - 30.000€",
  "30.000€ - 50.000€",
  "> 50.000€",
  "Prefiero no especificar"
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    email: "",
    telefono: "",
    nombreEmpresa: "",
    sector: "",
    proceso: "",
    empleados: "",
    presupuesto: "",
    aceptaInformacion: false
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.nombreCompleto.trim()) {
      newErrors.nombreCompleto = "El nombre completo es obligatorio";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Por favor, introduce un email válido";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    }

    if (!formData.nombreEmpresa.trim()) {
      newErrors.nombreEmpresa = "El nombre de la empresa es obligatorio";
    }

    if (!formData.sector) {
      newErrors.sector = "Por favor, selecciona un sector";
    }

    if (!formData.proceso.trim()) {
      newErrors.proceso = "Por favor, describe el proceso que te gustaría automatizar";
    }

    if (!formData.empleados) {
      newErrors.empleados = "Por favor, selecciona el tamaño de tu empresa";
    }

    if (!formData.presupuesto) {
      newErrors.presupuesto = "Por favor, selecciona un rango de presupuesto";
    }

    if (!formData.aceptaInformacion) {
      newErrors.aceptaInformacion = "Debes aceptar recibir información comercial";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="py-20 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-gradient-to-br from-synergy-blue/10 to-synergy-purple/10 border border-muted rounded-2xl p-12"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">¡Gracias por tu consulta!</h3>
            <p className="text-white/70 text-lg mb-6">
              Hemos recibido tu solicitud. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas para agendar tu consulta gratuita.
            </p>
            <p className="text-white/60">
              Mientras tanto, síguenos en LinkedIn para ver más casos de éxito y novedades.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-20 md:py-24">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-4">
            Agenda tu Consulta Gratuita
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Cuéntanos sobre tu negocio y descubre cómo podemos automatizar tus procesos en 30 días
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-synergy-blue/5 to-synergy-purple/5 border border-muted rounded-2xl p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Nombre Completo */}
            <div>
              <label htmlFor="nombreCompleto" className="block text-white font-medium mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                Nombre Completo *
              </label>
              <input
                type="text"
                id="nombreCompleto"
                name="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-synergy-blue transition-colors ${
                  errors.nombreCompleto ? 'border-red-500' : 'border-muted hover:border-white/30'
                }`}
                placeholder="Tu nombre completo"
              />
              {errors.nombreCompleto && (
                <p className="text-red-400 text-sm mt-1">{errors.nombreCompleto}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Empresarial *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-synergy-blue transition-colors ${
                  errors.email ? 'border-red-500' : 'border-muted hover:border-white/30'
                }`}
                placeholder="tu.email@empresa.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <label htmlFor="telefono" className="block text-white font-medium mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Teléfono *
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-synergy-blue transition-colors ${
                  errors.telefono ? 'border-red-500' : 'border-muted hover:border-white/30'
                }`}
                placeholder="+34 600 000 000"
              />
              {errors.telefono && (
                <p className="text-red-400 text-sm mt-1">{errors.telefono}</p>
              )}
            </div>

            {/* Nombre de la Empresa */}
            <div>
              <label htmlFor="nombreEmpresa" className="block text-white font-medium mb-2">
                <Building className="w-4 h-4 inline mr-2" />
                Nombre de la Empresa *
              </label>
              <input
                type="text"
                id="nombreEmpresa"
                name="nombreEmpresa"
                value={formData.nombreEmpresa}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-synergy-blue transition-colors ${
                  errors.nombreEmpresa ? 'border-red-500' : 'border-muted hover:border-white/30'
                }`}
                placeholder="Nombre de tu empresa"
              />
              {errors.nombreEmpresa && (
                <p className="text-red-400 text-sm mt-1">{errors.nombreEmpresa}</p>
              )}
            </div>

            {/* Sector */}
            <div>
              <label htmlFor="sector" className="block text-white font-medium mb-2">
                Sector/Industria *
              </label>
              <select
                id="sector"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-synergy-blue transition-colors ${
                  errors.sector ? 'border-red-500' : 'border-muted hover:border-white/30'
                }`}
              >
                <option value="">Selecciona tu sector</option>
                {sectores.map(sector => (
                  <option key={sector} value={sector} className="bg-gray-800">
                    {sector}
                  </option>
                ))}
              </select>
              {errors.sector && (
                <p className="text-red-400 text-sm mt-1">{errors.sector}</p>
              )}
            </div>

            {/* Empleados */}
            <div>
              <label htmlFor="empleados" className="block text-white font-medium mb-2">
                ¿Cuántos empleados tiene tu empresa? *
              </label>
              <select
                id="empleados"
                name="empleados"
                value={formData.empleados}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-synergy-blue transition-colors ${
                  errors.empleados ? 'border-red-500' : 'border-muted hover:border-white/30'
                }`}
              >
                <option value="">Selecciona el tamaño</option>
                {tamanosEmpresa.map(tamano => (
                  <option key={tamano} value={tamano} className="bg-gray-800">
                    {tamano}
                  </option>
                ))}
              </select>
              {errors.empleados && (
                <p className="text-red-400 text-sm mt-1">{errors.empleados}</p>
              )}
            </div>
          </div>

          {/* Proceso a automatizar */}
          <div className="mb-6">
            <label htmlFor="proceso" className="block text-white font-medium mb-2">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              ¿Qué proceso te gustaría automatizar? *
            </label>
            <textarea
              id="proceso"
              name="proceso"
              value={formData.proceso}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-synergy-blue transition-colors resize-none ${
                errors.proceso ? 'border-red-500' : 'border-muted hover:border-white/30'
              }`}
              placeholder="Describe el proceso que te gustaría automatizar: gestión de pedidos, atención al cliente, seguimiento de leads, etc."
            />
            {errors.proceso && (
              <p className="text-red-400 text-sm mt-1">{errors.proceso}</p>
            )}
          </div>

          {/* Presupuesto */}
          <div className="mb-6">
            <label htmlFor="presupuesto" className="block text-white font-medium mb-2">
              <DollarSign className="w-4 h-4 inline mr-2" />
              Presupuesto estimado *
            </label>
            <select
              id="presupuesto"
              name="presupuesto"
              value={formData.presupuesto}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-synergy-blue transition-colors ${
                errors.presupuesto ? 'border-red-500' : 'border-muted hover:border-white/30'
              }`}
            >
              <option value="">Selecciona un rango</option>
              {presupuestos.map(presupuesto => (
                <option key={presupuesto} value={presupuesto} className="bg-gray-800">
                  {presupuesto}
                </option>
              ))}
            </select>
            {errors.presupuesto && (
              <p className="text-red-400 text-sm mt-1">{errors.presupuesto}</p>
            )}
          </div>

          {/* Checkbox */}
          <div className="mb-8">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="aceptaInformacion"
                checked={formData.aceptaInformacion}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-synergy-blue bg-transparent border-2 border-muted rounded focus:ring-synergy-blue focus:ring-2"
              />
              <span className={`text-sm ${errors.aceptaInformacion ? 'text-red-400' : 'text-white/70'}`}>
                Acepto recibir información comercial de SynergyLabs sobre sus servicios de automatización *
              </span>
            </label>
            {errors.aceptaInformacion && (
              <p className="text-red-400 text-sm mt-1 ml-7">{errors.aceptaInformacion}</p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 px-8 bg-gradient-to-r from-synergy-blue to-synergy-purple text-white font-semibold text-lg rounded-lg hover:shadow-lg hover:shadow-synergy-blue/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Enviando consulta...
              </div>
            ) : (
              "Solicitar Consulta Gratuita"
            )}
          </motion.button>

          <p className="text-white/50 text-xs text-center mt-4">
            Nos comprometemos a responder en menos de 24 horas. Sin spam, sin compromisos.
          </p>
        </motion.form>
      </div>
    </section>
  );
} 