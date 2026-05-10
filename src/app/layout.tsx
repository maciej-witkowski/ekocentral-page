import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EKOCENTRAL | Hurtownia instalacyjna - wsparcie dla fachowców",
    template: "EKOCENTRAL | %s",
  },
  description:
    "Oferujemy najwyższej jakości produkty do systemów grzewczych i sanitarnych. Dzięki konkurencyjnym cenom, szybkiej dostawie i wsparciu technicznemu, jesteśmy zaufanym partnerem w branży instalacyjnej.",
  keywords: [
    "hurtownia instalacyjna",
    "technika grzewcza",
    "technika sanitarna",
    "technika gazowa",
    "energia odnawialna",
    "Bydgoszcz",
    "EKOCENTRAL",
    "instalacje",
    "kotły",
    "pompy ciepła",
  ],
  authors: [{ name: "EKOCENTRAL" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "EKOCENTRAL",
    title: "EKOCENTRAL | Hurtownia instalacyjna - wsparcie dla fachowców",
    description:
      "Oferujemy najwyższej jakości produkty do systemów grzewczych i sanitarnych.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <ScrollToTop />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
