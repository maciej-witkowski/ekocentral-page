"use client";

import Link from "next/link";
import { Flame, Droplets, Gauge, Sun, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import services from "@/data/services.json";

const iconMap: Record<string, React.ReactNode> = {
  flame: <Flame className="w-8 h-8" />,
  droplets: <Droplets className="w-8 h-8" />,
  gauge: <Gauge className="w-8 h-8" />,
  sun: <Sun className="w-8 h-8" />,
};

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeading
            title="Nasze Usługi"
            subtitle="Oferujemy kompleksowe rozwiązania w zakresie techniki grzewczej, sanitarnej, gazowej oraz energii odnawialnej, zapewniając komfort i bezpieczeństwo w każdym projekcie."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={i * 0.1}>
              <Link
                href={`/oferta/${service.slug}`}
                className="group relative block rounded-2xl overflow-hidden bg-navy-900 h-64 md:h-72"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 group-hover:from-navy-800 group-hover:via-navy-700 group-hover:to-navy-600 transition-all duration-500" />

                {/* Decorative blob */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-mint-500/10 rounded-full blur-[40px] group-hover:bg-mint-500/20 transition-all duration-500" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-mint-500/15 flex items-center justify-center text-mint-500 mb-4 group-hover:bg-mint-500 group-hover:text-navy-900 transition-all duration-300">
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-mint-400 text-sm font-medium group-hover:gap-3 transition-all">
                    Czytaj więcej
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-10">
          <Link
            href="/oferta"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-navy-900 hover:text-white transition-all"
          >
            Zobacz wszystko
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
