import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Integracja systemów instalacyjnych w budownictwie",
  description:
    "Integris+ to projekt łączący instalatorów, hurtownie i marki producenckie. Poznaj sprawdzonych dostawców i innowacyjne rozwiązania w branży instalacyjnej.",
};

export default function IntegrisPage() {
  return (
    <>
      <PageHero
        title="INTEGRIS+"
        breadcrumbs={[{ label: "INTEGRIS+" }]}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-mint-500 font-semibold text-sm uppercase tracking-widest">
                Projekt INTEGRIS+
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Łączymy Instalatorów, Hurtownie i Marki
              </h2>
              <div className="w-16 h-1 rounded-full bg-mint-500 mx-auto mb-8" />
              <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto mb-4">
                Integris+ to projekt, który łączy Instalatorów, Hurtownie oraz
                czołowe Marki Producenckie. Naszym celem jest prezentacja
                sprawdzonych dostawców, których produkty cieszą się największym
                zainteresowaniem, a także marek o dużym potencjale rynkowym.
              </p>
              <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
                W tegorocznej edycji po raz pierwszy swoją ofertę przedstawią
                Salus, Uponor, Thermes oraz Werit.
              </p>
            </div>
          </AnimatedSection>

          {/* Integris+ logo */}
          <AnimatedSection delay={0.2}>
            <div className="flex justify-center py-8">
              <Image
                src="/images/logo-integris.png"
                alt="Integris+ Program Lojalnościowy 2026"
                width={500}
                height={200}
                className="w-full max-w-md h-auto"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="text-center mt-8">
            <p className="text-text-secondary mb-6">
              Pełną listę producentów uczestniczących w tej edycji znajdziesz{" "}
              <a
                href="https://integrisplus.pl/index.php?sid=ba1c316d4ac6b3165d8e58b5b26f7e9f#partnerzy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mint-500 hover:text-mint-400 font-medium underline"
              >
                tutaj
              </a>.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center px-8 py-3.5 bg-mint-500 text-navy-900 font-semibold rounded-lg hover:bg-mint-400 transition-all hover:shadow-lg hover:shadow-mint-500/25"
            >
              Napisz do nas
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
