"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function TrustedPartner() {
  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="text-mint-500 font-semibold text-sm uppercase tracking-widest">
              Zaufany partner
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-6">
              Zaufany partner w branży instalacyjnej
            </h2>
            <div className="w-16 h-1 rounded-full bg-mint-500 mx-auto mb-8" />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-gray-500 leading-relaxed mb-4">
              Nasza hurtownia instalacyjna od lat wspiera fachowców, oferując
              bogaty asortyment produktów do systemów grzewczych i sanitarnych.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Dbamy o naszych klientów, zapewniając konkurencyjne ceny oraz
              szybką dostawę, co znacząco ułatwia realizację projektów.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Zespół ekspertów zawsze służy pomocą, oferując wsparcie techniczne,
              które pomaga w rozwiązywaniu wszelkich problemów związanych z
              instalacjami.
            </p>
            <Link
              href="/o-nas"
              className="inline-flex items-center px-8 py-3.5 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-all hover:shadow-xl hover:shadow-navy-900/25"
            >
              Czytaj więcej
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
