"use client";

import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  /** Use "topbar" for always-dark TopBar, "navbar" for light/dark-aware Navbar */
  variant?: "topbar" | "navbar";
}

export function ThemeToggle({ variant = "topbar" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const colorClass =
    variant === "topbar"
      ? "text-white/70 hover:text-mint-400"
      : "text-text-secondary hover:text-mint-500";

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${colorClass}`}
      aria-label={theme === "dark" ? "Włącz tryb jasny" : "Włącz tryb ciemny"}
      title={theme === "dark" ? "Tryb jasny" : "Tryb ciemny"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            <Sun className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            <Moon className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
