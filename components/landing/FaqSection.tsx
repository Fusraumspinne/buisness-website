"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { useI18n } from "@/components/providers/i18n-provider";

const ease = [0.16, 1, 0.3, 1] as const;

export function FaqSection() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-background border-t border-border relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] select-none pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
            className="w-full lg:w-1/3 lg:sticky lg:top-32"
          >
            <p className="uppercase tracking-widest text-xs md:text-sm font-semibold mb-3 md:mb-4 text-accent">{t.faq.tag}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">{t.faq.title}</h2>
            <p className="text-foreground/60 font-light text-base md:text-lg text-balance">
              {t.faq.desc}
            </p>
          </motion.div>

          <div className="w-full lg:w-2/3 flex flex-col pt-4">
             {t.faq.items.map((item, i) => {
               const isOpen = openIndex === i;
               
               return (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.6, delay: i * 0.1, ease }}
                   className="group border-b border-border/50 first:pt-0 last:border-0"
                 >
                   <button 
                     onClick={() => setOpenIndex(isOpen ? null : i)}
                     className="w-full text-left py-6 md:py-10 flex justify-between items-center gap-6"
                   >
                     <span className="text-lg md:text-2xl font-medium tracking-tight group-hover:text-accent transition-colors duration-300">
                       {item.question}
                     </span>
                     <div className={`flex-shrink-0 w-8 h-8 md:w-12 md:h-12 border border-border/50 rounded-full flex items-center justify-center transition-all duration-500 bg-surface/50 ${isOpen ? 'rotate-135 bg-foreground text-background scale-90 border-transparent' : 'group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:text-accent'}`}>
                       <Plus strokeWidth={1.5} className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-500" />
                     </div>
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
                         <p className="pb-8 md:pb-12 text-foreground/60 text-base md:text-xl font-light leading-relaxed max-w-3xl">
                           {item.answer}
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
