import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Integracja systemów instalacyjnych w budownictwie",
  description:
    "Integris+ to projekt łączący instalatorów, hurtownie i marki producenckie. Poznaj sprawdzonych dostawców i innowacyjne rozwiązania w branży instalacyjnej.",
};

const brands = [
  "BOSCH Professional", "DAB PUMPS", "GEBERIT", "Honeywell Home by Resideo",
  "KHT Group", "LECHAR", "LFP", "SPIROFLEX", "THERMAGEN", "ZEHNDER",
  "Salus", "Uponor", "Thermes", "Werit",
];

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
            <div className="text-center mb-16">
              <span className="text-mint-500 font-semibold text-sm uppercase tracking-widest">
                Projekt INTEGRIS+
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-3 mb-6">
                Łączymy Instalatorów, Hurtownie i Marki
              </h2>
              <div className="w-16 h-1 rounded-full bg-mint-500 mx-auto mb-8" />
              <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto mb-4">
                Integris+ to projekt, który łączy Instalatorów, Hurtownie oraz
                czołowe Marki Producenckie. Naszym celem jest prezentacja
                sprawdzonych dostawców, których produkty cieszą się największym
                zainteresowaniem, a także marek o dużym potencjale rynkowym.
              </p>
              <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
                W tegorocznej edycji po raz pierwszy swoją ofertę przedstawią
                Salus, Uponor, Thermes oraz Werit.
              </p>
            </div>
          </AnimatedSection>

          {/* New brands this edition */}
          <AnimatedSection delay={0.2}>
            <div className="bg-navy-900 rounded-2xl p-10 mb-12">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                10 nowych marek w tej edycji
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {brands.slice(0, 10).map((brand) => (
                  <div
                    key={brand}
                    className="flex items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-mint-500/30 transition-all"
                  >
                    <span className="text-white/80 text-sm font-medium text-center">
                      {brand}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* First-time participants */}
          <AnimatedSection delay={0.3}>
            <div className="bg-gray-50 rounded-2xl p-10">
              <h3 className="text-xl font-bold text-navy-900 mb-6 text-center">
                Pierwsze edycje
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {brands.slice(10).map((brand) => (
                  <div
                    key={brand}
                    className="flex items-center justify-center p-4 rounded-xl bg-white border border-gray-200 hover:border-mint-500/50 hover:shadow-lg transition-all"
                  >
                    <span className="text-navy-900 text-sm font-medium text-center">
                      {brand}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <p className="text-gray-500 mb-6">
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
