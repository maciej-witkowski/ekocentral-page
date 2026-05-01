"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ekocentral-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("ekocentral-cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-navy-900 rounded-2xl shadow-2xl shadow-navy-900/50 p-6 md:p-8 border border-white/10">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg mb-2">
              Zarządzaj zgodami na pliki cookie
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Aby zapewnić najlepsze możliwe doświadczenie, używamy technologii,
              takich jak pliki cookie, do przechowywania i/lub dostępu do
              informacji o Twoim urządzeniu. Wyrażenie zgody na te technologie
              pozwoli nam przetwarzać dane takie jak zachowanie podczas
              przeglądania czy unikatowe identyfikatory na tej stronie
              internetowej.{" "}
              <Link
                href="/privacy-policy"
                className="text-mint-400 hover:text-mint-300 underline"
              >
                Polityka prywatności
              </Link>
            </p>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-white/40 hover:text-white p-1"
            aria-label="Zamknij"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={accept}
            className="px-6 py-2.5 bg-mint-500 text-navy-900 font-semibold text-sm rounded-lg hover:bg-mint-400 transition-all"
          >
            Zaakceptuj wszystkie
          </button>
          <button
            onClick={accept}
            className="px-6 py-2.5 bg-white/10 text-white font-medium text-sm rounded-lg hover:bg-white/20 transition-all"
          >
            Tylko niezbędne
          </button>
        </div>
      </div>
    </div>
  );
}
