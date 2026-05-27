"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const benefits = [
  {
    num: "01",
    title: "Conversion & Wachstum",
    text: "Eine performante Landing Page ist kein einfaches Aushängeschild, sondern ein digitaler Vertriebler. Optimiertes UI/UX-Design und psychologische Nutzerführung generieren messbar mehr Kundenanfragen."
  },
  {
    num: "02",
    title: "Maximale Effizienz",
    text: "Komplexe manuelle Prozesse kosten Zeit und Geld. Maßgeschneiderte Web-Apps automatisieren Ihre Workflows, vernetzen Datensätze zentral und minimieren den administrativen Aufwand drastisch."
  }
];

export function BenefitsSection() {
  return (
    <section className="py-32 bg-background border-t border-border overflow-hidden relative">
      
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] select-none pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-border/50 pb-8"
        >
          <div>
            <p className="uppercase tracking-widest text-sm font-semibold mb-4 text-accent">Business Value</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Impact.<br />Kein Zufall.</h2>
          </div>
          <p className="max-w-md text-lg font-light text-foreground/60 md:text-right mt-6 md:mt-0">
            Wir bauen keine Software um der Software willen. Das Ziel ist immer ein messbarer Mehrwert für Ihr Business und eine makellose Experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease }}
              whileHover="hover"
              className="bg-background p-8 md:p-14 group relative overflow-hidden flex flex-col justify-between min-h-[320px] transition-colors duration-700"
            >
              <div className="absolute inset-0 bg-surface/80 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
              
              <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-20 transition-opacity duration-1000 delay-100 z-0 pointer-events-none" />

              <div className="relative z-10">
                <span className="font-mono text-sm text-accent tracking-widest mb-8 block font-medium">/{benefit.num}</span>
                <motion.h3 
                  variants={{ hover: { x: 5 } }}
                  transition={{ duration: 0.5, ease }}
                  className="text-3xl font-semibold mb-6 flex items-center gap-4 group-hover:text-accent transition-colors duration-500"
                >
                  {benefit.title}
                </motion.h3>
                <p className="text-foreground/60 text-lg font-light leading-relaxed max-w-md group-hover:text-foreground/80 transition-colors duration-500">
                  {benefit.text}
                </p>
              </div>

              <motion.div 
                 variants={{ hover: { x: 10, opacity: 1, scale: 1.1 } }}
                 transition={{ duration: 0.7, ease }}
                 className="relative z-10 mt-12 opacity-0 text-accent flex justify-end"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center">
                   <MoveRight strokeWidth={1.5} size={28} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
