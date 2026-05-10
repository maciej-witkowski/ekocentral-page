import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ShieldCheck, Truck, Headset, BadgePercent } from "lucide-react";
import siteData from "@/data/site.json";

export const metadata: Metadata = {
  title: "O nas - hurtownia instalacyjna z wysoką jakością produktów",
  description:
    "Poznaj historię naszej hurtowni instalacyjnej, która oferuje wysokiej jakości produkty grzewcze i sanitarne. Dzięki szybkiej dostawie, wsparciu technicznemu oraz konkurencyjnym cenom, zyskaliśmy zaufanie fachowców w branży.",
};

const icons = [
  <ShieldCheck key="s" className="w-7 h-7" />,
  <Truck key="t" className="w-7 h-7" />,
  <Headset key="h" className="w-7 h-7" />,
  <BadgePercent key="b" className="w-7 h-7" />,
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="O nas"
        breadcrumbs={[{ label: "O nas" }]}
      />

      {/* Kim jesteśmy */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/building.jpg"
                  alt="Siedziba EKOCENTRAL"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <span className="text-mint-500 font-semibold text-sm uppercase tracking-widest">
                Nasza filozofia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-6">
                Kim jesteśmy?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                EKOCENTRAL to hurtownia instalacyjna, która dostarcza wyjątkowy
                asortyment produktów związanych z systemami grzewczymi oraz
                instalacjami sanitarnymi. Nasza oferta obejmuje innowacyjne
                rozwiązania, które gwarantują komfort i oszczędność energii w
                każdym budynku.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Dążymy do tego, aby być niezawodnym partnerem dla fachowców w
                branży instalacyjnej, oferując produkty o wysokiej jakości w
                konkurencyjnych cenach. Nasze wsparcie techniczne jest zawsze
                dostępne, aby zapewnić naszym klientom pełne bezpieczeństwo
                instalacji.
              </p>
              <p className="text-gray-500 leading-relaxed">
                W EKOCENTRAL rozumiemy, jak ważna jest szybka dostawa. Dlatego
                nasze procesy logistyczne są zoptymalizowane, aby każdy zamówiony
                produkt dotarł do klienta w jak najkrótszym czasie. Zaufaj nam,
                aby Twoje projekty były realizowane sprawnie i terminowo.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Grupa SBS */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <span className="text-mint-500 font-semibold text-sm uppercase tracking-widest">
                Partnerstwo
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-6">
                Ekocentral – Członek Grupy Zakupowej SBS
              </h2>
              <div className="w-16 h-1 rounded-full bg-mint-500 mx-auto mb-8" />
              <p className="text-gray-500 leading-relaxed mb-4">
                Z dumą informujemy, że Ekocentral jest częścią prestiżowej Grupy
                Zakupowej SBS – największej w Polsce organizacji zrzeszającej
                hurtownie i sklepy instalacyjne. Dzięki tej współpracy możemy
                oferować naszym klientom najwyższej jakości produkty w
                konkurencyjnych cenach oraz dostęp do innowacyjnych rozwiązań w
                branży instalacyjnej i grzewczej.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Ekocentral to firma stworzona przez doświadczoną załogę z blisko
                20-letnim doświadczeniem, specjalizująca się w sprzedaży
                nowoczesnych systemów grzewczych, wodno-kanalizacyjnych i
                instalacyjnych. Naszą misją jest dostarczanie ekologicznych i
                energooszczędnych rozwiązań, które spełniają oczekiwania zarówno
                profesjonalistów, jak i klientów indywidualnych.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Dlaczego warto */}
      <section className="py-20 md:py-28 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-mint-500/5 rounded-full blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionHeading
              title="Dlaczego warto nas wybrać?"
              subtitle="Gwarantujemy wysoką jakość produktów, szybką dostawę oraz wsparcie techniczne, co czyni nas idealnym partnerem dla fachowców w branży instalacyjnej."
              light
            />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-mint-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-14 h-14 rounded-xl bg-mint-500/15 flex items-center justify-center text-mint-500 mb-5 group-hover:bg-mint-500 group-hover:text-navy-900 transition-all duration-300">
                    {icons[i]}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <Link
              href="/kontakt"
              className="inline-flex items-center px-8 py-4 bg-mint-500 text-navy-900 font-semibold rounded-xl hover:bg-mint-400 transition-all hover:shadow-xl hover:shadow-mint-500/25 text-lg"
            >
              Napisz do nas
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
