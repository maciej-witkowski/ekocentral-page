"use client";

import { ShieldCheck, Truck, Headset, BadgePercent } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import siteData from "@/data/site.json";

const iconMap: Record<string, React.ReactNode> = {
  "shield-check": <ShieldCheck className="w-7 h-7" />,
  truck: <Truck className="w-7 h-7" />,
  headset: <Headset className="w-7 h-7" />,
  "badge-percent": <BadgePercent className="w-7 h-7" />,
};

export function WhyChooseUs() {
  return (
    <section className="py-14 md:py-20 bg-navy-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <motion.div 
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-80 h-80 bg-mint-500/5 rounded-full blur-[100px]" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-mint-400/5 rounded-full blur-[120px]" 
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Dlaczego warto nas wybrać?"
            subtitle="Nasza hurtownia instalacyjna EKOCENTRAL oferuje szeroki asortyment produktów i usług związanych z systemami grzewczymi oraz instalacjami sanitarnymi. Gwarantujemy wysoką jakość produktów, szybką dostawę oraz wsparcie techniczne, co czyni nas idealnym partnerem dla fachowców w branży instalacyjnej."
            light
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-mint-500/30 transition-colors h-full shadow-lg hover:shadow-2xl hover:shadow-mint-500/10"
              >
                <div className="w-14 h-14 rounded-xl bg-mint-500/15 flex items-center justify-center text-mint-500 mb-5 group-hover:bg-mint-500 group-hover:text-navy-900 transition-all duration-300 group-hover:scale-110">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-mint-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
