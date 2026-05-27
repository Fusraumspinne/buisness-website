"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Code2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-foreground/5 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <div className="flex items-center gap-2 text-xl font-black tracking-tight">
          <Code2 className="text-blue-500" />
          <span>Marvin<span className="text-blue-500">.</span></span>
        </div>

        <nav className="hidden md:flex items-center bg-foreground/5 backdrop-blur-md rounded-full px-8 py-3 gap-8 text-sm font-semibold border border-foreground/10">
          <a href="#about" className="hover:text-blue-500 transition-colors">Über uns</a>
          <a href="#services" className="hover:text-blue-500 transition-colors">Service</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projekte</a>
          <a href="#process" className="hover:text-blue-500 transition-colors">Prozess</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a href="#contact" className="px-6 py-2.5 bg-foreground text-background font-bold rounded-full hover:scale-105 transition-transform text-sm">
            Let&apos;s Talk
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background border-b border-foreground/10 py-6 px-6 flex flex-col gap-6 font-bold text-xl md:hidden"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Über uns</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projekte</a>
            <a href="#contact" className="text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>Kontakt</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
