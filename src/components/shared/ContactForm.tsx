"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Wypełnij wszystkie wymagane pola.");
      return;
    }

    try {
      const res = await fetch("/send-email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Wystąpił błąd. Spróbuj ponownie.");
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Nie udało się połączyć z serwerem. Spróbuj ponownie lub skontaktuj się mailowo."
      );
    }
  };

  return (
    <div className="bg-navy-900 rounded-2xl p-8 md:p-10">
      <h2 className="text-2xl font-bold text-white mb-2">Napisz do nas</h2>
      <p className="text-white/60 mb-8">
        Wypełnij formularz, a skontaktujemy się z Tobą najszybciej jak to
        możliwe.
      </p>

      {status === "success" ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-mint-500/20 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-mint-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Wiadomość wysłana!
          </h3>
          <p className="text-white/60">
            Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-mint-400 hover:text-mint-300 text-sm font-medium transition-colors"
          >
            Wyślij kolejną wiadomość
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-white/80 text-sm mb-2">
              Imię i nazwisko *
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-mint-500 transition-colors"
              placeholder="Jan Kowalski"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-white/80 text-sm mb-2"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-mint-500 transition-colors"
              placeholder="jan@firma.pl"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-white/80 text-sm mb-2"
            >
              Telefon
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-mint-500 transition-colors"
              placeholder="600 000 000"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-white/80 text-sm mb-2"
            >
              Wiadomość *
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:border-mint-500 transition-colors resize-none"
              placeholder="Twoja wiadomość..."
              required
            />
          </div>

          {status === "error" && (
            <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 text-sm">
              {errorMessage}
            </div>
          )}

          <p className="text-white/40 text-xs">
            Wysyłając formularz, akceptujesz naszą{" "}
            <Link
              href="/privacy-policy"
              className="text-mint-400 underline hover:text-mint-300 transition-colors"
            >
              politykę prywatności
            </Link>
            .
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full px-6 py-3.5 bg-mint-500 text-navy-900 font-semibold rounded-lg hover:bg-mint-400 transition-all hover:shadow-lg hover:shadow-mint-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Wysyłanie...
              </span>
            ) : (
              "Wyślij wiadomość"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
