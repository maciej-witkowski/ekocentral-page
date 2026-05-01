import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = { title: "Modernizacja instalacji wodno-kanalizacyjnej" };
export default function Page() {
  return (
    <>
      <PageHero title="Modernizacja instalacji wodno-kanalizacyjnej" breadcrumbs={[{ label: "Dostawcy", path: "/dostawcy" }, { label: "Modernizacja instalacji" }]} />
      <section className="py-20"><div className="max-w-4xl mx-auto px-6"><AnimatedSection><div className="prose max-w-none"><p>Modernizacja systemów wodno-kanalizacyjnych w istniejącym obiekcie. Projekt obejmował wymianę rur, armatury oraz montaż nowoczesnych systemów odpływowych.</p></div></AnimatedSection></div></section>
    </>
  );
}
