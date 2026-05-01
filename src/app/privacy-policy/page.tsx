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

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="prose max-w-none">
              <h2>1. Informacje ogólne</h2>
              <p>Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: ekocentral.pl</p>
              <p>Operatorem serwisu oraz Administratorem danych osobowych jest: EKOCENTRAL, ul. Grunwaldzka 227, 85-451 Bydgoszcz.</p>
              <p>Adres kontaktowy poczty elektronicznej operatora: biuro@ekocentral.pl</p>
              <p>Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.</p>
              <p>Serwis wykorzystuje dane osobowe w następujących celach:</p>
              <ul>
                <li>Prowadzenie newslettera</li>
                <li>Prowadzenie systemu komentarzy</li>
                <li>Obsługa zapytań przez formularz</li>
                <li>Realizacja zamówionych usług</li>
                <li>Prezentacja oferty lub informacji</li>
              </ul>
              <p>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:</p>
              <ul>
                <li>Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.</li>
                <li>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. &bdquo;ciasteczka&rdquo;).</li>
              </ul>

              <h2>2. Wybrane metody ochrony danych stosowane przez Operatora</h2>
              <p>Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.</p>
              <p>Operator okresowo zmienia swoje hasła administracyjne.</p>
              <p>Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych.</p>

              <h2>3. Hosting</h2>
              <p>Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: cyberFolks.pl</p>
              <p>Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera. Zapisowi mogą podlegać:</p>
              <ul>
                <li>zasoby określone identyfikatorem URL (adresy żądanych zasobów – stron, plików),</li>
                <li>czas nadejścia zapytania,</li>
                <li>czas wysłania odpowiedzi,</li>
                <li>nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP,</li>
                <li>informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,</li>
                <li>adres URL strony poprzednio odwiedzanej przez użytkownika (referer link),</li>
                <li>informacje o przeglądarce użytkownika,</li>
                <li>informacje o adresie IP.</li>
              </ul>

              <h2>4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h2>
              <p>W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze.</p>
              <p>Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami. W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.</p>
              <p>Przysługuje Ci prawo żądania od Administratora:</p>
              <ul>
                <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                <li>ich sprostowania,</li>
                <li>usunięcia,</li>
                <li>ograniczenia przetwarzania,</li>
                <li>oraz przenoszenia danych.</li>
              </ul>
              <p>Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</p>
              <p>Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</p>
              <p>Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.</p>

              <h2>5. Informacje w formularzach</h2>
              <p>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.</p>
              <p>Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego.</p>

              <h2>6. Logi Administratora</h2>
              <p>Informacje o zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.</p>

              <h2>7. Istotne techniki marketingowe</h2>
              <p>Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje.</p>

              <h2>8. Informacja o plikach cookies</h2>
              <p>Serwis korzysta z plików cookies.</p>
              <p>Pliki cookies (tzw. &bdquo;ciasteczka&rdquo;) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu.</p>
              <p>Pliki cookies wykorzystywane są w następujących celach:</p>
              <ul>
                <li>utrzymanie sesji użytkownika Serwisu (po zalogowaniu),</li>
                <li>realizacji celów określonych powyżej w części &bdquo;Istotne techniki marketingowe&rdquo;.</li>
              </ul>

              <h2>9. Zarządzanie plikami cookies</h2>
              <p>Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
