"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useI18n } from "@/components/providers/i18n-provider";

const ease = [0.16, 1, 0.3, 1] as const;

export function ReviewsSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 md:py-32 bg-surface overflow-hidden relative">

      <div className="absolute inset-0 bg-grid-pattern opacity-10 select-none pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 md:mb-24"
        >
          <p className="uppercase tracking-widest text-xs md:text-sm font-semibold mb-3 md:mb-4 text-accent">{t.reviews.tag}</p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter">{t.reviews.title1}<br/>{t.reviews.title2}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {t.reviews.items.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              whileHover={{ x: 10 }}
              className="relative group transition-transform duration-700"
            >
              <div className="absolute -top-8 -left-4 md:-top-12 md:-left-8 text-[6rem] md:text-[8rem] font-serif text-foreground/[0.03] group-hover:text-foreground/5 transition-colors duration-700 leading-none">"</div>
              
              <div className="flex gap-1 mb-6 pl-4 md:pl-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (i * 0.1) + 0.3 + (star * 0.05), duration: 0.5, ease }}
                  >
                    <Star size={14} className="fill-accent text-accent md:w-4 md:h-4" />
                  </motion.div>
                ))}
              </div>

              <p className="relative text-xl md:text-2xl lg:text-3xl font-light leading-snug mb-8 md:mb-10 text-balance z-10 border-l-2 border-accent pl-4 md:pl-6 py-2">
                {review.text}
              </p>
              <div className="flex flex-col pl-4 md:pl-6">
                <span className="text-foreground/50 font-mono tracking-widest uppercase text-xs md:text-sm group-hover:text-foreground/80 transition-colors duration-500">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
