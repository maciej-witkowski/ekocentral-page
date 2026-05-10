import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import siteData from "@/data/site.json";
import { formatPhone } from "@/lib/utils";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function Footer() {
  const { contact, hours, social, company } = siteData;

  return (
    <footer className="bg-navy-900 text-white">
      {/* Gradient line */}
      <div className="h-1 bg-gradient-to-r from-mint-500 via-mint-400 to-mint-500" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold">
                <span className="text-white">eko</span>
                <span className="text-mint-500">central</span>
              </h3>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Nasza hurtownia instalacyjna dostarcza wysokiej jakości produkty
              oraz usługi związane z systemami grzewczymi i sanitarnymi,
              zapewniając konkurencyjne ceny oraz wsparcie techniczne dla
              fachowców w branży.
            </p>
            <div className="flex gap-3">
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-mint-500 hover:text-navy-900 transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-mint-500 hover:text-navy-900 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Discover */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Odkryj nas</h4>
            <ul className="space-y-3">
              {[
                { label: "O nas", path: "/o-nas" },
                { label: "Oferta", path: "/oferta" },
                { label: "INTEGRIS+", path: "/integris" },
                { label: "Kontakt", path: "/kontakt" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-white/60 hover:text-mint-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Usługi</h4>
            <ul className="space-y-3">
              {[
                { label: "Technika grzewcza", path: "/oferta/technika-grzewcza" },
                { label: "Technika sanitarna", path: "/oferta/technika-sanitarna" },
                { label: "Technika gazowa", path: "/oferta/technika-gazowa" },
                { label: "Energia odnawialna", path: "/oferta/energia-odnawialna" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-white/60 hover:text-mint-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${formatPhone(contact.topBarPhone)}`}
                  className="flex items-start gap-3 text-white/60 hover:text-mint-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-mint-500 flex-shrink-0" />
                  <span>{contact.topBarPhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.emails[0]}`}
                  className="flex items-start gap-3 text-white/60 hover:text-mint-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-mint-500 flex-shrink-0" />
                  <span>{contact.emails[0]}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-mint-500 flex-shrink-0" />
                <span>{contact.address.full}</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4 mt-0.5 text-mint-500 flex-shrink-0" />
                <div>
                  <p>{hours.weekdays.label}: {hours.weekdays.open} - {hours.weekdays.close}</p>
                  <p>{hours.saturday.label}: {hours.saturday.open} - {hours.saturday.close}</p>
                  <p>{hours.sunday.label}: {hours.sunday.status}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} {company.name}. Wszelkie prawa zastrzeżone.
          </p>
          <Link
            href="/privacy-policy"
            className="text-white/40 hover:text-mint-400 transition-colors text-sm"
          >
            Polityka prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
}
