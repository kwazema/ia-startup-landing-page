import SiteLogo from "@/assets/logo.svg";
import Link from "next/link";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

export default function SiteFooter() {
    return (
        <>
            <footer className="bg-gradient-to-b from-transparent to-synergy-blue/5 border-t border-muted">
                <div className="container py-16">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="border size-10 rounded-lg inline-flex items-center justify-center">
                                    <SiteLogo className="size-8 h-auto"/>
                                </div>
                                <p className="font-bold text-xl text-white">SynergyLabs</p>
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed mb-6">
                                Automatizaciones inteligentes para PYMEs españolas. Tu departamento técnico externo.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="https://linkedin.com/company/synergylabs" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-synergy-blue/25 transition-all duration-300"
                                >
                                    <Linkedin className="w-5 h-5 text-white" />
                                </a>
                                <a 
                                    href="mailto:hola@synergylabs.es"
                                    className="w-10 h-10 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-synergy-blue/25 transition-all duration-300"
                                >
                                    <Mail className="w-5 h-5 text-white" />
                                </a>
                                <a 
                                    href="https://wa.me/34600000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-synergy-blue/25 transition-all duration-300"
                                >
                                    <MessageCircle className="w-5 h-5 text-white" />
                                </a>
                            </div>
                        </div>

                        {/* Servicios */}
                        <div>
                            <h3 className="font-semibold text-white mb-4">Servicios</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#servicios" className="text-white/70 hover:text-white transition-colors">
                                        Automatizaciones
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#servicios" className="text-white/70 hover:text-white transition-colors">
                                        Integraciones
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#servicios" className="text-white/70 hover:text-white transition-colors">
                                        Shopify
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#servicios" className="text-white/70 hover:text-white transition-colors">
                                        Marketing Digital
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Empresa */}
                        <div>
                            <h3 className="font-semibold text-white mb-4">Empresa</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#nosotros" className="text-white/70 hover:text-white transition-colors">
                                        Nosotros
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#faq" className="text-white/70 hover:text-white transition-colors">
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#blog" className="text-white/70 hover:text-white transition-colors">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#contacto" className="text-white/70 hover:text-white transition-colors">
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="font-semibold text-white mb-4">Legal</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/privacidad" className="text-white/70 hover:text-white transition-colors">
                                        Política de Privacidad
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terminos" className="text-white/70 hover:text-white transition-colors">
                                        Términos de Servicio
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cookies" className="text-white/70 hover:text-white transition-colors">
                                        Cookies
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-muted pt-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-white/50 text-sm text-center md:text-left">
                                © 2024 SynergyLabs. Automatizaciones inteligentes para PYMEs españolas.
                            </p>
                            <div className="flex items-center gap-6 text-sm">
                                <Link href="/aviso-legal" className="text-white/50 hover:text-white transition-colors">
                                    Aviso Legal
                                </Link>
                                <Link href="/rgpd" className="text-white/50 hover:text-white transition-colors">
                                    RGPD
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
