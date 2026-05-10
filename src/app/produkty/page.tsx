import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import Link from "next/link";
import { Construction } from "lucide-react";

export const metadata: Metadata = {
  title: "Produkty",
  description: "Katalog produktów hurtowni instalacyjnej EKOCENTRAL.",
};

export default function ProduktyPage() {
  notFound();
  return (
    <>
      <PageHero title="Produkty" breadcrumbs={[{ label: "Produkty" }]} />
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="w-20 h-20 rounded-2xl bg-mint-500/15 flex items-center justify-center text-mint-500 mx-auto mb-6">
              <Construction className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Strona w przygotowaniu</h2>
            <p className="text-text-secondary mb-8">Katalog produktów jest w trakcie przygotowania. Zapraszamy wkrótce!</p>
            <Link href="/oferta" className="inline-flex items-center px-6 py-3 bg-mint-500 text-navy-900 font-semibold rounded-lg hover:bg-mint-400 transition-all">
              Zobacz ofertę
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
