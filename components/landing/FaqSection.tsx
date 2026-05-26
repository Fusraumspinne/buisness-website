"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Baut ihr auch einfache Wordpress-Seiten?",
    a: "Nein. Wir sind auf moderne Web-Architekturen spezialisiert. Wir nutzen React, Next.js und headless CMS-Systeme, um maximale Performance und Sicherheit zu garantieren."
  },
  {
    q: "Wie lange dauert ein typisches Projekt?",
    a: "Das hängt stark von der Komplexität ab. Eine High-End Corporate Website dauert in der Regel 4-6 Wochen, während komplexe Web-Apps oder Portale 2-4 Monate in Anspruch nehmen können."
  },
  {
    q: "Übernehmt ihr auch das Hosting?",
    a: "Ja. Wir deployen auf modernen Infrastrukturen (Vercel, AWS, Docker) und kümmern uns um Monitoring, Updates und Skalierung."
  },
  {
    q: "Arbeitet ihr auch mit bestehenden Codebases?",
    a: "Wenn die Codebase modern (React/Next.js/TypeScript) und sauber ist: Ja. Bei Legacy-Systemen empfehlen wir meistens einen zukunftssicheren Rewrite."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-none mb-16 text-center"
        >
          Fragen? <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Antworten.</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`border border-foreground/10 rounded-3xl overflow-hidden transition-colors ${openIndex === idx ? 'bg-foreground/5' : 'bg-transparent'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-8 py-6 flex items-center justify-between gap-6"
              >
                <span className="font-bold text-xl md:text-2xl">{faq.q}</span>
                <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === idx ? 'bg-blue-500 text-white' : 'bg-foreground/5 text-foreground'}`}>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-foreground/60 text-lg font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
