"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/components/providers/i18n-provider";

const ease = [0.16, 1, 0.3, 1] as const;

export function ProjectsSection() {
  const { t } = useI18n();

  const ProjectCard = ({ item, i }: { item: any; i: number }) => {
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
        className={`flex flex-col group cursor-pointer ${i === 1 ? 'md:mt-16 lg:mt-24' : ''}`}
      >
        <div className="w-full aspect-[4/5] relative overflow-hidden bg-surface mb-6 md:mb-8 border border-border">
           <motion.div style={{ scale }} className="w-full h-full relative origin-bottom">
             <Image 
               src={item.image} 
               alt={item.title} 
               fill 
               className="object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
             />
           </motion.div>
           
           <div className="absolute top-4 left-4 overflow-hidden">
               <motion.span 
                   initial={{ y: "-100%" }}
                   whileInView={{ y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease }}
                   className="block bg-background/90 backdrop-blur text-foreground text-[10px] md:text-xs font-mono uppercase tracking-widest px-3 py-1.5 border border-border"
               >
                   {item.category}
               </motion.span>
           </div>
        </div>
  
        <div className="flex-1 flex flex-col">
           <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 md:mb-4 flex items-center justify-between overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease }}
              >
                {item.title}
              </motion.span>
              <ArrowUpRight className="opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-accent transition-all duration-500 hidden md:block" strokeWidth={1.5} />
           </h3>
           
           <p className="text-foreground/60 text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-1">
              {item.desc}
           </p>
           
           <div className="pt-4 border-t border-border flex justify-between items-center text-[10px] md:text-xs uppercase tracking-widest font-mono text-foreground/50 group-hover:border-foreground/20 transition-colors duration-500">
             <span className="group-hover:text-foreground transition-colors duration-500">{t.projects.value}</span>
             <span className="text-foreground/80">{item.price}</span>
           </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-background border-t border-border relative overflow-hidden">
      
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] select-none pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 pb-6 md:pb-8 border-b border-border/50"
        >
          <div>
            <p className="uppercase tracking-widest text-xs md:text-sm font-semibold mb-3 md:mb-4 text-accent">{t.projects.tag}</p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter">{t.projects.title1}<br/>{t.projects.title2}</h2>
          </div>
          <div className="text-foreground/50 font-mono text-[10px] md:text-sm uppercase tracking-widest mt-6 md:mt-0">
             {t.projects.count}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {t.projects.items.map((item, i) => (
            <ProjectCard key={item.id} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
