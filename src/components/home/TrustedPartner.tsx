"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function TrustedPartner() {
  return (
    <section className="py-14 md:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-mint-500 font-semibold text-sm uppercase tracking-widest">
              Zaufany partner
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Zaufany partner w branży instalacyjnej
            </h2>
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "4rem", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
              className="h-1 rounded-full bg-mint-500 mx-auto mb-8 origin-center" 
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-text-secondary leading-relaxed mb-4">
              Nasza hurtownia instalacyjna od lat wspiera fachowców, oferując
              bogaty asortyment produktów do systemów grzewczych i sanitarnych.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Dbamy o naszych klientów, zapewniając konkurencyjne ceny oraz
              szybką dostawę, co znacząco ułatwia realizację projektów.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Zespół ekspertów zawsze służy pomocą, oferując wsparcie techniczne,
              które pomaga w rozwiązywaniu wszelkich problemów związanych z
              instalacjami.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/o-nas"
                className="inline-flex items-center px-8 py-3.5 bg-navy-900 dark:bg-mint-500 text-white dark:text-navy-900 font-semibold rounded-lg hover:bg-navy-800 dark:hover:bg-mint-400 transition-all hover:shadow-xl hover:shadow-navy-900/25 dark:hover:shadow-mint-500/25"
              >
                Czytaj więcej
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
