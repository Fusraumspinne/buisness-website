"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Marvin hat unsere Vision nicht nur technisch perfekt umgesetzt, sondern auch konzeptionell auf ein neues Level gehoben. Absolute Empfehlung.",
    role: "B2B SaaS Platform"
  },
  {
    text: "Die Geschwindigkeit und Präzision, mit der hier gearbeitet wird, ist beeindruckend. Unsere Corporate Site lädt rasend schnell und das Design sticht heraus.",
    role: "Architekturbüro"
  }
];

const ease = [0.16, 1, 0.3, 1] as const;

export function ReviewsSection() {
  return (
    <section className="py-32 bg-surface overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 select-none pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-24"
        >
          <p className="uppercase tracking-widest text-sm font-semibold mb-4 text-accent">Testimonials</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Client<br/>Feedback.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              whileHover={{ x: 10 }}
              className="relative group transition-transform duration-700"
            >
              <div className="absolute -top-12 -left-8 text-[8rem] font-serif text-foreground/[0.03] group-hover:text-foreground/5 transition-colors duration-700 leading-none">"</div>
              
              <div className="flex gap-1 mb-6 pl-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (i * 0.1) + 0.3 + (star * 0.05), duration: 0.5, ease }}
                  >
                    <Star size={16} className="fill-accent text-accent" />
                  </motion.div>
                ))}
              </div>

              <p className="relative text-2xl md:text-3xl font-light leading-snug mb-10 text-balance z-10 border-l-2 border-accent pl-6 py-2">
                {review.text}
              </p>
              <div className="flex flex-col pl-6">
                <span className="text-foreground/50 font-mono tracking-widest uppercase text-sm group-hover:text-foreground/80 transition-colors duration-500">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
