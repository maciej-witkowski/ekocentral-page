import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dostawcy - projekty realizowane",
  description: "Przegląd projektów realizowanych z naszymi dostawcami.",
};

const projects = [
  { title: "Remont biura w centrum miasta", slug: "remont-biura-w-centrum-miasta", description: "Kompleksowy remont z wymianą instalacji grzewczych i sanitarnych." },
  { title: "Budowa nowego magazynu", slug: "budowa-nowego-magazynu", description: "Projekt budowy nowoczesnego magazynu z pełną infrastrukturą instalacyjną." },
  { title: "Modernizacja instalacji wodno-kanalizacyjnej", slug: "modernizacja-instalacji-wodnokanalizacyjnej", description: "Modernizacja systemów wodno-kanalizacyjnych w istniejącym obiekcie." },
];

export default function DostawcyPage() {
  return (
    <>
      <PageHero title="Dostawcy" breadcrumbs={[{ label: "Dostawcy" }]} />
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <AnimatedSection key={project.slug} delay={i * 0.1}>
                <Link
                  href={`/dostawcy/${project.slug}`}
                  className="group block rounded-2xl bg-white border border-gray-100 p-8 hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <h2 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-mint-500 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                  <span className="flex items-center gap-2 text-mint-500 text-sm font-medium group-hover:gap-3 transition-all">
                    Szczegóły <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
