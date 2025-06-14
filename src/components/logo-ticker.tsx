"use client"

import { motion } from "framer-motion";

// Iconos SVG de las tecnologías que usa SynergyLabs
const ZapierIcon = () => (
  <div className="h-8 w-24 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded flex items-center justify-center text-white font-bold text-sm">
    Zapier
  </div>
);

const MakeIcon = () => (
  <div className="h-8 w-20 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded flex items-center justify-center text-white font-bold text-sm">
    Make
  </div>
);

const ShopifyIcon = () => (
  <div className="h-8 w-24 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded flex items-center justify-center text-white font-bold text-sm">
    Shopify
  </div>
);

const HubSpotIcon = () => (
  <div className="h-8 w-24 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded flex items-center justify-center text-white font-bold text-sm">
    HubSpot
  </div>
);

const StripeIcon = () => (
  <div className="h-8 w-20 bg-gradient-to-r from-synergy-blue to-synergy-purple rounded flex items-center justify-center text-white font-bold text-sm">
    Stripe
  </div>
);

export function LogoTicker() {
  return (
    <>
      <section className={"py-20 md:py-24"}>
        <div className={"container"}>
          <div className={"flex items-center gap-5"}>
              <div className={"flex-1 md:flex-none"}>
                  <h2 className={"text-white/70"}>De la confianza de PYMEs innovadoras</h2>
              </div>
              <div className={"flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"}>
                  <motion.div
                      initial={{translateX: '-50%'}}
                      animate={{translateX: '0'}}
                      transition={{
                          repeat: Infinity,
                          duration: 30,
                          ease: "linear",
                      }}
                      className={"flex flex-none gap-14 pr-14 -translate-x-1/2"}>
                      {[
                        <ZapierIcon key="zapier-1" />,
                        <MakeIcon key="make-1" />,
                        <ShopifyIcon key="shopify-1" />,
                        <HubSpotIcon key="hubspot-1" />,
                        <StripeIcon key="stripe-1" />,
                        <ZapierIcon key="zapier-2" />,
                        <MakeIcon key="make-2" />,
                        <ShopifyIcon key="shopify-2" />,
                        <HubSpotIcon key="hubspot-2" />,
                        <StripeIcon key="stripe-2" />
                      ]}
                  </motion.div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}
