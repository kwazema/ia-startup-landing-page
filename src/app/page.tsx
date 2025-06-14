import SiteHeader from "@/components/site-header";
import {HeroSection} from "@/components/hero-section";
import {LogoTicker} from "@/components/logo-ticker";
import SiteFooter from "@/components/site-footer";
import {CallToAction} from "@/components/call-to-action";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { FAQ } from "@/components/faq";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
    return (
        <>
            <SiteHeader />
            <HeroSection />
            <LogoTicker />
            <Services />
            <Features />
            <Testimonials />
            <Team />
            <FAQ />
            <ContactForm />
            <CallToAction />
            <SiteFooter />
        </>
    );
}
