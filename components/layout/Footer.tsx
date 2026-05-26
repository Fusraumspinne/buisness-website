"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background text-foreground pt-20 pb-10 border-t border-border transition-colors duration-500">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
        
        <div className="md:col-span-2">
          <Link href="/" className="font-bold tracking-tighter text-3xl flex items-center gap-2 mb-6">
            <span className="w-5 h-5 bg-foreground block rounded-sm"></span>
            Marvin
          </Link>
          <p className="text-foreground/60 max-w-sm font-light">
            Ein fokussiertes Software-Studio für herausragendes Digital Design und exzellentes Engineering.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-sm text-accent mb-6 uppercase tracking-widest">Social</h4>
          <ul className="space-y-4 font-light text-foreground/80">
            <li><a href="#" className="hover:text-accent flex items-center gap-1 group transition-colors">LinkedIn <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></a></li>
            <li><a href="#" className="hover:text-accent flex items-center gap-1 group transition-colors">GitHub <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></a></li>
            <li><a href="#" className="hover:text-accent flex items-center gap-1 group transition-colors">X (Twitter) <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-sm text-accent mb-6 uppercase tracking-widest">Index</h4>
          <ul className="space-y-4 font-light text-foreground/80">
            <li><Link href="#about" className="hover:text-accent transition-colors">Studio</Link></li>
            <li><Link href="#services" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link href="#projects" className="hover:text-accent transition-colors">Works</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-foreground/40 text-sm border-t border-border pt-8">
        <p>© {new Date().getFullYear()} Marvin Software Solution. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
