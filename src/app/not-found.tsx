import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-mint-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-mint-400/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />

      <div className="relative text-center px-6">
        <h1 className="text-8xl md:text-9xl font-bold text-mint-500 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Strona nie znaleziona
        </h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          Przykro nam, ale nie ma takiej strony. Sprawdź podany adres lub wróć
          do strony głównej.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-3.5 bg-mint-500 text-navy-900 font-semibold rounded-lg hover:bg-mint-400 transition-all hover:shadow-lg hover:shadow-mint-500/25"
        >
          Strona główna
        </Link>
      </div>
    </section>
  );
}
