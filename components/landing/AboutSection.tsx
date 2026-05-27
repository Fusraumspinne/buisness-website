"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useI18n } from "@/components/providers/i18n-provider";

const ease = [0.16, 1, 0.3, 1] as const;

export function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const { t } = useI18n();

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-surface transition-colors duration-500 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] select-none pointer-events-none mix-blend-multiply dark:mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 lg:gap-24 relative items-start">
          
          <div className="md:col-span-5 relative md:sticky md:top-32 md:pb-12 h-fit">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, ease }}
            >
              <div className="aspect-[4/5] relative overflow-hidden mb-6 md:mb-8 border border-border">
                <motion.div style={{ scale: imgScale }} className="w-full h-full relative">
                  <Image 
                    src="/Me.png"
                    alt="Marvin Jäger"
                    fill
                    className="object-cover transition-all duration-1000"
                  />
                </motion.div>
                
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-background text-foreground text-[10px] md:text-xs font-mono px-3 md:px-4 py-2 uppercase tracking-widest border border-border shadow-xl"
                >
                   {t.about.tag}
                </motion.div>
              </div>
              <div className="overflow-hidden mb-2">
                <motion.p 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease }}
                  className="uppercase tracking-widest text-xs md:text-sm font-semibold text-accent"
                >
                  {t.about.role}
                </motion.p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Marvin Jäger</h2>
            </motion.div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-24 md:gap-32 pt-0 md:pt-16 pb-16 md:pb-0">
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center gap-4 tracking-tight">
                <span className="w-6 md:w-8 h-px bg-foreground block" /> {t.about.section1Title}
              </h3>
              <p className="text-foreground/80 text-xl md:text-2xl font-light leading-relaxed text-balance">
                {t.about.section1Desc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
              className="border-l-2 border-accent pl-6 md:pl-8 ml-1 md:ml-2 py-2"
            >
               <h3 className="text-xl md:text-2xl font-serif italic mb-4 md:mb-6 text-foreground/90">{t.about.quoteTitle}</h3>
               <p className="text-foreground/60 text-base md:text-lg font-light leading-relaxed text-balance max-w-2xl">
                 {t.about.quoteDesc}
               </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center gap-4 tracking-tight">
                <span className="w-6 md:w-8 h-px bg-foreground block" /> {t.about.expTitle}
              </h3>
              <p className="text-foreground/70 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-2xl">
                {t.about.expDesc}
              </p>
              <div className="space-y-4 md:space-y-6 max-w-2xl">
                {t.about.expItems.map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10, color: "var(--accent)" }}
                    transition={{ ease }}
                    className="flex justify-between items-center border-b border-border pb-4 md:pb-6 cursor-default"
                  >
                    <span className="font-medium text-base md:text-lg">{item.label}</span>
                    <span className="text-accent tracking-widest font-mono text-xs md:text-sm">{item.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >
               <h3 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-10 flex items-center gap-4 tracking-tight">
                <span className="w-6 md:w-8 h-px bg-foreground block" /> {t.about.workflowTitle}
              </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 gap-y-12 md:gap-y-16 max-w-3xl">
                 {t.about.workflowItems.map((item, i) => (
                   <div key={i} className="group">
                      <span className="text-accent font-mono text-[10px] md:text-sm tracking-widest block mb-3 md:mb-4 group-hover:pl-2 transition-all duration-300">{item.num}</span>
                      <h4 className="text-lg md:text-xl mb-3 md:mb-4 font-medium">{item.title}</h4>
                      <p className="text-foreground/60 text-sm md:text-base font-light leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center gap-4 tracking-tight">
                <span className="w-6 md:w-8 h-px bg-foreground block" /> {t.about.skillsTitle}
              </h3>
              <p className="text-foreground/70 text-base md:text-lg font-light leading-relaxed mb-10 md:mb-12 max-w-2xl">
                {t.about.skillsDesc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12">
                <div>
                  <h4 className="font-mono text-xs md:text-sm text-foreground/40 mb-4 md:mb-6 tracking-widest uppercase">{t.about.frontendTitle}</h4>
                  <ul className="space-y-3 md:space-y-4 font-light text-sm md:text-base text-foreground/80">
                    {["Next.js (App Router)", "React & TypeScript", "Tailwind CSS", "Framer Motion", "Figma UI/UX"].map((skill, idx) => (
                      <motion.li 
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 md:gap-4 cursor-default"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" /> {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs md:text-sm text-foreground/40 mb-4 md:mb-6 tracking-widest uppercase">{t.about.backendTitle}</h4>
                  <ul className="space-y-3 md:space-y-4 font-light text-sm md:text-base text-foreground/80">
                    {["Node.js & Edge", "PostgreSQL", "Prisma ORM", "WebSockets (Realtime)", "Vercel & Docker"].map((skill, idx) => (
                      <motion.li 
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 md:gap-4 cursor-default"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" /> {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
