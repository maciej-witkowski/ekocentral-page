"use client";

import { useState, useEffect } from "react";
import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
        }`}
      >
        <TopBar />
      </div>
      <Navbar />
    </header>
  );
}
