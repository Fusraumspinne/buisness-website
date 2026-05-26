"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-surface transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 md:gap-24 relative">
          
          {/* Image & Intro (Left Column) - Sticky */}
          <div className="md:col-span-5 relative h-min md:sticky md:top-32">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, ease }}
            >
              <div className="aspect-[4/5] relative overflow-hidden mb-8 border border-border">
                <motion.div style={{ scale: imgScale }} className="w-full h-full relative">
                  <Image 
                    src="/Platzhalter.png"
                    alt="Marvin Jäger"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </motion.div>
                
                {/* Floating Tag */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute bottom-6 left-6 bg-background text-foreground text-xs font-mono px-4 py-2 uppercase tracking-widest border border-border shadow-xl"
                >
                   Available for Projects
                </motion.div>
              </div>
              <div className="overflow-hidden mb-2">
                <motion.p 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease }}
                  className="uppercase tracking-widest text-sm font-semibold text-accent"
                >
                  Founder & Lead Engineer
                </motion.p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Marvin Jäger</h2>
            </motion.div>
          </div>

          {/* Details (Right Column) */}
          <div className="md:col-span-7 flex flex-col gap-24 pt-8">
            
            {/* Über mich */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >
              <h3 className="text-3xl font-semibold mb-8 flex items-center gap-4 tracking-tight">
                <span className="w-8 h-px bg-foreground block" /> Über Mich
              </h3>
              <p className="text-foreground/70 text-xl font-light leading-relaxed text-balance">
                Ich schreibe Code, der robust ist, und entwerfe Interfaces, die begeistern. 
                Marvin Software Solution ist aus der Überzeugung heraus entstanden, dass herausragende Software den perfekten 
                Schnittpunkt zwischen tiefgründiger Technik und makellosem Design treffen muss. Keine Kompromisse. Kein standardisiertes Agentur-Einerlei.
              </p>
            </motion.div>

            {/* Erfahrung */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >
              <h3 className="text-3xl font-semibold mb-8 flex items-center gap-4 tracking-tight">
                <span className="w-8 h-px bg-foreground block" /> Erfahrung
              </h3>
              <p className="text-foreground/70 text-lg font-light leading-relaxed mb-10">
                Über die Jahre habe ich Dutzende von digitalen Produkten live gebracht – von flüssigen, Conversion-optimierten Corporate 
                Websites über komplexe APIs bis hin zu hoch skalierbaren B2B Dashboards.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Software Engineering", time: "5+ Jahre" },
                  { label: "UI/UX & Digital Design", time: "4+ Jahre" },
                  { label: "System Architektur", time: "3+ Jahre" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10, color: "var(--accent)" }}
                    transition={{ ease }}
                    className="flex justify-between items-center border-b border-border pb-6 cursor-default"
                  >
                    <span className="font-medium text-lg">{item.label}</span>
                    <span className="text-accent tracking-widest font-mono text-sm">{item.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >
              <h3 className="text-3xl font-semibold mb-8 flex items-center gap-4 tracking-tight">
                <span className="w-8 h-px bg-foreground block" /> Skills & Tech Stack
              </h3>
              <p className="text-foreground/70 text-lg font-light leading-relaxed mb-12">
                Mein Stack ist kompromisslos auf Performance und Entwickler-Experience ausgerichtet. Fully typed, Edge-ready und absolut verlässlich für Produktion.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                <div>
                  <h4 className="font-mono text-sm text-foreground/40 mb-6 tracking-widest uppercase">Frontend & UI</h4>
                  <ul className="space-y-4 font-light text-foreground/80">
                    {["Next.js (App Router)", "React & TypeScript", "Tailwind CSS", "Framer Motion", "Figma UI/UX"].map((skill, idx) => (
                      <motion.li 
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 cursor-default"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" /> {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-sm text-foreground/40 mb-6 tracking-widest uppercase">Backend & Cloud</h4>
                  <ul className="space-y-4 font-light text-foreground/80">
                    {["Node.js & Edge", "PostgreSQL", "Prisma ORM", "WebSockets (Realtime)", "Vercel & Docker"].map((skill, idx) => (
                      <motion.li 
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 cursor-default"
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
