"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { 
    id: 1, 
    title: "CRM System", 
    category: "Custom Web App", 
    price: "~ 1000 €",
    desc: "Ein komplexes, maßgeschneidetes CRM-System mit umfangreichen Funktionen und diversen Integrationen von Technologien und Funktionen, um die Verwaltung von Akten und Kunden zu optimieren.",
    image: "/Platzhalter.png" 
  },
  { 
    id: 2, 
    title: "Burger Shop", 
    category: "Landing Page", 
    price: "~ 150 €",
    desc: "Eine visuell auffällige Landing Page mit starker Markenidentität, Custom Animations und Neon-Akzenten für ein einzigartiges Erlebnis, das die Aufmerksamkeit der Kunden auf sich zieht.",
    image: "/Platzhalter.png" 
  },
  { 
    id: 3, 
    title: "Lead Managing Tool", 
    category: "Custom Web App", 
    price: "~ 750 €",
    desc: "Ein Tool zur Lead-Einreichung und Verwaltung mit täglichen Reports und verschiedenen Nutzerrollen, um Effizienz und Übersicht zu steigern.",
    image: "/Platzhalter.png" 
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

function ProjectCard({ item, i }: { item: any; i: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ ease, duration: 1, delay: i * 0.15 }}
      // Versetzen der mittleren Karte für einen modernen Masonry-Look
      className={`flex flex-col group cursor-pointer ${i === 1 ? 'md:mt-24' : ''}`}
    >
      <div className="w-full aspect-[4/5] relative overflow-hidden bg-surface mb-8 border border-border">
         <motion.div style={{ scale }} className="w-full h-full relative origin-bottom">
           <Image 
             src={item.image} 
             alt={item.title} 
             fill 
             className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-90 group-hover:opacity-100"
           />
         </motion.div>
         
         <div className="absolute top-4 left-4 overflow-hidden">
             <motion.span 
                 initial={{ y: "-100%" }}
                 whileInView={{ y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease }}
                 className="block bg-background/90 backdrop-blur text-foreground text-xs font-mono uppercase tracking-widest px-3 py-1.5 border border-border"
             >
                 {item.category}
             </motion.span>
         </div>
      </div>

      <div className="flex-1 flex flex-col">
         <h3 className="text-3xl font-semibold tracking-tight mb-4 flex items-center justify-between overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease }}
            >
              {item.title}
            </motion.span>
            <ArrowUpRight className="opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-accent transition-all duration-500" strokeWidth={1.5} />
         </h3>
         
         <p className="text-foreground/60 text-base leading-relaxed mb-8 flex-1">
            {item.desc}
         </p>
         
         <div className="pt-4 border-t border-border flex justify-between items-center text-xs uppercase tracking-widest font-mono text-foreground/50 group-hover:border-foreground/20 transition-colors duration-500">
           <span className="group-hover:text-foreground transition-colors duration-500">Project Value</span>
           <span className="text-foreground/80">{item.price}</span>
         </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 bg-background border-t border-border relative overflow-hidden">
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 select-none pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 pb-8 border-b border-border/50"
        >
          <div>
            <p className="uppercase tracking-widest text-sm font-semibold mb-4 text-accent">Showcase</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Ausgewählte<br/>Arbeiten.</h2>
          </div>
          <div className="text-foreground/50 font-mono text-sm uppercase tracking-widest mt-6 md:mt-0">
             03 Projects
          </div>
        </motion.div>

        {/* Kompaktes, modernes 3-Spalten-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {projects.map((item, i) => (
            <ProjectCard key={item.id} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
