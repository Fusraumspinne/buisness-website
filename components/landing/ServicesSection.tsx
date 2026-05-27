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
      whileHover={{ y: -8, scale: 1.01 }}
      className="p-8 md:p-12 relative bg-surface border border-border flex flex-col h-full group transition-all duration-700 hover:shadow-2xl hover:shadow-foreground/5 hover:border-foreground/20 overflow-hidden"
    >
      {/* Subtle overlay on hover */}
      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-700 pointer-events-none z-0" />

      <div className="relative z-10 flex justify-between items-start mb-12">
        <span className="font-mono text-sm text-accent uppercase tracking-widest">{num} //</span>
        <div className="text-right font-mono text-xs text-foreground/50 space-y-1">
          <p>Timeline: {timeline}</p>
          <p>Investment: {budget}</p>
        </div>
      </div>
      
      <h3 className="relative z-10 text-4xl md:text-5xl font-semibold mb-4 tracking-tight flex items-center gap-4">
        {title} 
        <motion.div
           initial={{ opacity: 0, x: -10, y: 10 }}
           whileHover={{ opacity: 1, x: 0, y: 0 }}
           className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 text-accent"
        >
          <ArrowUpRight strokeWidth={2.5} />
        </motion.div>
      </h3>
      <p className="relative z-10 text-foreground/60 text-lg font-light mb-12 group-hover:text-foreground/80 transition-colors duration-500">{tagline}</p>
      
      <div className="relative z-10 mt-auto pt-8 border-t border-border group-hover:border-foreground/20 transition-colors duration-500">
        <p className="text-xs uppercase tracking-widest font-semibold text-foreground/40 mb-6">Enthaltene Architektur</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
          {features.map((feature, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3 + (i * 0.05), ease }}
              className="flex items-center gap-3 text-sm font-light text-foreground group-hover:translate-x-1 transition-transform duration-500"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-500" />
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
    <section id="services" className="py-32 bg-background border-t border-border overflow-hidden relative">
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 select-none pointer-events-none" />

      {/* Fade overlay so the grid isn't too blocky at the edges */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
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
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Zwei<br />Disziplinen.</h2>
          </div>
          <p className="max-w-md text-lg font-light text-foreground/60 md:text-right mt-6 md:mt-0">
            Klarer Fokus. Vollständige Transparenz. Jedes Setup wird exklusiv und maßgeschneidert entwickelt. Keine fertigen Templates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          <ServiceCard 
            num="01"
            title="Landing Pages & Websites"
            tagline="Digitale Aushängeschilder, die Markenwert aufbauen. Rasend schnell, SEO-optimiert und hochgradig interaktiv."
            timeline="ab 3 Tage"
            budget="ab 150 €"
            features={[
              "Custom landing & portfolio sites",
              "Responsive clean UI/UX",
              "Smooth animations & interactions",
              "Multi-Language support",
              "Content management integration",
              "Contact forms & lead capture",
              "Performance-Optimierung",
              "Deployment & hosting setup"
            ]}
            delay={0.1}
          />

          <ServiceCard 
            num="02"
            title="SaaS & Web App"
            tagline="Komplexe SaaS-Lösungen, Dashboards und Plattformen. Fokus auf Datensicherheit, Skalierung und Logik."
            timeline="ab 2 Wochen"
            budget="ab 500 €"
            features={[
              "Fully custom web applications",
              "Complex database structures",
              "Secure Role-Based Auth",
              "Third-party API integration",
              "Real-time features (WebSockets)",
              "Analytics dashboards",
              "DSGVO-compliant data handling",
              "Scalable serverless deployment"
            ]}
            delay={0.2}
          />

        </div>
      </div>
    </section>
  );
}
