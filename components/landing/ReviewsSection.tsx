"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    text: "Marvin hat unsere Vision nicht nur technisch perfekt umgesetzt, sondern auch konzeptionell auf ein neues Level gehoben. Absolute Empfehlung.",
    author: "CEO, NexScale",
    role: "B2B SaaS Platform"
  },
  {
    text: "Die Geschwindigkeit und Präzision, mit der hier gearbeitet wird, ist beeindruckend. Unsere Corporate Site lädt rasend schnell und das Design sticht heraus.",
    author: "Marketing Lead, Aura",
    role: "Architekturbüro"
  }
];

const ease = [0.16, 1, 0.3, 1] as const;

export function ReviewsSection() {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-6">
        
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
              className="relative"
            >
              <div className="absolute -top-12 -left-8 text-[8rem] font-serif text-foreground/[0.03] leading-none">"</div>
              <p className="relative text-2xl md:text-3xl font-light leading-snug mb-10 text-balance z-10 border-l-2 border-accent pl-6 py-2">
                {review.text}
              </p>
              <div className="flex flex-col pl-6">
                <span className="font-bold text-lg">{review.author}</span>
                <span className="text-foreground/50 font-mono text-sm tracking-widest">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
