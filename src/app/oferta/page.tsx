import { Metadata } from "next";
import Link from "next/link";
import { Flame, Droplets, Gauge, Sun, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import services from "@/data/services.json";

export const metadata: Metadata = {
  title: "Oferta instalacji i usług - wysoka jakość i szybka dostawa",
  description:
    "Zapoznaj się z naszą ofertą instalacji i usług. Oferujemy wysoką jakość produktów, szybką dostawę, wsparcie techniczne oraz konkurencyjne ceny.",
};

const iconMap: Record<string, React.ReactNode> = {
  flame: <Flame className="w-10 h-10" />,
  droplets: <Droplets className="w-10 h-10" />,
  gauge: <Gauge className="w-10 h-10" />,
  sun: <Sun className="w-10 h-10" />,
};

export default function OfertaPage() {
  return (
    <>
      <PageHero
        title="Oferta"
        breadcrumbs={[{ label: "Oferta" }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.1}>
                <Link
                  href={`/oferta/${service.slug}`}
                  className="group relative block rounded-2xl overflow-hidden bg-navy-900 h-80"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 group-hover:from-navy-800 group-hover:to-navy-600 transition-all duration-500" />
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-mint-500/10 rounded-full blur-[50px] group-hover:bg-mint-500/20 transition-all" />

                  <div className="relative h-full flex flex-col justify-between p-10">
                    <div>
                      <div className="w-16 h-16 rounded-2xl bg-mint-500/15 flex items-center justify-center text-mint-500 mb-6 group-hover:bg-mint-500 group-hover:text-navy-900 transition-all duration-300">
                        {iconMap[service.icon]}
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h2>
                      <p className="text-white/60 leading-relaxed">
                        {service.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-mint-400 font-medium group-hover:gap-4 transition-all">
                      Czytaj więcej
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
