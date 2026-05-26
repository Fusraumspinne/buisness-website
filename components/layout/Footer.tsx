"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Footer() {
  return (
    <footer className="bg-background text-foreground pt-20 pb-10 border-t border-border transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease }}
          className="md:col-span-2"
        >
          <Link href="/" className="font-bold tracking-tighter text-3xl flex items-center gap-3 mb-6 overflow-hidden group">
            <motion.span 
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2, ease }}
               className="w-5 h-5 bg-foreground block rounded-sm group-hover:rotate-180 transition-transform duration-700" 
            />
            Marvin
          </Link>
          <p className="text-foreground/60 max-w-sm font-light leading-relaxed">
            Ein fokussiertes Software-Studio für herausragendes Digital Design und exzellentes Engineering.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-10%" }}
           transition={{ duration: 1, delay: 0.1, ease }}
        >
          <h4 className="font-mono text-sm text-accent mb-6 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-px bg-accent block" /> Social
          </h4>
          <ul className="space-y-4 font-light text-foreground/80">
            {["LinkedIn", "GitHub", "X (Twitter)"].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-accent flex items-center gap-2 group transition-colors">
                  {item} 
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-10%" }}
           transition={{ duration: 1, delay: 0.2, ease }}
        >
          <h4 className="font-mono text-sm text-accent mb-6 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-px bg-accent block" /> Index
          </h4>
          <ul className="space-y-4 font-light text-foreground/80">
            {["about", "services", "projects", "contact"].map((item, i) => (
              <li key={i}>
                <Link href={`#${item}`} className="hover:text-accent transition-colors capitalize">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>

      <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 1, delay: 0.4, ease }}
         className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-foreground/40 text-sm border-t border-border pt-8"
      >
        <p>© {new Date().getFullYear()} Marvin Software Solution. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
        </div>
      </motion.div>
    </footer>
  );
}
