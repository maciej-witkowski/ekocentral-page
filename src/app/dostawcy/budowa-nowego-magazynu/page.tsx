import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = { title: "Budowa nowego magazynu" };
export default function Page() {
  return (
    <>
      <PageHero title="Budowa nowego magazynu" breadcrumbs={[{ label: "Dostawcy", path: "/dostawcy" }, { label: "Budowa magazynu" }]} />
      <section className="py-20"><div className="max-w-4xl mx-auto px-6"><AnimatedSection><div className="prose max-w-none"><p>Projekt budowy nowoczesnego magazynu z pełną infrastrukturą instalacyjną, w tym systemami grzewczymi, wodno-kanalizacyjnymi i gazowymi.</p></div></AnimatedSection></div></section>
    </>
  );
}
