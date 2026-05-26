"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between uppercase text-sm tracking-widest font-medium">
        <Link href="/" className="font-bold tracking-tighter normal-case text-xl flex items-center gap-2">
          <span className="w-4 h-4 bg-foreground block rounded-sm"></span>
          Marvin
        </Link>
        
        <div className="hidden md:flex gap-10">
          <Link href="#services" className="hover:text-accent transition-colors">Digital</Link>
          <Link href="#process" className="hover:text-accent transition-colors">Process</Link>
          <Link href="#projects" className="hover:text-accent transition-colors">Works</Link>
          <Link href="#about" className="hover:text-accent transition-colors">Studio</Link>
        </div>

        <div className="flex items-center gap-6">
          <ThemeToggle />
          <a href="#contact" className="hidden md:block py-2 px-4 border border-foreground hover:bg-foreground hover:text-background transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
