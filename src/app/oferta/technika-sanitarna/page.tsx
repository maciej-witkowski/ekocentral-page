import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import Link from "next/link";
import services from "@/data/services.json";

const service = services.find((s) => s.slug === "technika-sanitarna")!;

export const metadata: Metadata = {
  title: "Technika sanitarna – armatura, ceramika, systemy odpływowe",
  description: service.seo.description,
};

export default function TechnikaSanitarnaPage() {
  return (
    <>
      <PageHero title={service.title} breadcrumbs={[{ label: "Oferta", path: "/oferta" }, { label: service.title }]} />
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: service.content }} />
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <Link href="/oferta" className="text-mint-500 hover:text-mint-400 font-medium">← Powrót do oferty</Link>
            <Link href="/kontakt" className="inline-flex items-center px-6 py-3 bg-mint-500 text-navy-900 font-semibold rounded-lg hover:bg-mint-400 transition-all">Skontaktuj się z nami</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
