"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import navigation from "@/data/navigation.json";

interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navItems: NavItem[] = navigation;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-navy-900/5"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="EKOCENTRAL - Hurtownia instalacyjna"
            width={200}
            height={56}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="relative group"
              onMouseEnter={() =>
                item.children && setOpenDropdown(item.path)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.path}
                className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-mint-500 transition-colors rounded-lg hover:bg-mint-200/30"
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {/* Dropdown */}
              {item.children && openDropdown === item.path && (
                <div className="absolute top-full left-0 pt-2 min-w-[280px]">
                  <div className="bg-white rounded-xl shadow-xl shadow-navy-900/10 border border-gray-100 overflow-hidden py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        className="block px-5 py-2.5 text-sm text-gray-600 hover:text-mint-500 hover:bg-mint-200/20 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/kontakt"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-mint-500 text-navy-900 font-semibold text-sm rounded-lg hover:bg-mint-400 transition-all hover:shadow-lg hover:shadow-mint-500/25"
          >
            Kontakt
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-navy-900"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-white lg:hidden overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => !item.children && setMobileOpen(false)}
                  className="flex items-center justify-between py-3 text-gray-700 font-medium border-b border-gray-100"
                >
                  {item.label}
                  {item.children && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdown(
                          openDropdown === item.path ? null : item.path
                        );
                      }}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.path ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </Link>
                {item.children && openDropdown === item.path && (
                  <div className="pl-4 space-y-1 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        href={child.path}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-gray-500 hover:text-mint-500 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-6 py-3 bg-mint-500 text-navy-900 font-semibold rounded-lg"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
