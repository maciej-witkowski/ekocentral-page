"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <Image
                src="/images/building.jpg"
                alt="Siedziba EKOCENTRAL w Bydgoszczy"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-mint-500 to-mint-400" />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.2}>
            <span className="text-mint-500 font-semibold text-sm uppercase tracking-widest">
              O firmie
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-6">
              EKOCENTRAL – Specjalista w dziedzinie instalacji
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              EKOCENTRAL to hurtownia instalacyjna, która dostarcza najwyższej
              jakości produkty związane z systemami grzewczymi i sanitarnymi.
              Nasza oferta skierowana jest do fachowców, którzy cenią sobie
              efektywność i najwyższą jakość produktów.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Dzięki konkurencyjnym cenom oraz szybkiej dostawie, zapewniamy
              partnerstwo, które wspiera rozwój branży instalacyjnej. Jesteśmy
              tu, aby sprostać oczekiwaniom naszych klientów.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Nasza misja to nie tylko dostarczanie produktów, ale także
              oferowanie wsparcia technicznego na każdym etapie realizacji
              inwestycji. Jakość i bezpieczeństwo instalacji są dla nas
              priorytetem.
            </p>
            <Link
              href="/o-nas"
              className="inline-flex items-center px-6 py-3 bg-mint-500 text-navy-900 font-semibold rounded-lg hover:bg-mint-400 transition-all hover:shadow-lg hover:shadow-mint-500/25"
            >
              Czytaj więcej
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
