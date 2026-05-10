"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-navy-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/building-drone.jpg"
          alt="EKOCENTRAL hurtownia instalacyjna"
          fill
          className="object-cover object-[65%_50%] md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-mint-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-mint-400/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-mint-500/15 border border-mint-500/30 rounded-full text-mint-400 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-mint-500 rounded-full animate-pulse" />
              Hurtownia instalacyjna
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-mint-400 text-sm md:text-base uppercase tracking-[0.25em] font-semibold mb-5"
          >
            Zaufaj doświadczeniu
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            EKOCENTRAL –{" "}
            <span className="text-mint-500">Specjalista</span> w dziedzinie
            instalacji
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl"
          >
            EKOCENTRAL to hurtownia instalacyjna, która dostarcza najwyższej
            jakości produkty związane z systemami grzewczymi i sanitarnymi. Nasza
            oferta skierowana jest do fachowców, którzy cenią sobie efektywność i
            najwyższą jakość produktów.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/o-nas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-mint-500 text-navy-900 font-semibold rounded-xl hover:bg-mint-400 transition-all hover:shadow-xl hover:shadow-mint-500/25 group"
            >
              Czytaj więcej
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              Napisz do nas
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
