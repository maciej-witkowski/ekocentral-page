import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export function PageHero({ title, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-navy-900 py-12 md:py-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-mint-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-mint-400 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {breadcrumbs && (
          <nav className="flex items-center justify-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-mint-400 transition-colors">
              Strona główna
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5" />
                {crumb.path ? (
                  <Link
                    href={crumb.path}
                    className="hover:text-mint-400 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-mint-400">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
