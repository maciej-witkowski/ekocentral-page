import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import services from "@/data/services.json";

type ServiceSlug = "technika-grzewcza" | "technika-sanitarna" | "technika-gazowa" | "energia-odnawialna";

interface ServicePageProps {
  slug: ServiceSlug;
}

function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function generateServicePage(slug: ServiceSlug) {
  const service = getService(slug);
  if (!service) return notFound;

  const metadata: Metadata = {
    title: service.seo.title.replace("EKOCENTRAL | ", ""),
    description: service.seo.description,
  };

  function ServicePage() {
    const svc = getService(slug)!;
    return (
      <>
        <PageHero
          title={svc.title}
          breadcrumbs={[
            { label: "Oferta", path: "/oferta" },
            { label: svc.title },
          ]}
        />

        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: svc.content }}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <Link
                  href="/oferta"
                  className="text-mint-500 hover:text-mint-400 font-medium transition-colors"
                >
                  ← Powrót do oferty
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center px-6 py-3 bg-mint-500 text-navy-900 font-semibold rounded-lg hover:bg-mint-400 transition-all"
                >
                  Skontaktuj się z nami
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </>
    );
  }

  return { metadata, ServicePage };
}
