"use client"

import Link from "next/link";
import SiteLogo from "@/assets/logo.svg"
import {Settings, Users, HelpCircle, MessageSquare, MenuIcon} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {useState} from "react";
import {ActionButton} from "@/components/action-button";

export default function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <header className={"py-4 border-b max-md:backdrop-blur md:border-none sticky top-0 z-10"}>
                <div className={"container max-md:px-4"}>
                    <div className={"flex items-center justify-between md:border md:p-2.5 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur "}>
                        <Link href={"/"}>
                            <div className={"border size-10 rounded-lg inline-flex items-center justify-center"}>
                                <SiteLogo className={"size-8 h-auto"} />
                            </div>
                        </Link>
                        <section className={"max-md:hidden"}>
                            <nav className={"flex gap-8 items-center text-sm"}>
                                <Link href={"#servicios"} className={"text-white/70 hover:text-white transition"}>Servicios</Link>
                                <Link href={"#nosotros"} className={"text-white/70 hover:text-white transition"}>Nosotros</Link>
                                <Link href={"#faq"} className={"text-white/70 hover:text-white transition"}>FAQ</Link>
                                <Link href={"#contacto"} className={"text-white/70 hover:text-white transition"}>Contacto</Link>
                            </nav>
                        </section>
                        <section className={"flex max-md:gap-4 items-center"}>
                            <ActionButton label={"Consulta Gratuita"} />
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger>
                                    <MenuIcon className={"size-9 md:hidden hover:text-white/70 transition"}/>
                                </SheetTrigger>
                                <SheetContent side={"top"} className={"p-8"}>
                                    <div className={"inline-flex items-center center gap-3"}>
                                        <div className={"border size-8 rounded-lg inline-flex items-center justify-center"}>
                                            <SiteLogo className={"size-6 h-auto"}/>
                                        </div>
                                        <p className={"font-bold"}>SynergyLabs</p>
                                    </div>
                                    <div className={"mt-8 mb-4"}>
                                        <nav className={"grid gap-4 items-center text-lg"}>
                                            <Link href={"#servicios"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
                                                <Settings className={"size-6"} />
                                                Servicios
                                            </Link>
                                            <Link href={"#nosotros"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
                                                <Users className={"size-6"} />
                                                Nosotros
                                            </Link>
                                            <Link href={"#faq"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
                                                <HelpCircle className={"size-6"} />
                                                FAQ
                                            </Link>
                                            <Link href={"#contacto"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
                                                <MessageSquare className={"size-6"} />
                                                Contacto
                                            </Link>
                                        </nav>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </section>
                    </div>
                </div>
            </header>
        </>
    )
}
