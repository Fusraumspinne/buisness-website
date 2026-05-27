"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    question: "Was benötigst du von mir, um zu starten?",
    answer: "In der Regel reicht eine kurze Beschreibung des Projekts, vorhandener Content (erste Texte, Bilder, Logo) und idealerweise ein paar Beispiele von Websites, die Ihnen gefallen. Den Rest erarbeiten wir in einem kurzen Setup-Call."
  },
  {
    question: "Hilfst du auch beim Design, wenn ich keines habe?",
    answer: "Absolut! Ich fungiere nicht nur als reiner Entwickler. Ich entwerfe moderne, cleane und konvertierende User Interfaces basierend auf Ihrer Marke und bespreche die UX-Strategie im Detail mit Ihnen, bevor wir in den Code gehen."
  },
  {
    question: "Kümmerst du dich um Hosting und Deployment?",
    answer: "Ja, der Live-Gang ist inklusive. Ich richte das komplette Hosting (in der Regel über Vercel) ein, verknüpfe Ihre Domain und sorge dafür, dass die Seite von Tag eins an weltweit performant, sicher und SSL-verschlüsselt läuft."
  },
  {
    question: "Wie viele Anpassungen / Revisions sind möglich?",
    answer: "Bei kleinen Projekten und Landing Pages sind standardmäßig 3 Feedback-Runden für das Design inklusive. Wir definieren Meilensteine, damit das Projekt immer in die richtige Richtung läuft und böse Überraschungen ausgeschlossen sind."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-background border-t border-border relative">
      
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] select-none pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid md:grid-cols-12 gap-16 md:gap-24">
          <div className="md:col-span-5 md:sticky md:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >
              <p className="uppercase tracking-widest text-sm font-semibold mb-4 text-accent">Questions</p>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">FAQ.</h2>
              <p className="text-foreground/60 text-lg font-light leading-relaxed">
                Alles Wichtige zum Ablauf, zu den Projekt-Voraussetzungen und technischen Rahmenbedingungen. Noch Fragen offen? Einfach kontaktieren.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease }}
                  className="border-b border-border"
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left py-8 flex justify-between items-center group cursor-pointer"
                  >
                    <span className={`text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300 pr-8 ${isOpen ? 'text-accent' : 'group-hover:text-foreground/70'}`}>
                      {faq.question}
                    </span>
                    <motion.div 
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.5, ease }}
                      className={`flex-shrink-0 ${isOpen ? 'text-accent' : 'text-foreground/40 group-hover:text-foreground'}`}
                    >
                      <Plus size={24} strokeWidth={1.5} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-foreground/70 text-lg font-light leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
