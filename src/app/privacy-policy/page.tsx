import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Informacje o przetwarzaniu danych osobowych w serwisie EKOCENTRAL.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Polityka prywatności" breadcrumbs={[{ label: "Polityka prywatności" }]} />

      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="prose prose-gray max-w-none prose-headings:font-bold prose-a:no-underline hover:prose-a:underline">
              <p className="text-text-secondary leading-relaxed mb-8">
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych
                przekazanych przez Użytkowników w związku z korzystaniem z serwisu internetowego pod
                adresem <strong>ekocentral.pl</strong>.
              </p>

              <h2>1. Administrator Danych Osobowych</h2>
              <p>Administratorem Twoich danych osobowych jest:</p>
              <p>
                <strong>Ekocentral Piotr Fiedorek Grupa SBS</strong><br />
                ul. Grunwaldzka 227, 85-451 Bydgoszcz<br />
                NIP: 9671221980, REGON: 523384085
              </p>
              <p>Możesz się z nami skontaktować:</p>
              <ul>
                <li><strong>Mailowo:</strong> <a href="mailto:biuro@ekocentral.pl">biuro@ekocentral.pl</a></li>
                <li><strong>Telefonicznie:</strong> <a href="tel:+48667687223">667 687 223</a></li>
                <li><strong>Pisemnie:</strong> na adres siedziby wskazany powyżej.</li>
              </ul>

              <h2>2. Cele i podstawy prawne przetwarzania danych</h2>
              <p>Twoje dane osobowe są przetwarzane zgodnie z RODO (Ogólne Rozporządzenie o Ochronie Danych) w następujących celach:</p>
              <ol>
                <li>
                  <strong>Obsługa zapytań i komunikacja</strong> – przetwarzamy dane (np. imię, e-mail, nr telefonu)
                  w celu udzielenia odpowiedzi na Twoje pytania przesłane drogą mailową lub telefoniczną.
                  Podstawa: nasz prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO).
                </li>
                <li>
                  <strong>Realizacja usług i współpraca handlowa</strong> – w celu przygotowania oferty,
                  obsługi partnerów w ramach programu INTEGRIS+ lub realizacji zamówień.
                  Podstawa: niezbędność do wykonania umowy lub działania przed jej zawarciem (art. 6 ust. 1 lit. b RODO).
                </li>
                <li>
                  <strong>Analityka i statystyka</strong> – w celu optymalizacji działania strony i badania
                  preferencji użytkowników. Podstawa: nasz prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO).
                </li>
                <li>
                  <strong>Bezpieczeństwo</strong> – w celu zapewnienia stabilności i bezpieczeństwa serwisu
                  (logi serwera). Podstawa: nasz prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO).
                </li>
              </ol>

              <h2>3. Okres przechowywania danych</h2>
              <p>Twoje dane będą przechowywane przez okres:</p>
              <ul>
                <li>Niezbędny do udzielenia odpowiedzi na zapytanie.</li>
                <li>Trwania współpracy handlowej oraz po jej zakończeniu przez okres wymagany przepisami prawa (np. podatkowego – 5 lat).</li>
                <li>Do czasu wniesienia przez Ciebie skutecznego sprzeciwu (w przypadku danych przetwarzanych na podstawie uzasadnionego interesu).</li>
              </ul>

              <h2>4. Odbiorcy danych</h2>
              <p>Twoje dane osobowe mogą być przekazywane podmiotom zewnętrznym, które wspierają nas w prowadzeniu działalności:</p>
              <ul>
                <li><strong>Dostawcy usług poczty elektronicznej.</strong></li>
                <li><strong>Biura rachunkowe i firmy kurierskie:</strong> w przypadku nawiązania stałej współpracy handlowej.</li>
              </ul>

              <h2>5. Twoje prawa</h2>
              <p>W związku z przetwarzaniem danych osobowych przysługuje Ci prawo do:</p>
              <ul>
                <li>Dostępu do swoich danych oraz otrzymania ich kopii.</li>
                <li>Sprostowania (poprawienia) danych.</li>
                <li>Usunięcia danych („prawo do bycia zapomnianym").</li>
                <li>Ograniczenia przetwarzania danych.</li>
                <li>Wniesienia sprzeciwu wobec przetwarzania.</li>
                <li>Przenoszenia danych.</li>
                <li>Wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych (UODO).</li>
              </ul>

              <h2>6. Pliki Cookies (Ciasteczka)</h2>
              <ol>
                <li>Strona korzysta z plików cookies, czyli małych plików tekstowych zapisywanych na Twoim urządzeniu.</li>
                <li>Używamy cookies w celu zapewnienia poprawnego działania strony (cookies techniczne) oraz w celach analitycznych.</li>
                <li>Możesz w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce. Wyłączenie cookies może jednak wpłynąć na funkcjonalność niektórych elementów strony.</li>
              </ol>

              <h2>7. Logi serwera</h2>
              <p>
                Informacje o niektórych zachowaniach użytkowników podlegają logowaniu w warstwie serwerowej
                (np. adres IP, czas zapytania, typ przeglądarki). Dane te są wykorzystywane wyłącznie w celach
                administracyjnych i technicznych i nie służą do identyfikacji konkretnych osób.
              </p>

              <h2>8. Zmiany w polityce prywatności</h2>
              <p>
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce w przypadku rozwoju
                technologii, zmian w prawie lub rozwoju funkcjonalności serwisu. Data ostatniej aktualizacji
                znajduje się poniżej.
              </p>

              <hr />
              <p className="text-sm text-text-muted">
                <strong>Data aktualizacji:</strong> 11 maja 2026
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
