"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const ServiceCard = ({ 
  num, title, tagline, timeline, budget, features, delay 
}: { 
  num: string, title: string, tagline: string, timeline: string, budget: string, features: string[], delay: number 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease }}
      whileHover={{ y: -10 }}
      className="p-8 md:p-12 bg-surface border border-border flex flex-col h-full group transition-transform duration-500"
    >
      <div className="flex justify-between items-start mb-12">
        <span className="font-mono text-sm text-accent uppercase tracking-widest">{num} //</span>
        <div className="text-right font-mono text-xs text-foreground/50 space-y-1">
          <p>Timeline: {timeline}</p>
          <p>Investment: {budget}</p>
        </div>
      </div>
      
      <h3 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight flex items-center gap-4">
        {title} 
        <ArrowUpRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 text-accent" />
      </h3>
      <p className="text-foreground/60 text-lg font-light mb-12">{tagline}</p>
      
      <div className="mt-auto pt-8 border-t border-border">
        <p className="text-xs uppercase tracking-widest font-semibold text-foreground/40 mb-6">Enthaltene Architektur</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
          {features.map((feature, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3 + (i * 0.05), ease }}
              className="flex items-center gap-3 text-sm font-light text-foreground"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-border pb-8"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Zwei<br />Disziplinen.</h2>
          </div>
          <p className="max-w-md text-lg font-light text-foreground/60 md:text-right mt-6 md:mt-0">
            Klarer Fokus. Vollständige Transparenz. Jedes Setup wird exklusiv und maßgeschneidert entwickelt. Keine fertigen Templates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          <ServiceCard 
            num="01"
            title="Corporate"
            tagline="Digitale Aushängeschilder, die Markenwert aufbauen. Rasend schnell, SEO-optimiert und hochgradig interaktiv."
            timeline="ab 3 Wochen"
            budget="ab 3.500 €"
            features={[
              "Next.js Static Generation",
              "Framer Motion Data-Flow",
              "Multi-Language (i18n)",
              "Headless CMS (Sanity)"
            ]}
            delay={0.1}
          />

          <ServiceCard 
            num="02"
            title="SaaS & Web App"
            tagline="Komplexe SaaS-Lösungen, Dashboards und Plattformen. Fokus auf Datensicherheit, Skalierung und Logik."
            timeline="ab 8 Wochen"
            budget="ab 8.500 €"
            features={[
              "Next.js App Router (SSR)",
              "PostgreSQL & Prisma",
              "Role-Based Auth",
              "Stripe Payment"
            ]}
            delay={0.2}
          />

        </div>
      </div>
    </section>
  );
}
