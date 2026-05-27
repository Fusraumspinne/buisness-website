"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/components/providers/i18n-provider";

const ease = [0.16, 1, 0.3, 1] as const;

export function ServicesSection() {
  const { t } = useI18n();

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
        className="p-6 md:p-8 lg:p-12 relative bg-surface border border-border flex flex-col h-full group transition-all duration-700 hover:shadow-2xl hover:shadow-foreground/5 hover:border-foreground/20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-700 pointer-events-none z-0" />

        <div className="relative z-10 flex justify-between items-start mb-10 md:mb-12">
          <span className="font-mono text-xs md:text-sm text-accent uppercase tracking-widest">{num} //</span>
          <div className="text-right font-mono text-[10px] md:text-xs text-foreground/50 space-y-1">
            <p>Timeline: {timeline}</p>
            <p>Investment: {budget}</p>
          </div>
        </div>
        
        <h3 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4 tracking-tight flex items-center gap-4">
          {title} 
          <motion.div
             initial={{ opacity: 0, x: -10, y: 10 }}
             whileHover={{ opacity: 1, x: 0, y: 0 }}
             className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 text-accent hidden md:block"
          >
            <ArrowUpRight strokeWidth={2.5} />
          </motion.div>
        </h3>
        <p className="relative z-10 text-foreground/60 text-base md:text-lg font-light mb-10 md:mb-12 group-hover:text-foreground/80 transition-colors duration-500">{tagline}</p>
        
        <div className="relative z-10 mt-auto pt-6 md:pt-8 border-t border-border group-hover:border-foreground/20 transition-colors duration-500">
          <p className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-foreground/40 mb-4 md:mb-6">{t.services.arch}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-4 md:gap-x-6">
            {features.map((feature, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.3 + (i * 0.05), ease }}
                className="flex items-center gap-3 text-xs md:text-sm font-light text-foreground group-hover:translate-x-1 transition-transform duration-500"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 group-hover:scale-150 transition-transform duration-500" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-background border-t border-border overflow-hidden relative">
      
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] select-none pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end border-b border-border/50 pb-6 md:pb-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter">{t.services.title1}<br />{t.services.title2}</h2>
          </div>
          <p className="max-w-md text-base md:text-lg font-light text-foreground/60 md:text-right mt-6 md:mt-0">
            {t.services.desc}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <ServiceCard 
            num="01"
            title={t.services.s1.title}
            tagline={t.services.s1.tagline}
            timeline={t.services.s1.timeline}
            budget={t.services.s1.budget}
            features={t.services.s1.features}
            delay={0.1}
          />

          <ServiceCard 
            num="02"
            title={t.services.s2.title}
            tagline={t.services.s2.tagline}
            timeline={t.services.s2.timeline}
            budget={t.services.s2.budget}
            features={t.services.s2.features}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
