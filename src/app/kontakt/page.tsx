import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Phone, Mail, MapPin, Clock, Users, ShoppingCart, Calculator } from "lucide-react";
import siteData from "@/data/site.json";
import { formatPhone } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kontakt z hurtownią instalacyjną",
  description:
    "Skontaktuj się z nami, aby uzyskać więcej informacji o produktach, wsparciu technicznym i cenach. Sprawdź naszą ofertę i skontaktuj się z nami już dziś.",
};

const departmentIcons: Record<string, React.ReactNode> = {
  "Dział sprzedaży": <Users className="w-4 h-4" />,
  "Zakupy": <ShoppingCart className="w-4 h-4" />,
  "Księgowość": <Calculator className="w-4 h-4" />,
};

export default function KontaktPage() {
  const { contact, hours } = siteData;

  return (
    <>
      <PageHero title="Kontakt" breadcrumbs={[{ label: "Kontakt" }]} />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Skontaktuj się z nami
              </h2>

              <div className="space-y-6">
                {/* Phone departments */}
                <div className="flex items-start gap-4 p-6 rounded-xl bg-surface hover:bg-mint-200/20 dark:hover:bg-mint-500/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-mint-500/15 flex items-center justify-center text-mint-500 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-4">Telefon</h3>
                    <div className="space-y-4">
                      {contact.departments.map((dept) => (
                        <div key={dept.name}>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-mint-500">
                              {departmentIcons[dept.name]}
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                              {dept.name}
                            </span>
                          </div>
                          <div className="space-y-1 pl-6">
                            {dept.contacts.map((c) => (
                              <a
                                key={c.phone}
                                href={`tel:${formatPhone(c.phone)}`}
                                className="flex items-center justify-between text-sm text-text-secondary hover:text-mint-500 transition-colors py-0.5"
                              >
                                <span className="font-medium text-foreground/80">{c.person}</span>
                                <span>{c.phone}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 rounded-xl bg-surface hover:bg-mint-200/20 dark:hover:bg-mint-500/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-mint-500/15 flex items-center justify-center text-mint-500 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    {contact.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block text-text-secondary hover:text-mint-500 transition-colors"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 rounded-xl bg-surface hover:bg-mint-200/20 dark:hover:bg-mint-500/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-mint-500/15 flex items-center justify-center text-mint-500 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                    <p className="text-text-secondary">{contact.address.full}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 rounded-xl bg-surface hover:bg-mint-200/20 dark:hover:bg-mint-500/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-mint-500/15 flex items-center justify-center text-mint-500 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Godziny otwarcia</h3>
                    <p className="text-text-secondary">{hours.weekdays.label}: {hours.weekdays.open} - {hours.weekdays.close}</p>
                    <p className="text-text-secondary">{hours.saturday.label}: {hours.saturday.open} - {hours.saturday.close}</p>
                    <p className="text-text-secondary">{hours.sunday.label}: {hours.sunday.status}</p>
                  </div>
                </div>

                {/* Company name + NIP */}
                <div className="p-6 rounded-xl bg-surface">
                  <p className="text-sm font-medium text-foreground mb-1">{siteData.company.fullName}</p>
                  <p className="text-sm text-text-muted">NIP: {siteData.company.nip}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-navy-900 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Napisz do nas
                </h2>
                <p className="text-white/60 mb-8">
                  Wypełnij formularz, a skontaktujemy się z Tobą najszybciej jak to możliwe.
                </p>

                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-white/80 text-sm mb-2">Imię i nazwisko</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-mint-500 transition-colors"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 text-sm mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-mint-500 transition-colors"
                      placeholder="jan@firma.pl"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white/80 text-sm mb-2">Telefon</label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-mint-500 transition-colors"
                      placeholder="600 000 000"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white/80 text-sm mb-2">Wiadomość</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-mint-500 transition-colors resize-none"
                      placeholder="Twoja wiadomość..."
                    />
                  </div>
                  <p className="text-white/40 text-xs">
                    Wysyłając formularz, akceptujesz naszą{" "}
                    <a href="/privacy-policy" className="text-mint-400 underline">
                      politykę prywatności
                    </a>.
                  </p>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-mint-500 text-navy-900 font-semibold rounded-lg hover:bg-mint-400 transition-all hover:shadow-lg hover:shadow-mint-500/25"
                  >
                    Wyślij wiadomość
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>

          {/* Map */}
          <AnimatedSection delay={0.3} className="mt-16">
            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2400.5!2d17.9903!3d53.1235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47030738e9e7e8e7%3A0x9c0d41e0eae6e8d2!2sGrunwaldzka%20227%2C%2085-451%20Bydgoszcz%2C%20Poland!5e0!3m2!1spl!2spl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja EKOCENTRAL - ul. Grunwaldzka 227, Bydgoszcz"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
