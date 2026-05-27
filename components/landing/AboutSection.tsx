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
    <section id="about" ref={containerRef} className="py-32 bg-surface transition-colors duration-500 relative">
      
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] select-none pointer-events-none mix-blend-multiply dark:mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 md:gap-24 relative items-start">
          
          <div className="md:col-span-5 relative md:sticky md:top-32 md:pb-12 h-fit">
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
                  Full-Stack Web Developer
                </motion.p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Marvin Jäger</h2>
            </motion.div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-32 pt-8 md:pt-16 pb-32 md:pb-0">
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >
              <h3 className="text-3xl font-semibold mb-8 flex items-center gap-4 tracking-tight">
                <span className="w-8 h-px bg-foreground block" /> Über Mich
              </h3>
              <p className="text-foreground/80 text-2xl font-light leading-relaxed text-balance">
                Hi! Ich bin Full-Stack Webentwickler aus Deutschland mit über 5 Jahren Erfahrung. Ich spezialisiere mich auf moderne, rasend schnelle und skalierbare Web-Applikationen mit Technologien wie Next.js, PostgreSQL, Supabase und Docker. 
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
              className="border-l-2 border-accent pl-8 ml-2 py-2"
            >
               <h3 className="text-2xl font-serif italic mb-6 text-foreground/90">Maßgeschneidert & Skalierbar.</h3>
               <p className="text-foreground/60 text-lg font-light leading-relaxed text-balance max-w-2xl">
                 Ob responsive Portfolios, Custom Web-Apps, komplexe Dashboards oder Backend-Systeme – ich baue Lösungen, die exakt auf den Use Case zugeschnitten sind. Kein Baukasten, sondern echte digitale Produkte von der Code-Architektur bis hin zum Deployment Setup.
               </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >
              <h3 className="text-3xl font-semibold mb-8 flex items-center gap-4 tracking-tight">
                <span className="w-8 h-px bg-foreground block" /> Erfahrung
              </h3>
              <p className="text-foreground/70 text-lg font-light leading-relaxed mb-10 max-w-2xl">
                Durch intensive Projektarbeit und Praktika in Softwareunternehmen habe ich tiefe Einblicke in professionelle Entwickler-Workflows gewonnen – Frontend, Backend sowie System Integration.
              </p>
              <div className="space-y-6 max-w-2xl">
                {[
                  { label: "Web Development", time: "5+ Jahre" },
                  { label: "Frontend (React, Next.js)", time: "Pro Level" },
                  { label: "Backend (Node, Postgres)", time: "Intermediate" }
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

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >
               <h3 className="text-3xl font-semibold mb-10 flex items-center gap-4 tracking-tight">
                <span className="w-8 h-px bg-foreground block" /> Arbeitsweise
              </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-16 max-w-3xl">
                 <div className="group">
                    <span className="text-accent font-mono text-sm tracking-widest block mb-4 group-hover:pl-2 transition-all duration-300">01 / KONZEPT</span>
                    <h4 className="text-xl mb-4 font-medium">Strategie & UX</h4>
                    <p className="text-foreground/60 font-light leading-relaxed">Wir analysieren das Problem bis auf den Grund. Keine Zeile Code wird geschrieben, bevor Architektur und User Journey absolut präzise definiert sind.</p>
                 </div>
                 <div className="group">
                    <span className="text-accent font-mono text-sm tracking-widest block mb-4 group-hover:pl-2 transition-all duration-300">02 / UMSETZUNG</span>
                    <h4 className="text-xl mb-4 font-medium">Engineering</h4>
                    <p className="text-foreground/60 font-light leading-relaxed">Full-Stack Entwicklung mit modernen Technologien. Kompromissloser Fokus auf Performance, saubere Systemstrukturen und High-End UI-Animationen.</p>
                 </div>
                 <div className="group">
                    <span className="text-accent font-mono text-sm tracking-widest block mb-4 group-hover:pl-2 transition-all duration-300">03 / STAGING</span>
                    <h4 className="text-xl mb-4 font-medium">Transparente Live-Previews</h4>
                    <p className="text-foreground/60 font-light leading-relaxed">Keine Blackbox-Entwicklung. Sie erhalten bereits frühzeitig im Prozess einen passwortgeschützten Staging-Link. So können Sie den Fortschritt jederzeit live auf allen Geräten mittesten.</p>
                 </div>
                 <div className="group">
                    <span className="text-accent font-mono text-sm tracking-widest block mb-4 group-hover:pl-2 transition-all duration-300">04 / QUALITÄT</span>
                    <h4 className="text-xl mb-4 font-medium">Zero-Bug Garantie</h4>
                    <p className="text-foreground/60 font-light leading-relaxed">Mein Stack ist auf Zuverlässigkeit ausgelegt. Sollten nach dem finalen Handover und Live-Gang dennoch technische Fehler in meinem Code auftreten, behebe ich diese anstandslos – völlig kostenlos.</p>
                 </div>
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease }}
            >
              <h3 className="text-3xl font-semibold mb-8 flex items-center gap-4 tracking-tight">
                <span className="w-8 h-px bg-foreground block" /> Skills & Tech Stack
              </h3>
              <p className="text-foreground/70 text-lg font-light leading-relaxed mb-12 max-w-2xl">
                Mein Stack ist konsequent auf Performance und Entwickler-Experience ausgerichtet. Fully typed, Edge-ready und absolut verlässlich im Production-Einsatz.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                <div>
                  <h4 className="font-mono text-sm text-foreground/40 mb-6 tracking-widest uppercase">Frontend & UI</h4>
                  <ul className="space-y-4 font-light text-foreground/80">
                    {["Next.js (App Router)", "React & TypeScript", "Tailwind CSS", "Framer Motion", "Figma UI/UX"].map((skill, idx) => (
                      <motion.li 
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 cursor-default"
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
                        className="flex items-center gap-4 cursor-default"
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
