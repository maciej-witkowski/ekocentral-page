import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = { title: "Remont biura w centrum miasta" };
export default function Page() {
  return (
    <>
      <PageHero title="Remont biura w centrum miasta" breadcrumbs={[{ label: "Dostawcy", path: "/dostawcy" }, { label: "Remont biura" }]} />
      <section className="py-20"><div className="max-w-4xl mx-auto px-6"><AnimatedSection><div className="prose max-w-none"><p>Kompleksowy projekt remontu biura w centrum miasta, obejmujący wymianę instalacji grzewczych, sanitarnych oraz modernizację systemów wentylacyjnych. Projekt zrealizowany przy współpracy z naszymi zaufanymi dostawcami.</p></div></AnimatedSection></div></section>
    </>
  );
}
