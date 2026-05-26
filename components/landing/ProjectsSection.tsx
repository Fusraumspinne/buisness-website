"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  { 
    id: 1, 
    title: "NexScale SaaS", 
    category: "01 // Custom Web App", 
    role: "Full-Stack Setup",
    desc: "Ein komplexes B2B Dashboard mit Echtzeit-Analytics, Multi-Tenant Architektur und Stripe Billing. Performance optimiert für große Datensätze.",
    image: "/Platzhalter.png" 
  },
  { 
    id: 2, 
    title: "Aura Architecture", 
    category: "02 // Corporate Website", 
    role: "Design & Next.js SSG",
    desc: "Ein immersives Web-Erlebnis für ein Architekturbüro. Hochperformant, mit CMS Anbindung, Multi-Language und butterweichen Transitions.",
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
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ ease, duration: 1.2 }}
      className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center group`}
    >
      <div className="w-full md:w-3/5 aspect-[4/3] md:aspect-[16/10] relative overflow-hidden bg-surface">
         <motion.div style={{ scale }} className="w-full h-full relative">
           <Image 
             src={item.image} 
             alt={item.title} 
             fill 
             className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
           />
         </motion.div>
      </div>
      <div className="w-full md:w-2/5 flex flex-col justify-center">
         <div className="overflow-hidden mb-6">
           <motion.p 
             initial={{ y: "100%" }}
             whileInView={{ y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2, ease }}
             className="text-accent font-mono text-sm tracking-widest uppercase"
           >
             {item.category}
           </motion.p>
         </div>
         <h3 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">{item.title}</h3>
         <p className="text-foreground/70 text-lg leading-relaxed mb-8">{item.desc}</p>
         <div className="pt-8 border-t border-border flex justify-between items-center text-sm uppercase tracking-widest font-medium">
           <span>Role</span>
           <span className="text-foreground/60">{item.role}</span>
         </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 container mx-auto px-6 bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
        className="flex flex-col flex-wrap md:flex-row justify-between items-end mb-24 pb-8 border-b border-border"
      >
        <div>
          <p className="uppercase tracking-widest text-sm font-semibold mb-4 text-accent">Showcase</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Ausgewählte<br/>Arbeiten.</h2>
        </div>
      </motion.div>

      <div className="flex flex-col gap-32">
        {projects.map((item, i) => (
          <ProjectCard key={item.id} item={item} i={i} />
        ))}
      </div>
    </section>
  );
}
