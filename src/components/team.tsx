"use client"

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Diana Martín",
    role: "Cofundadora",
    speciality: "Marketing & UX",
    description: "Especialista en marketing digital y experiencia de usuario. Diana combina su expertise en estrategias de crecimiento con un enfoque centrado en el usuario para crear automatizaciones que realmente conecten con tu audiencia.",
    skills: ["Marketing Digital", "UX/UI Design", "Growth Hacking", "Automatización de Marketing"],
    image: "/assets/team-diana.jpg", // Placeholder
    linkedin: "https://linkedin.com/in/diana-martin-synergylabs",
    email: "diana@synergylabs.es"
  },
  {
    name: "Andreu Kwazema", 
    role: "Cofundador",
    speciality: "Desarrollo & IA",
    description: "Desarrollador fullstack e ingeniero de automatización. Andreu se encarga de la arquitectura técnica y el desarrollo de las integraciones más complejas, asegurando que cada solución sea robusta y escalable.",
    skills: ["Desarrollo Full Stack", "Automatización", "Integraciones API", "Inteligencia Artificial"],
    image: "/assets/team-andreu.jpg", // Placeholder
    linkedin: "https://linkedin.com/in/andreu-kwazema-synergylabs", 
    email: "andreu@synergylabs.es"
  }
];

const TeamMember = ({ member, index }: { member: typeof teamMembers[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gradient-to-br from-synergy-blue/5 to-synergy-purple/5 border border-muted rounded-2xl p-8 backdrop-blur-sm hover:border-synergy-blue/30 transition-colors group"
    >
      <div className="text-center mb-6">
        {/* Avatar Placeholder */}
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-synergy-blue to-synergy-purple rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {member.name.split(' ').map(n => n[0]).join('')}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-synergy-blue font-medium text-lg mb-1">{member.role}</p>
        <p className="text-white/60 text-sm">{member.speciality}</p>
      </div>

      <p className="text-white/70 leading-relaxed mb-6 text-center">
        {member.description}
      </p>

      {/* Skills */}
      <div className="mb-6">
        <h4 className="text-white font-medium mb-3 text-center">Especialidades</h4>
        <div className="flex flex-wrap gap-2 justify-center">
          {member.skills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-3 py-1 bg-gradient-to-r from-synergy-blue/20 to-synergy-purple/20 text-white/80 text-xs rounded-full border border-synergy-blue/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="flex justify-center gap-4">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-synergy-blue/25 transition-all duration-300 group-hover:scale-110"
        >
          <Linkedin className="w-5 h-5 text-white" />
        </a>
        <a
          href={`mailto:${member.email}`}
          className="w-10 h-10 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-synergy-blue/25 transition-all duration-300 group-hover:scale-110"
        >
          <Mail className="w-5 h-5 text-white" />
        </a>
      </div>
    </motion.div>
  );
};

export function Team() {
  return (
    <section id="nosotros" className="py-20 md:py-24">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-4">
            Conoce al Equipo
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            Somos Diana y Andreu, los cofundadores de SynergyLabs. Combinamos expertise técnico con conocimiento de marketing para ser tu departamento técnico externo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-synergy-blue/10 to-synergy-purple/10 border border-muted rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Nuestra Filosofía</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Tecnología Accesible</h4>
              <p className="text-white/70">Hacemos que la automatización sea simple y comprensible para cualquier PYME.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Centrado en el Usuario</h4>
              <p className="text-white/70">Diseñamos cada solución pensando en la experiencia real del usuario final.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Soporte Continuo</h4>
              <p className="text-white/70">No te dejamos solo. Somos tu equipo técnico, siempre disponible cuando nos necesites.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 